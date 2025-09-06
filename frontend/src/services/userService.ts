import api from './api';
import { User, CreateUserData, UpdateUserData } from '../types';

export const userService = {
  // Get all users
  async getAllUsers(): Promise<User[]> {
    const response = await api.get<User[]>('/users');
    return response.data;
  },

  // Get user by ID
  async getUserById(id: number): Promise<User> {
    const response = await api.get<User>(`/users/${id}`);
    return response.data;
  },

  // Create new user
  async createUser(userData: CreateUserData): Promise<User> {
    const response = await api.post<User>('/users', userData);
    return response.data;
  },

  // Update user
  async updateUser(id: number, userData: UpdateUserData): Promise<User> {
    const response = await api.patch<User>(`/users/${id}`, userData);
    return response.data;
  },

  // Delete user
  async deleteUser(id: number): Promise<void> {
    await api.delete(`/users/${id}`);
  },

  // Get user's posts
  async getUserPosts(userId: number) {
    const response = await api.get(`/users/${userId}/posts`);
    return response.data;
  },

  // Create post for user
  async createUserPost(userId: number, postData: { title: string; body?: string }) {
    const response = await api.post(`/users/${userId}/posts`, postData);
    return response.data;
  }
};
