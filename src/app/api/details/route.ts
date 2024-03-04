// route.ts
import { NextRequest } from "next/server";
import { connectToDatabase } from '../dbConfig/dbConfig';


export async function POST(request: Request){
    const details = await request.json();
    const batch = details.batch;
    const college = details.college;
    const startDate = details.startDate;
    const endDate = details.endDate; 

    const client = await connectToDatabase();
    const db = client.db('Artendance');
    const collection = db.collection('students');

    const matchCondition = {
        'college': college, 
        'class': batch,
    };

    if (startDate) {
        matchCondition['Date'] = { '$gte': startDate };
    } else if (endDate) {
        matchCondition['Date'] = { '$lte': endDate };
    }

    const agg = [
        {
          '$match': matchCondition
        }, {
          '$group': {
            '_id': '$Date', 
            'count': {
              '$sum': 1
            }, 
            'usernames': {
              '$addToSet': {
                'username': '$user_name', 
                'totalTime': '$total_time'
              }
            }
          }
        }
    ];

    try {
        const result = await collection.aggregate(agg).toArray();
        console.log(result)
        return new Response(JSON.stringify(result));
    } catch (error) {
        console.error(error);
        return new Response('Error processing request', { status: 500 });
    }
}