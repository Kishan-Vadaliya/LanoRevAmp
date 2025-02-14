"use client";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 bg-white border-b border-neutral-200 h-fit w-full shadow-md z-9999">
      <div className="px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Sidebar Toggle Button */}
          <div className="flex">
            <button
              className="mr-4 text-gray-500 hover:text-gray-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded="false"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2"></rect>
                <rect x="4" y="11" width="16" height="2"></rect>
                <rect x="4" y="17" width="16" height="2"></rect>
              </svg>
            </button>
          </div>

          {/* Logo */}
          <a className="inline-block min-w-[100px] ml-2" href="/">
            <img
              className="max-h-[48px]"
              src="https://redefinecommerce.blob.core.windows.net/lanomedia/1/themeconfiguration/0.8681965048068074/HeaderLogoUrl_2.png"
              alt="Company Logo"
            />
          </a>

          {/* Search Bar Placeholder */}
          <div className="relative w-full pr-6 lg:ml-12">
            <div className="absolute h-10 mt-0 left-0 top-0 flex items-center"></div>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <hr className="w-px h-6 bg-slate-200" />
            <div className="relative inline-flex" ref={dropdownRef}>
              <button
                className="inline-flex justify-center items-center group"
                aria-haspopup="true"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="h-10 w-10 flex items-center justify-center overflow-hidden rounded-full">
                  <img
                    src="/static/media/userAvatar.8b4ffbe6909512c99e68.jpg"
                    alt="User Avatar"
                  />
                </div>
                <div className="flex items-center truncate">
                  <span className="truncate ml-2 text-sm font-medium group-hover:text-gray-800">
                    Dhrumisha Rakholiya
                  </span>
                  <svg
                    className="w-3 h-3 flex-shrink-0 ml-1 fill-current text-gray-400"
                    viewBox="0 0 12 12"
                  >
                    <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"></path>
                  </svg>
                </div>
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div
                  className="z-50 absolute top-full right-0 min-w-44 bg-white border border-gray-200 py-1.5 rounded shadow-lg mt-1"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-neutral-200">
                    <div className="font-medium text-gray-800">
                      Dhrumisha Rakholiya
                    </div>
                    <div className="text-xs text-gray-500 italic">
                      Super Admin
                    </div>
                  </div>
                  <ul>
                    <li>
                      <a
                        className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-2 px-3"
                        href="/admin/Settings/profile/"
                      >
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-2 px-3"
                        href="/admin/Settings/user"
                      >
                        User
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-2 px-3"
                        href="/admin/Settings/system/log"
                      >
                        System Logs
                      </a>
                    </li>
                    <li className="border-t border-neutral-200 mt-1 pt-1">
                      <button
                        className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-2 px-3 w-full text-left"
                        onClick={() => alert("Signing out...")}
                      >
                        Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
