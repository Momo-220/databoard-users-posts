import { useState, useEffect } from 'react';
import { Post, CreatePostData, UpdatePostData, User } from '../types';
import { PostList } from '../components/PostList';
import { PostForm } from '../components/PostForm';
import { postService } from '../services/postService';
import { userService } from '../services/userService';
import { Plus, FileText, Search, AlertCircle, X, Filter } from 'lucide-react';

export function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUserId, setSelectedUserId] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const [postsData, usersData] = await Promise.all([
        postService.getAllPosts(),
        userService.getAllUsers()
      ]);
      setPosts(postsData);
      setUsers(usersData);
    } catch (err) {
      setError('Failed to load data. Please try again.');
      console.error('Error loading data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleCreatePost = async (postData: CreatePostData | UpdatePostData) => {
    try {
      setIsSubmitting(true);
      const newPost = await postService.createPost(postData as CreatePostData);
      setPosts(prev => [...prev, newPost]);
      setIsFormOpen(false);
    } catch (err) {
      setError('Failed to create post. Please try again.');
      console.error('Error creating post:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUpdatePost = async (postData: UpdatePostData) => {
    if (!editingPost) return;

    try {
      setIsSubmitting(true);
      const updatedPost = await postService.updatePost(editingPost.id, postData);
      setPosts(prev => prev.map(post => 
        post.id === editingPost.id ? updatedPost : post
      ));
      setEditingPost(null);
    } catch (err) {
      setError('Failed to update post. Please try again.');
      console.error('Error updating post:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeletePost = async (postId: number) => {
    if (!confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
      return;
    }

    try {
      await postService.deletePost(postId);
      setPosts(prev => prev.filter(post => post.id !== postId));
    } catch (err) {
      setError('Failed to delete post. Please try again.');
      console.error('Error deleting post:', err);
    }
  };

  const handleEditPost = (post: Post) => {
    setEditingPost(post);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingPost(null);
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (post.body && post.body.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesUser = !selectedUserId || post.userId.toString() === selectedUserId;
    return matchesSearch && matchesUser;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900">Posts</h1>
          <p className="text-secondary-600 mt-1">
            Manage posts and their content
          </p>
        </div>
        <button
          onClick={() => setIsFormOpen(true)}
          className="btn btn-primary btn-lg"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Post
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <p className="text-red-800">{error}</p>
          <button
            onClick={() => setError(null)}
            className="ml-auto text-red-600 hover:text-red-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input pl-10"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-4 h-4" />
            <select
              value={selectedUserId}
              onChange={(e) => setSelectedUserId(e.target.value)}
              className="input pl-10 pr-8 min-w-[200px]"
            >
              <option value="">All Users</option>
              {users.map((user) => (
                <option key={user.id} value={user.id.toString()}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm text-secondary-600">
          <FileText className="w-4 h-4" />
          <span>{filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''}</span>
        </div>
      </div>

      {/* Posts List */}
      <PostList
        posts={filteredPosts}
        onEdit={handleEditPost}
        onDelete={handleDeletePost}
        isLoading={isLoading}
        showUserInfo={true}
      />

      {/* Forms */}
      {isFormOpen && (
        <PostForm
          users={users}
          onSubmit={handleCreatePost}
          onCancel={handleCloseForm}
          isLoading={isSubmitting}
        />
      )}

      {editingPost && (
        <PostForm
          post={editingPost}
          users={users}
          onSubmit={handleUpdatePost}
          onCancel={handleCloseForm}
          isLoading={isSubmitting}
        />
      )}
    </div>
  );
}
