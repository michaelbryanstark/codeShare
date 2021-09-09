import React from "react";
import Likes from "../Likes";
import "./styles.css";

function Post() {
    return(
        <div className="post-body">
        <div className="likes"><Likes /></div>
        </div>
    )
}

export default Post;

