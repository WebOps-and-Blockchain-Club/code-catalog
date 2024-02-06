import mongoose, { connect } from "mongoose";
import "dotenv/config";

const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://admin:code-catalog-wnb@code-catalog.fg99w3t.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    await connect(MONGO_URI, { autoCreate: true });
    console.log("successfully connected to database");
  } catch (e: any) {
    console.error(e);
  }
};

export default connectToMongo;
