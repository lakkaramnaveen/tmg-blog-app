import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Updated import
import { fetchPostById } from '../services/api';
import '../styles/PostDetail.css';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Updated to useNavigate

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await fetchPostById(id);
        setPost(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getPost();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="post-detail-container">
      <div className="post-detail-box">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <button className="go-home-button" onClick={() => navigate('/')}>
          Go Home
        </button>
      </div>
    </div>
  );
};

export default PostDetail;
