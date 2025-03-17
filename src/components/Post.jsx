import React from 'react';
import "../Post.css";

const Post = ({ image, title, content, author, date, time, hashtags }) => {
    return (
        <article className="post">
            {image && <img src={image} alt={title} className="post-image" />}
            <h2>{title}</h2>
            <div className="post-info">
                <span>{author}</span>
                <span>{date}</span>
                <span>{time}</span>
            </div>
            <p>{content}</p>
            {hashtags && <p className="hashtags">{hashtags}</p>}
        </article>
    );
};

export default Post;
