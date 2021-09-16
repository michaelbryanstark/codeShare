import React, { useEffect, useState } from "react";
import Welcome from "../../components/Welcome"
import Post from "../../components/Post"
import PostForm from "../../components/PostForm";
import * as PostService from "../../api/PostService";
import { getUser } from "../../api/UserService";

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const [user] = useState(getUser);

    async function fetchPosts() {
        let res = await PostService.getAll();
        console.log("POST SERVICE RESPONSE: ", res.data);
        if (res.status === 200) {
            setPosts(res.data.data.reverse());
        }
    }

    useEffect(() => {
        console.log("USER: ", user);
        fetchPosts();
    }, []); //eslint-disable-line

    return (
        <div>
            <div>
                <Welcome />
                <PostForm user={user} getPostsAgain={() => fetchPosts()} />
                {posts.map((post) => {
                    
                    return (
                        <Post 
                            user={user}
                            author={post.author}
                            body={post.body}
                            title={post.title}
                            postComments={post.comments}
                            key={post._id}
                            id={post._id}
                            getPostsAgain={() => fetchPosts()}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default HomePage;