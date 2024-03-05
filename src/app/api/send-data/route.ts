import { NextRequest } from "next/server";
import { connectToDatabase } from '../dbConfig/dbconfig';

export async function GET() {
    try {
        // Connect to MongoDB
        const client = await connectToDatabase();
        const db = client.db('Artendance');
        const collection = db.collection('students');

        // Generate random data
        const numRecords = 20; // Number of records to generate
        const college = "KMIT";
        const batches = ["FSA", "Elite"];
        const startDate = new Date('2024-01-01');
        const endDate = new Date('2024-12-31');

        const dataToInsert = [
            {
              "class": "Elite",
              "college": "KMIT",
              "Date": "2024-03-02",
              "user_name": "3568947",
              "total_time": 14582851.242
            },
            {
              "class": "FSA",
              "college": "KMIT",
              "Date": "2024-03-03",
              "user_name": "5937814",
              "total_time": 12980213.78
            },
            {
              "class": "Elite",
              "college": "KMIT",
              "Date": "2024-03-03",
              "user_name": "2748619",
              "total_time": 17832904.62
            },
            {
              "class": "Elite",
              "college": "KMIT",
              "Date": "2024-03-04",
              "user_name": "1746352",
              "total_time": 16940235.92
            },
            {
              "class": "FSA",
              "college": "KMIT",
              "Date": "2024-03-05",
              "user_name": "6097428",
              "total_time": 15490783.22
            },
            {
              "class": "Elite",
              "college": "KMIT",
              "Date": "2024-03-05",
              "user_name": "8073945",
              "total_time": 12094578.56
            },
            {
              "class": "FSA",
              "college": "KMIT",
              "Date": "2024-03-05",
              "user_name": "9152846",
              "total_time": 13982741.42
            },
            {
              "class": "Elite",
              "college": "KMIT",
              "Date": "2024-03-07",
              "user_name": "4652718",
              "total_time": 11568923.97
            },
            {
              "class": "Elite",
              "college": "KMIT",
              "Date": "2024-03-08",
              "user_name": "3762194",
              "total_time": 18972463.11
            },
            {
              "class": "FSA",
              "college": "KMIT",
              "Date": "2024-03-09",
              "user_name": "8327591",
              "total_time": 15826394.78
            },
            {
              "class": "Elite",
              "college": "KMIT",
              "Date": "2024-03-09",
              "user_name": "5913648",
              "total_time": 17492018.56
            },
            {
              "class": "Elite",
              "college": "KMIT",
              "Date": "2024-03-10",
              "user_name": "2951784",
              "total_time": 12568923.97
            },
            {
              "class": "FSA",
              "college": "KMIT",
              "Date": "2024-03-10",
              "user_name": "9402856",
              "total_time": 16789321.47
            },
            {
              "class": "Elite",
              "college": "KMIT",
              "Date": "2024-03-11",
              "user_name": "8497132",
              "total_time": 13954872.31
            },
            {
              "class": "FSA",
              "college": "KMIT",
              "Date": "2024-03-12",
              "user_name": "1538479",
              "total_time": 13598274.19
            },
            {
              "class": "Elite",
              "college": "KMIT",
              "Date": "2024-03-13",
              "user_name": "6279413",
              "total_time": 12135849.72
            },
            {
              "class": "FSA",
              "college": "KMIT",
              "Date": "2024-03-13",
              "user_name": "4598612",
              "total_time": 16592837.55
            },
            {
              "class": "Elite",
              "college": "KMIT",
              "Date": "2024-03-14",
              "user_name": "2978534",
              "total_time": 17964823.82
            },
            {
              "class": "FSA",
              "college": "KMIT",
              "Date": "2024-03-15",
              "user_name": "1947853",
              "total_time": 14826392.54
            },
            {
              "class": "Elite",
              "college": "KMIT",
              "Date": "2024-03-16",
              "user_name": "5384712",
              "total_time": 13258947.33
            },
            {
              "class": "FSA",
              "college": "KMIT",
              "Date": "2024-03-17",
              "user_name": "8492375",
              "total_time": 18592347.81
            },
            {
              "class": "Elite",
              "college": "KMIT",
              "Date": "2024-03-17",
              "user_name": "7269413",
              "total_time": 16273849.62
            },
            {
              "class": "FSA",
              "college": "KMIT",
              "Date": "2024-03-17",
              "user_name": "1746385",
              "total_time": 14785236.72
            },
            {
              "class": "Elite",
              "college": "KMIT",
              "Date": "2024-03-19",
              "user_name": "2754318",
              "total_time": 18945732.19
            },
            {
              "class": "FSA",
              "college": "KMIT",
              "Date": "2024-03-20",
              "user_name": "5184976",
              "total_time": 15632947.74
            },
            {
              "class": "Elite",
              "college": "KMIT",
              "Date": "2024-03-20",
              "user_name": "3918472",
              "total_time": 13684259.89
            },
            {
              "class": "FSA",
              "college": "KMIT",
              "Date": "2024-03-20",
              "user_name": "8296541",
              "total_time": 17492536.71
            },
            {
              "class": "Elite",
              "college": "KMIT",
              "Date": "2024-03-22",
              "user_name": "7658924",
              "total_time": 13259847.33
            },
            {
              "class": "FSA",
              "college": "KMIT",
              "Date": "2024-03-22",
              "user_name": "6317894",
              "total_time": 15928347.71
            },
            {
              "class": "Elite",
              "college": "KMIT",
              "Date": "2024-03-23",
              "user_name": "1947853",
              "total_time": 14862934.62
            },
            {
              "class": "FSA",
              "college": "KMIT",
              "Date": "2024-03-24",
              "user_name": "7269413",
              "total_time": 12592837.55
            },
            {
              "class": "Elite",
              "college": "KMIT",
              "Date": "2024-03-24",
              "user_name": "5184976",
              "total_time": 15632947.74
            },
            {
              "class": "FSA",
              "college": "KMIT",
              "Date": "2024-03-25",
              "user_name": "5184976",
              "total_time": 18945732.19
            },
            {
              "class": "Elite",
              "college": "KMIT",
              "Date": "2024-03-25",
              "user_name": "7658924",
              "total_time": 13259847.33
            },
            {
              "class": "Elite",
              "college": "KMIT",
              "Date": "2024-03-25",
              "user_name": "3918472",
              "total_time": 13684259.89
            }
          ]

        // Insert data into MongoDB
        await collection.insertMany(dataToInsert);

        return new Response('Data has been successfully inserted into MongoDB.');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        return new Response('Error connecting to MongoDB.', { status: 500 });
    }
}
