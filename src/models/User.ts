import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	githubID: {
		type: Number,
		required: true,
	},
	createdAt: {
		type: Date,
		required: true,
	},
});

export let User = mongoose.model("User", UserSchema);
