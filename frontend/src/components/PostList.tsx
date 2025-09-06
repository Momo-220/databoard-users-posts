import { Post } from '../types';
import { Edit, Trash2, User, Calendar, FileText } from 'lucide-react';

interface PostListProps {
  posts: Post[];
  onEdit: (post: Post) => void;
  onDelete: (postId: number) => void;
  isLoading?: boolean;
  showUserInfo?: boolean;
}

export function PostList({ posts, onEdit, onDelete, isLoading, showUserInfo = true }: PostListProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="card p-6 animate-pulse">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="h-5 bg-secondary-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-secondary-200 rounded w-1/2"></div>
              </div>
              <div className="w-8 h-8 bg-secondary-200 rounded"></div>
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-secondary-200 rounded"></div>
              <div className="h-3 bg-secondary-200 rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <FileText className="w-16 h-16 text-secondary-300 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-secondary-900 mb-2">No posts found</h3>
        <p className="text-secondary-500">Get started by creating your first post.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="card p-6 hover:shadow-lg transition-all duration-300 group">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors mb-2">
                {post.title}
              </h3>
              {showUserInfo && (
                <div className="flex items-center space-x-2 text-sm text-secondary-500 mb-2">
                  <User className="w-4 h-4" />
                  <span>User ID: {post.userId}</span>
                </div>
              )}
            </div>
            <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => onEdit(post)}
                className="p-2 text-secondary-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                title="Edit post"
              >
                <Edit className="w-4 h-4" />
              </button>
              <button
                onClick={() => onDelete(post.id)}
                className="p-2 text-secondary-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Delete post"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {post.body && (
            <div className="mb-4">
              <p className="text-secondary-700 leading-relaxed">
                {post.body}
              </p>
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t border-secondary-100">
            <div className="flex items-center space-x-4 text-sm text-secondary-500">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Post #{post.id}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="badge badge-primary">Active</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
