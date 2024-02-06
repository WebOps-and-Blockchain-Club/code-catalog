import mongoose from "mongoose";

const Schema = mongoose.Schema;

const OrgSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  adminID: {
    type: String,
    required: true,
  },
  members: [
    {
      userID: {
        //will match with githubID in user schema
        type: String,
        required: true,
      },
      repoID: {
        //will match with repoID in repo schema
        type: String,
        required: true,
      },
    },
  ],
  repos: [
    {
      repoID: {
        //will match with repoID in repo schema
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    required: true,
  },
});

export let Organization = mongoose.model("User", OrgSchema);
