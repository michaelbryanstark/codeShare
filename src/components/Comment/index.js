import React, { useState } from "react";
import "./styles.css";
import * as PostService from "../../api/PostService";
import { func, string } from "prop-types";

function Comment({ id, getCommentsAgain, author, body, commentId, user }) {
    const [isEditing, setIsEditing] = useState(false);
    const [Author] = useState(author);
    const [editedBody, setBody] = useState(body);

    const handleEdit = async () => {
        setIsEditing(!isEditing);
        if (isEditing) {
            let editedPost = {
                author: Author,
                body: editedBody,
            };
            await PostService.updateComment(id, commentId, editedPost);
            getCommentsAgain(id);
        }
    };

    const handleDelete = async () => {
        await PostService.removeComment(id, commentId);
        getCommentsAgain(id);
    };

    return (
        <div className="comment">
            <span className="entry">
            <p>by {author.firstName}</p>
                {!isEditing && <span> {body}</span>}
                {isEditing && (
                    <input
                        onChange={(e) => setBody(e.target.value)}
                        value={editedBody}
                        type="text"
                        name="body"
                        placeholder="BODY GOES HERE"
                    />
                )}
            </span>
            <span className="comment-buttons">
                <button onClick={handleEdit}>
                    {isEditing ? "SUBMIT" : "EDIT"}
                </button>
                <button onClick={handleDelete}>DELETE</button>
            </span>
        </div>
    );
};

Comment.propTypes = {
    id: string.isRequired,
    author: string.isRequired,
    body: string.isRequired,
    commentId: string.isRequired,
    getCommentsAgain: func,
};

export default Comment;