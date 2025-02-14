"use client";

import { useState } from "react";
import { Sidebar } from "@/components/Sidebar/sidebar";
import Header from "@/components/Header/header";
import MainSidebar from "@/components/AdminSidebar/MainSidebar";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen">
      <Header onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />
      <div className="flex flex-1 overflow-hidden pt-16">
        <Sidebar 
          isSideBarOpen={isSidebarOpen} 
          setSideBarOpen={setSidebarOpen}
        >
          <MainSidebar />
        </Sidebar>
        <main className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
} 