import { NextRequest } from "next/server"
import { connectToDatabase } from '../dbConfig/dbConfig';

export async function GET() {
    try {
        // Connect to MongoDB
        const client = await connectToDatabase();
        const db = client.db('Artendance');
        const collection = db.collection('students');
        const dataToInsert = {
            key1: 'value1',
            key2: 'value2',
        };

        await collection.insertOne(dataToInsert);

        return new Response('Data has been successfully inserted into MongoDB.');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        return new Response('Error connecting to MongoDB.', { status: 500 });
    }
}

