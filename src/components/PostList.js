import React, { useEffect, useState } from 'react';
import { fetchPosts, deletePost } from '../services/api';
import Post from './Post';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

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
  }, [page]);

  const handleDelete = async (id) => {
    try {
      await deletePost(id);
      setPosts(posts.filter(post => post._id !== id));
    } catch (error) {
      setError(error);
    }
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  const postsPerPage = 10;
  const displayedPosts = filteredPosts.slice((page - 1) * postsPerPage, page * postsPerPage);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {displayedPosts.map(post => (
        <Post key={post._id} post={post} onDelete={() => handleDelete(post._id)} />
      ))}
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)} disabled={displayedPosts.length < postsPerPage}>
        Next
      </button>
    </div>
  );
};

export default PostList;
