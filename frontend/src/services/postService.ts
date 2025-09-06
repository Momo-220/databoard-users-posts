import api from './api';
import { Post, CreatePostData, UpdatePostData } from '../types';

export const postService = {
  // Get all posts
  async getAllPosts(userId?: number): Promise<Post[]> {
    const url = userId ? `/posts?userId=${userId}` : '/posts';
    const response = await api.get<Post[]>(url);
    return response.data;
  },

  // Get post by ID
  async getPostById(id: number): Promise<Post> {
    const response = await api.get<Post>(`/posts/${id}`);
    return response.data;
  },

  // Create new post
  async createPost(postData: CreatePostData): Promise<Post> {
    const response = await api.post<Post>('/posts', postData);
    return response.data;
  },

  // Update post
  async updatePost(id: number, postData: UpdatePostData): Promise<Post> {
    const response = await api.patch<Post>(`/posts/${id}`, postData);
    return response.data;
  },

  // Delete post
  async deletePost(id: number): Promise<void> {
    await api.delete(`/posts/${id}`);
  }
};
