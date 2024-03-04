// route.ts
import { NextRequest } from "next/server";
import { connectToDatabase } from '../dbConfig/dbConfig';

export async function POST(request: Request){
    const details = await request.json();
    const startDate = details.startDate ? new Date(details.startDate) : undefined;
    const endDate = details.endDate ? new Date(details.endDate) : undefined;
    const date = details.date ? new Date(details.date) : undefined;
    const username = details.username;
    const className = details.className;
    
    const client = await connectToDatabase();
    const db = client.db('Artendance');
    const collection = db.collection('students');

    const matchCondition:any = {};

    // if (startDate && endDate) {
    //     matchCondition['Date'] = { '$gte': startDate.toISOString(), '$lte': endDate.toISOString() };
    // } else if (startDate) {
    //     matchCondition['Date'] = { '$gte': startDate.toISOString() };
    // } else if (endDate) {
    //     matchCondition['Date'] = { '$lte': endDate.toISOString() };
    // }
    if (date) {
        matchCondition['Date'] = date.toISOString();
    }
    
    if (username) {
        matchCondition['user_name'] = username;
    }
    if (className) {
      matchCondition['class'] = className;
  }
    try {
        const result = await collection.find(matchCondition).toArray();
        console.log(result);
        return new Response(JSON.stringify(result));
    } catch (error) {
        console.error(error);
        return new Response('Error processing request', { status: 500 });
    }
}
