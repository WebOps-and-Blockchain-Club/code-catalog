import mongoose from 'mongoose';

async function connectDB() {
  const db = await mongoose.connect(process.env.MONGODB_URI ?? "mongodb://localhost:27017");
  console.log("Connection successful")
}

export default connectDB;