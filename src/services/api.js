import axios from 'axios';

const API_URL = 'http://localhost:5001/api/posts';

export const fetchPosts = () => axios.get(API_URL);
export const createPost = (post) => axios.post(API_URL, post);
export const deletePost = (id) => axios.delete(`${API_URL}/${id}`);
export const fetchPostById = (id) => axios.get(`${API_URL}/${id}`);
