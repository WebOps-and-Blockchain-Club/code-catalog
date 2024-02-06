import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RepoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  repoID: {
    type: String,
    required: true,
  },
  contributors: [
    {
      userID: {
        //will match with githubID in user schema
        type: String,
        required: true,
      },
    },
  ],
  orgName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

export let Repository = mongoose.model("User", RepoSchema);
