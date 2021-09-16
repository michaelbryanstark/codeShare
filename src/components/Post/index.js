import React, { useState, useEffect } from "react";
import Likes from "../Likes";
import Comment from "../Comment";
import "./styles.css";
import { func, string, array } from "prop-types";
import * as PostService from "../../api/PostService";
import CommentForm from "../CommentForm";

function Post({ id, getPostsAgain, title, author, body, user, post }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setTitle] = useState(title);
    const [Author] = useState(author);
    const [editedBody, setBody] = useState(body);
    const [comments, setComments] = useState([]);

    const handleEdit = async () => {
        setIsEditing(!isEditing);
        if (isEditing)  {
            let editedPost = {
                title: editedTitle,
                author: Author,
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

    async function fetchComments(id) {
        let res = await PostService.getAllComments(id);
        if (res.status === 200) {
            setComments(res.data.data);
        }
    }

    useEffect(() => {
        fetchComments(id);
    }, []);
    
    return (
        <div className="flex-post">
            <div className="top-row">
                {!isEditing && <h1>{title}</h1>}
                {isEditing && (post.author === user._id)(
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
            <p>by {author.firstName}</p>
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
            <div>
                <h3>Comments</h3>
                {comments.map((comment) => {
                    return (
                        <Comment
                            author={comment.author}
                            body={comment.body}
                            key={comment._id}
                            commentId={comment._id}
                            id={id}
                            getCommentsAgain={(id) => fetchComments(id)}
                        />
                    );
                })}
            </div>
            <CommentForm
                id={id}
                user={user}
                getPostsAgain={() => getPostsAgain()}
                getCommentsAgain={(id) => fetchComments(id)}
            />
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
    getCommentsAgain: func,
};

Post.defaultProps = {
    author: "Dwayne Johnson",
};

export default Post;
