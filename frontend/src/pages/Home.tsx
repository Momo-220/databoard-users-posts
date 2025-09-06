import { Link } from 'react-router-dom';
import { Users, FileText, ArrowRight, Sparkles, Database, Globe, Code, Smartphone } from 'lucide-react';

export function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Full-Stack Application</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-secondary-900">
          Welcome to
          <span className="text-gradient block">DataBoard</span>
        </h1>
        
        <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
          A modern, responsive web application built with React, TypeScript, and NestJS. 
          Create, read, update, and delete users and their posts with an intuitive interface.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        <Link
          to="/users"
          className="group card p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors">
              <Users className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-900">User Management</h3>
          </div>
          <p className="text-secondary-600 mb-6">
            Create, edit, and manage user profiles with detailed information including name, username, and email.
          </p>
          <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
            <span>Explore Users</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        <Link
          to="/posts"
          className="group card p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-900">Post Management</h3>
          </div>
          <p className="text-secondary-600 mb-6">
            Create and manage posts, link them to users, and organize content with a clean, modern interface.
          </p>
          <div className="flex items-center text-green-600 font-medium group-hover:text-green-700">
            <span>Explore Posts</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </div>

      {/* Stats Section */}
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-secondary-200">
        <h2 className="text-xl font-bold text-secondary-900 text-center mb-6">
          Application Features
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 rounded-lg bg-primary-50 hover:bg-primary-100 transition-colors">
            <Database className="w-8 h-8 text-primary-600 mx-auto mb-2" />
            <div className="text-lg font-bold text-primary-600 mb-1">CRUD</div>
            <div className="text-xs text-secondary-600">Full Operations</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
            <Globe className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-lg font-bold text-green-600 mb-1">REST</div>
            <div className="text-xs text-secondary-600">API Design</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
            <Code className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-lg font-bold text-purple-600 mb-1">TypeScript</div>
            <div className="text-xs text-secondary-600">Type Safety</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors">
            <Smartphone className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <div className="text-lg font-bold text-orange-600 mb-1">Responsive</div>
            <div className="text-xs text-secondary-600">Mobile First</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-bold text-secondary-900">
          Get Started with DataBoard
        </h2>
        <p className="text-secondary-600 max-w-md mx-auto">
          Choose what you'd like to manage first. Both sections are fully functional with complete CRUD operations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <Link
            to="/users"
            className="btn btn-primary btn-lg w-full py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Users className="w-6 h-6 mr-3" />
            Manage Users
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          <Link
            to="/posts"
            className="btn btn-secondary btn-lg w-full py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FileText className="w-6 h-6 mr-3" />
            Manage Posts
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
