const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        author: { type: Schema.Types.ObjectId, ref: "User" },
        body: { type: String, required: true },
        likes: Number,
    },
    {
        timestamps: true,
    }
)

const postSchema = new Schema(
    {
        title: { type: String, required: true },
        author: { type: Schema.Types.ObjectId, ref: "User" },
        body: { type: String, required: true },
        likes: { type: Number },
        comments: [commentSchema]
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;