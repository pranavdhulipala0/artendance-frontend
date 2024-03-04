import { MongoClient } from 'mongodb';

let cachedClient = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  try {
    const client = await MongoClient.connect('mongodb+srv://artendance:Qwerty123@cluster0.lvtxm2j.mongodb.net/Artendance?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    cachedClient = client;
    console.log("Connected to MongoDB");
    return client;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Unable to connect to MongoDB.');
  }
}
