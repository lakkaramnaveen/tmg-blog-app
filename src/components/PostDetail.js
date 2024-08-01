import React from 'react';

const PostDetail = ({ post }) => (
  <div>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
  </div>
);

export default PostDetail;
