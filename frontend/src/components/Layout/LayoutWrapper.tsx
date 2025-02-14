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
    <div className="flex h-screen overflow-hidden">
      <Header onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />
      <div className="app-sidebar mr-1 min-w-[300px] fixed !-left-96  lg:static bg-slate-100 border-r border-neutral-200 z-60 left-0 h-full lg:left-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200">
      <Sidebar isSideBarOpen={isSidebarOpen} setSideBarOpen={setSidebarOpen}>
        <MainSidebar />
      </Sidebar>
      </div>
      <div className="relative w-full max-h-[calc(100%-4rem)] flex flex-col flex-1 overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-300 top-16">
        <main>{children}</main>
      </div>
    </div>
  );
}
