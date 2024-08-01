import React from 'react';

const Post = ({ post, onDelete }) => (
  <div className="post">
    <h2>{post.title}</h2>
    <p>{post.body.substring(0, 100)}...</p>
    <button onClick={onDelete}>Delete</button>
  </div>
);

export default Post;
