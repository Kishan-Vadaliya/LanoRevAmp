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
        className={`app-container h-[calc(100vh-4rem)] sticky top-16 bottom-0 bg-opacity-30 z-40 lg:z-auto  ${isSideBarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 pt-20 lg:pt-4">
          {children}
        </div>
      </aside>
    </>
  );
};
