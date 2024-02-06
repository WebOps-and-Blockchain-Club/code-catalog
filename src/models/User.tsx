import mongoose, { Schema, Model, Document } from "mongoose";

interface IUser extends Document {
  email: string;
  password?: string;
}

const { ObjectId } = Schema.Types;

const userSchema: Schema<IUser> = new Schema<IUser>(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;