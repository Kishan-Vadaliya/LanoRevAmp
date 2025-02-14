import React from "react";

interface SidebarProps {
  children: React.ReactNode;
  isSideBarOpen: boolean;
  setSideBarOpen: (isOpen: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  children,
  isSideBarOpen,
  setSideBarOpen,
}) => {
  return (
    <>
      {/* Mobile overlay */}
      {isSideBarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSideBarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-30 w-64 transform 
          ${isSideBarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 transition-transform duration-200 ease-in-out
          bg-[#1a1c23] border-r border-gray-700
          overflow-y-auto`}
      >
        <div className="p-4 pt-20 lg:pt-4">
          {children}
        </div>
      </aside>
    </>
  );
};
