import { User } from '../types';
import { Edit, Trash2, Eye, Mail, User as UserIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface UserListProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (userId: number) => void;
  isLoading?: boolean;
}

export function UserList({ users, onEdit, onDelete, isLoading }: UserListProps) {
  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="card p-6 animate-pulse">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-secondary-200 rounded-full"></div>
              <div className="flex-1">
                <div className="h-4 bg-secondary-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-secondary-200 rounded w-1/2"></div>
              </div>
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

  if (users.length === 0) {
    return (
      <div className="text-center py-12">
        <UserIcon className="w-16 h-16 text-secondary-300 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-secondary-900 mb-2">No users found</h3>
        <p className="text-secondary-500">Get started by creating your first user.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => (
        <div key={user.id} className="card p-6 hover:shadow-lg transition-all duration-300 group">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h3 className="font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">
                  {user.name}
                </h3>
                <p className="text-sm text-secondary-500">@{user.username}</p>
              </div>
            </div>
            <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => onEdit(user)}
                className="p-2 text-secondary-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                title="Edit user"
              >
                <Edit className="w-4 h-4" />
              </button>
              <button
                onClick={() => onDelete(user.id)}
                className="p-2 text-secondary-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Delete user"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-sm text-secondary-600">
              <Mail className="w-4 h-4" />
              <span className="truncate">{user.email}</span>
            </div>
            
            <div className="flex items-center justify-between pt-3 border-t border-secondary-100">
              <Link
                to={`/users/${user.id}`}
                className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
              >
                <Eye className="w-4 h-4" />
                <span>View Details</span>
              </Link>
              <span className="text-xs text-secondary-400">ID: {user.id}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
