"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 bg-[#FFFFFF] border-b border-light-700 w-full shadow-md z-40">    
      <div className="px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Menu button - only show on mobile */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-800"
            onClick={onMenuClick}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              className="h-8 w-auto"
              src="https://redefinecommerce.blob.core.windows.net/lanomedia/1/themeconfiguration/0.8681965048068074/HeaderLogoUrl_2.png"
              alt="Company Logo"
            />
          </Link>
        </div>

        {/* Search Bar - hide on mobile */}
        <div className="hidden md:block flex-1 max-w-2xl mx-8">
          <div className="relative">
            {/* Add your search input here if needed */}
          </div>
        </div>

        {/* User Profile */}
        <div className="flex items-center">
          <div className="relative" ref={dropdownRef}>
            <button
              className="inline-flex items-center gap-2 p-2 rounded-md text-black-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="hidden md:block text-sm font-medium truncate max-w-[150px]">
              Kishan Patel
              </span>
              <div className="h-8 w-8 rounded-full overflow-hidden flex-shrink-0 bg-gray-700 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-[#FFFFFf] border border-light-300 rounded-md shadow-lg py-1">
                <div className="px-4 py-2 border-b border-light-300">
                  <p className="text-sm font-medium text-black-200">Kishan</p>
                  <p className="text-xs text-gray-400">Super Admin</p>
                </div>
                <nav className="py-1">
                  <Link
                    href="/admin/settings/profile"
                    className="block px-4 py-2 text-sm text-black-200 hover:bg-gray-800"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/admin/settings/users"
                    className="block px-4 py-2 text-sm text-black-200 hover:bg-gray-800"
                  >
                    Users
                  </Link>
                  <Link
                    href="/admin/settings/system-log"
                    className="block px-4 py-2 text-sm text-black-200 hover:bg-gray-800"
                  >
                    System Logs
                  </Link>
                  <button
                    onClick={() => alert("Signing out...")}
                    className="block w-full text-left px-4 py-2 text-sm text-black-200 hover:bg-gray-800 border-t border-light-300"
                  >
                    Sign Out
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
