import React, { useState } from "react";
import Likes from "../Likes";
import "./styles.css";
import { func, string, array } from "prop-types";
import * as PostService from "../../api/PostService";

function Post({ id, getPostsAgain, title, author, body, postComments, user }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setTitle] = useState(title);
    const [editedAuthor, setAuthor] = useState(author.lastName);
    const [editedBody, setBody] = useState(body);

    const handleEdit = async () => {
        console.log("handleedit");
        setIsEditing(!isEditing);
        //meaning submit is showing
        if (isEditing) {
            let editedPost = {
                title: editedTitle,
                author: editedAuthor,
                body: editedBody,
            };
            await PostService.update(id, editedPost);
            getPostsAgain();
        }
    };

    const handleDelete = async () => {
        await PostService.remove(id);
        getPostsAgain();
    };

    return (
        <div className="flex-post">
            <div className="top-row">
                {!isEditing && <h1>{title}</h1>}
                {isEditing && (
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={editedTitle}
                        type="text"
                        name="title"
                        placeholder="TITLE"
                    />
                )}
                <div>
                    <button onClick={handleEdit}>
                        {isEditing ? "SUBMIT" : "EDIT"}
                    </button>
                    <button onClick={handleDelete}>DELETE</button>
                </div>
            </div>
            <p>by {author.lastName}</p>
            <div>
                {!isEditing && <p className="post-body">{body}</p>}
                {isEditing && (
                    <input
                        onChange={(e) => setBody(e.target.value)}
                        value={editedBody}
                        type="text"
                        name="body"
                        placeholder="BODY GOES HERE"
                    />
                )}
            </div>
            <div className="likes">
                <Likes />
            </div>
            
            
        </div>
    );
}

Post.propTypes = {
    id: string.isRequired,
    title: string.isRequired,
    author: string.isRequired,
    body: string.isRequired,
    postComments: array,
    getPostsAgain: func,
};

Post.defaultProps = {
    author: "Dwayne Johnson",
};

export default Post;

