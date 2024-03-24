// Import necessary modules
import { NextRequest } from "next/server";
import { connectToDatabase } from '../dbConfig/dbconfig';

// Define the POST request handler
export async function POST(request: Request) {
  // Extract data from the request body
  const details = await request.json();
  const college = details.college;
  const startDate = details.startDate;
  const endDate = details.endDate;

  // Connect to MongoDB
  const client = await connectToDatabase();
  const db = client.db('Artendance');
  const collection = db.collection('students');

  // Define the match condition for the aggregation pipeline
  const matchCondition = {
    'college': college,
  };

  // Check if startDate or endDate is provided and update the match condition accordingly
  if (startDate) {
    matchCondition['Date'] = { '$gte': new Date(startDate) };
  } else if (endDate) {
    matchCondition['Date'] = { '$lte': new Date(endDate) };
  }

  // Define the aggregation pipeline stages
  const agg = [
    {
      '$match': matchCondition
    }, {
      '$group': {
        '_id': '$Date',
        'EliteCount': {
          '$sum': {
            '$cond': [
              { '$eq': ['$class', 'Elite'] },
              1,
              0
            ]
          }
        },
        'FSACount': {
          '$sum': {
            '$cond': [
              { '$eq': ['$class', 'FSA'] },
              1,
              0
            ]
          }
        }
      }
    }, {
      '$project': {
        '_id': 0,
        'Date': '$_id',
        'EliteCount': 1,
        'FSACount': 1
      }
    }
  ];

  try {
    // Execute the aggregation pipeline
    const result = await collection.aggregate(agg).toArray();
    console.log(result);

    // Return the aggregated data as JSON response
    return new Response(JSON.stringify(result));
  } catch (error) {
    console.error(error);

    // Return an error response in case of any issues
    return new Response('Error processing request', { status: 500 });
  } finally {
    // Disconnect from MongoDB after processing the request
    client.close();
  }
}
