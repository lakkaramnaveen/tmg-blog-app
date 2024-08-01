import React, { useState } from 'react';
import Header from './components/Header';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';

const App = () => {
  const [posts, setPosts] = useState([]);

  const handlePostCreated = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div>
      <Header />
      <CreatePost onPostCreated={handlePostCreated} />
      <PostList posts={posts} />
    </div>
  );
};

export default App;
