import React from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navigation from './Navigation';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Toaster position="bottom-right" />
    </div>
  );
}