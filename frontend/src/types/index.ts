export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body?: string;
}

export interface CreateUserData {
  name: string;
  username: string;
  email: string;
}

export interface UpdateUserData {
  name?: string;
  username?: string;
  email?: string;
}

export interface CreatePostData {
  userId: number;
  title: string;
  body?: string;
}

export interface UpdatePostData {
  title?: string;
  body?: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
}
