import React from 'react';

const Post = ({ post, onDelete, viewPost }) => (
  <div className="post">
    <h2>{post.title}</h2>
    <p>{post.body.substring(0, 100)}...</p>
    <button onClick={onDelete}>Delete</button>
    <p></p>
    <button onClick={viewPost}>ViewPost</button>
  </div>
);

export default Post;
