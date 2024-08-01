import React, { useEffect, useState } from 'react';
import { fetchPosts, deletePost } from '../services/api';
import Post from './Post';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetchPosts();
        setPosts(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deletePost(id);
      setPosts(posts.filter(post => post._id !== id));
    } catch (error) {
      setError(error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {posts.map(post => (
        <Post key={post._id} post={post} onDelete={() => handleDelete(post._id)} />
      ))}
    </div>
  );
};

export default PostList;
