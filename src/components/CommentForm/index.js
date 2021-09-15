import React, { useState } from "react";
import "./styles.css";
import * as PostService from "../../api/PostService";
import { func, string } from "prop-types";

const CommentForm = ({ id, getCommentsAgain, getPostsAgain, user }) => {
    const [body, setBody] = useState("");
    const handleSubmit = async () => {
        let newComment = { author: user._id, body, id };
        const res = await PostService.createComment(id, newComment);

        if (res.status === 201) {
            setBody("");
            getCommentsAgain(id);
            getPostsAgain();
        } else {
            alert("Server Error");
        }
    };

    return (
        <div className="CommentForm-inputs">
            <input
                onChange={(e) => setBody(e.target.value)}
                value={body}
                type="text"
                name="body"
                placeholder="BODY GOES HERE"
            />
            <button onClick={handleSubmit}>Add Comment +</button>
        </div>
    );
};

CommentForm.protoTypes = {
    id: string.isRequired,
    getCommentsAgain: func,
    getPostsAgain: func,
};

export default CommentForm;