const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "User" },
        title: { type: String, required: true },
        body: { type: String, required: true },
        likes: { type: Number }
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;