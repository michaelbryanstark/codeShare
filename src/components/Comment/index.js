import React, { useState } from "react";
import "./styles.css";
import * as PostService from "../../api/PostService";
import { func, string } from "prop-types";

const Comment = ({ id, author, body, getCommentsAgain, commentId }) => {
    console.log(author, "IN COMMENTS");
    const [isEditing, setIsEditing] = useState(false);
    const [editedAuthor, setAuthor] = useState(author);
    const [editedBody, setBody] = useState(body);

    const handleEdit = async () => {
        console.log("handleedit");
        setIsEditing(!isEditing);
        //meaning submit is showing
        if (isEditing) {
            let editedPost = {
                author: editedAuthor,
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
                {!isEditing && <b>{author}</b>}
                {isEditing && (
                    <input
                        onChange={(e) => setAuthor(e.target.value)}
                        value={editedAuthor}
                        type="text"
                        name="author"
                        placeholder="AUTHOR"
                    />
                )}
                :{!isEditing && <span> {body}</span>}
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
    getPostsAgain: func,
};

export default Comment;