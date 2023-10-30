import mongoose, { Document, Schema } from "mongoose";

interface User extends Document {
    name: string;
    email: string;
    password: string;
    github_id: string;
}
const userSchema: Schema<User> = new mongoose.Schema({
    name :{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match:  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    github_id:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        unique: true,
    },
})

let Model = mongoose.model<User>("Model", userSchema);

export default Model