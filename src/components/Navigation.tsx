import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, PlusCircle, Settings } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BarChart3 className="h-6 w-6 text-indigo-600" />
            <span className="font-semibold text-xl">Portfolio Tracker</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/add"
              className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600"
            >
              <PlusCircle className="h-5 w-5" />
              <span>Add Stock</span>
            </Link>
            <Link
              to="/settings"
              className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}