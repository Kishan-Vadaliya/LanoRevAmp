"use client";

import React, { useState, useEffect } from 'react';
import Sidebar from "@/components/Sidebar/sidebar";
import Header from "@/components/Header/header";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  // Handle initial screen size and resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) { // lg breakpoint
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    // Set initial state
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <Header onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />
      <div className={`
        fixed top-16 left-0 h-[calc(100vh-4rem)] 
        transition-all duration-300 ease-in-out
        lg:static lg:h-full
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:-translate-x-0'}
        z-30
      `}>
        <div className="w-[300px] h-full">
          <Sidebar />
        </div>
      </div>
      <div className={`
        relative flex-1 overflow-x-hidden overflow-y-auto
        transition-all duration-300 ease-in-out
        pt-16
        ${isSidebarOpen ? 'lg:ml-[300px]' : 'lg:ml-0'}
      `}>
        <main className="min-h-screen">
          {children}
        </main>
      </div>
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default LayoutWrapper;
