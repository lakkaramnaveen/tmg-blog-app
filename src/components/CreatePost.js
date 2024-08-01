import React, { useState } from 'react';
import { createPost } from '../services/api';
import '../styles/CreatePost.css';

const CreatePost = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, body };
    try {
      await createPost(newPost);
      if (onPostCreated) onPostCreated();
      window.location.href = "http://localhost:3000/";
      setTitle('');
      setBody('');
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="create-post-container">
      <h2>Create a New Post</h2>
      <form className="create-post-form" onSubmit={handleSubmit}>
        <input
          className="create-post-input"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="create-post-textarea"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button className="create-post-button" type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
