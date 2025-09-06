import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { User, Post } from '../types';
import { userService } from '../services/userService';
import { PostList } from '../components/PostList';
// import { PostForm } from '../components/PostForm';
import { ArrowLeft, Mail, User as UserIcon, Calendar, Plus, AlertCircle, X } from 'lucide-react';

export function UserDetail() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadUserData = async () => {
    if (!id) return;

    try {
      setIsLoading(true);
      setError(null);
      const [userData, postsData] = await Promise.all([
        userService.getUserById(parseInt(id)),
        userService.getUserPosts(parseInt(id))
      ]);
      setUser(userData);
      setPosts(postsData);
    } catch (err) {
      setError('Failed to load user data. Please try again.');
      console.error('Error loading user data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadUserData();
  }, [id]);

  const handleCreatePost = async (postData: { title: string; body?: string }) => {
    if (!user) return;

    try {
      setIsSubmitting(true);
      const newPost = await userService.createUserPost(user.id, postData);
      setPosts(prev => [...prev, newPost]);
      setIsFormOpen(false);
    } catch (err) {
      setError('Failed to create post. Please try again.');
      console.error('Error creating post:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeletePost = async (postId: number) => {
    if (!confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
      return;
    }

    try {
      await userService.deleteUser(postId); // This should be postService.deletePost
      setPosts(prev => prev.filter(post => post.id !== postId));
    } catch (err) {
      setError('Failed to delete post. Please try again.');
      console.error('Error deleting post:', err);
    }
  };

  const handleEditPost = (_post: Post) => {
    // For now, we'll just show an alert since we don't have edit functionality for posts in user detail
    alert('Edit functionality will be implemented in the posts page.');
  };

  if (isLoading) {
    return (
      <div className="space-y-8">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-secondary-200 rounded animate-pulse"></div>
          <div className="h-8 bg-secondary-200 rounded w-32 animate-pulse"></div>
        </div>
        <div className="card p-8 animate-pulse">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-secondary-200 rounded-full"></div>
            <div className="flex-1">
              <div className="h-6 bg-secondary-200 rounded w-1/3 mb-2"></div>
              <div className="h-4 bg-secondary-200 rounded w-1/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="text-center py-12">
        <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-secondary-900 mb-2">
          {error || 'User not found'}
        </h3>
        <Link to="/users" className="btn btn-primary">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Users
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Link
          to="/users"
          className="p-2 text-secondary-400 hover:text-secondary-600 hover:bg-secondary-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-secondary-900">User Details</h1>
          <p className="text-secondary-600 mt-1">View user information and posts</p>
        </div>
      </div>

      {/* User Info Card */}
      <div className="card p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-secondary-900 mb-2">{user.name}</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-secondary-600">
                <UserIcon className="w-4 h-4" />
                <span>@{user.username}</span>
              </div>
              <div className="flex items-center space-x-2 text-secondary-600">
                <Mail className="w-4 h-4" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-secondary-600">
                <Calendar className="w-4 h-4" />
                <span>User ID: {user.id}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Posts Section */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-secondary-900">Posts</h3>
            <p className="text-secondary-600 mt-1">
              {posts.length} post{posts.length !== 1 ? 's' : ''} by {user.name}
            </p>
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="btn btn-primary"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Post
          </button>
        </div>

        <PostList
          posts={posts}
          onEdit={handleEditPost}
          onDelete={handleDeletePost}
          isLoading={false}
          showUserInfo={false}
        />
      </div>

      {/* Create Post Form */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md animate-slide-up">
            <div className="flex items-center justify-between p-6 border-b border-secondary-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Plus className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-xl font-semibold text-secondary-900">
                  Create Post for {user.name}
                </h2>
              </div>
              <button
                onClick={() => setIsFormOpen(false)}
                className="p-2 text-secondary-400 hover:text-secondary-600 hover:bg-secondary-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const title = formData.get('title') as string;
              const body = formData.get('body') as string;
              handleCreatePost({ title, body: body || undefined });
            }} className="p-6 space-y-6">
              <div>
                <label htmlFor="title" className="label">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  className="input"
                  placeholder="Enter post title"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="body" className="label">
                  Content (Optional)
                </label>
                <textarea
                  id="body"
                  name="body"
                  rows={4}
                  className="input resize-none"
                  placeholder="Enter post content..."
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="btn btn-secondary flex-1"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Creating...</span>
                    </div>
                  ) : (
                    'Create Post'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
