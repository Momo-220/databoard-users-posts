import { Injectable, NotFoundException } from '@nestjs/common';
import { Post } from './interfaces/post.interface';
import { CreatePostDto } from './dtos/create-post.dto';
import { UpdatePostDto } from './dtos/update-post.dto';

@Injectable()
export class PostsService {
  private posts: Post[] = [
    { id: 1, userId: 1, title: 'Intro to our app', body: 'Welcome to the sample app' },
    { id: 2, userId: 1, title: 'Second Post', body: 'Another post' },
    { id: 3, userId: 2, title: 'Ousmane\'s post', body: 'Hello from Ousmane' },
    { id: 4, userId: 3, title: 'Sara writes', body: 'Sara content' },
  ];

  private nextId = 5;

  findAll(userId?: number): Post[] {
    if (userId) {
      return this.posts.filter(post => post.userId === userId);
    }
    return this.posts;
  }

  findOne(id: number): Post {
    const post = this.posts.find(post => post.id === id);
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return post;
  }

  create(createPostDto: CreatePostDto): Post {
    const newPost: Post = {
      id: this.nextId++,
      ...createPostDto,
    };
    this.posts.push(newPost);
    return newPost;
  }

  update(id: number, updatePostDto: UpdatePostDto): Post {
    const postIndex = this.posts.findIndex(post => post.id === id);
    if (postIndex === -1) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }

    this.posts[postIndex] = { ...this.posts[postIndex], ...updatePostDto };
    return this.posts[postIndex];
  }

  remove(id: number): void {
    const postIndex = this.posts.findIndex(post => post.id === id);
    if (postIndex === -1) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    this.posts.splice(postIndex, 1);
  }

  findByUserId(userId: number): Post[] {
    return this.posts.filter(post => post.userId === userId);
  }
}
