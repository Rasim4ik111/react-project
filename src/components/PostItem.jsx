import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = ({post}) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{post.id}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__brns">
                <MyButton>Delete</MyButton>
            </div>
        </div>
    );
};

export default PostItem;