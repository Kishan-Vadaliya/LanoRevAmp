import React from "react";
import { Transition } from "@headlessui/react";
import { SidebarProps } from "../../types/sidebar/NavItem/sidebar.types";

export const Sidebar: React.FC<SidebarProps> = ({
  isSideBarOpen,
  onClose,
  children,
}) => {
  return (
    <Transition
      show={isSideBarOpen}
      enter="transition-transform ease-out duration-300"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transition-transform ease-in duration-200"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      <div className="app-container  h-[calc(100vh-7rem)] sticky top-26 bottom-0 bg-opacity-30 z-40 lg:z-auto w-72 bg-white dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 shadow-lg">
        <button className="lg:hidden absolute top-4 right-4" onClick={onClose}>
          ✖
        </button>
        <div className="p-4">{children}</div>
      </div>
    </Transition>
  );
};
