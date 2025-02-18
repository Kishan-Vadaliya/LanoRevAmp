"use client";

import React, { useState, useEffect } from "react";
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
      if (window.innerWidth < 1024) {
        // lg breakpoint
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    // Set initial state
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      <Header onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />

      <div className="flex pt-16">
        {" "}
        {/* Add padding-top to account for header height */}
        {/* Sidebar */}
        <div
          className={`
          fixed left-0 h-[calc(100vh-4rem)] 
          transition-all duration-300 ease-in-out
          lg:static lg:h-[calc(100vh-4rem)]
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          z-30
        `}
        >
          <div className="app-sidebar mr-1 min-w-[250px]">
            <Sidebar />
          </div>
        </div>
        {/* Main Content */}
        <div
          className={`
          grow
          transition-all duration-300 ease-in-out
          ${isSidebarOpen ? "lg:ml-0" : "lg:ml-0"}
        `}
        >
          <main className="relative w-full max-h-[100vh] overflow-x-hidden overflow-y-hidden">
            {children}
          </main>
        </div>
        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default LayoutWrapper;
