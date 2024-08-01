import React, { useState } from 'react';
import { createPost } from '../services/api';

const CreatePost = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, body };
    const response = await createPost(newPost);
    onPostCreated(response.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
