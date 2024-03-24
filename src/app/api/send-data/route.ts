import { NextRequest } from "next/server";
import { connectToDatabase } from '../dbConfig/dbconfig';

// Function to generate random data
const generateRandomData = () => {
  const classNames = ["Elite", "FSA"];
  const colleges = ["KMIT"]; // Add more colleges if needed
  const startDate = new Date('2024-03-01'); // 1st March 2024
  const endDate = new Date('2024-03-31'); // 31st March 2024

  const dataToInsert = [];
  const numRecords = 20; // Number of records to generate

  for (let i = 0; i < numRecords; i++) {
    const randomClass = classNames[Math.floor(Math.random() * classNames.length)];
    const randomCollege = colleges[Math.floor(Math.random() * colleges.length)];
    const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));

    const data = {
      class: randomClass,
      college: randomCollege,
      Date: randomDate.toISOString().split('T')[0], // Format date as "YYYY-MM-DD"
      user_name: Math.floor(Math.random() * 10000000).toString(), // Random 7-digit number
      total_time: Math.random() * 20000000, // Random time value between 0 and 20,000,000
    };

    dataToInsert.push(data);
  }

  return dataToInsert;
};

export async function GET() {
  try {
    // Connect to MongoDB
    const client = await connectToDatabase();
    const db = client.db('Artendance');
    const collection = db.collection('students');

    // Generate random data
    const dataToInsert = generateRandomData();

    // Insert data into MongoDB
    await collection.insertMany(dataToInsert);

    return new Response('Data has been successfully inserted into MongoDB.');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    return new Response('Error connecting to MongoDB.', { status: 500 });
  }
}
