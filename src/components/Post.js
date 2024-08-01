import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Post.css';

const Post = ({ post, onDelete }) => {
  return (
    <div className="post">
      <h3>
        <Link to={`/posts/${post._id}`}>{post.title}</Link>
      </h3>
      <p>{post.body.substring(0, 100)}...</p>
      <button className="delete-button" onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Post;
