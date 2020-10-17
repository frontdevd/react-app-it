import React from "react";
import './MyPosts.module.css';
import Post from "../Post/Post";

const MyPosts = () => {
    return (
        <div>
            <h1>my posts</h1>
            <div>new posts </div>
            <div>
                <Post message="Hi this is first post"/>
                <Post message="Hi this is second post"/>
            </div>
        </div>
    )
};

export default MyPosts;
