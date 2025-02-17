"use client";
import { useEffect, useRef, useState } from "react";
interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
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
    <header className="fixed top-0 left-0 right-0 shadow-lg bg-white border-b border-neutral-200 h-16 z-50">
      <div className="flex items-center justify-between h-full px-4">
        {/* Left section with logo and menu button */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 text-gray-500 hover:text-gray-600 rounded-md"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="inline-block min-w-[100px] ml-2">
            <img
              className="max-h-[48px]"
              src="https://redefinecommerce.blob.core.windows.net/lanomedia/1/themeconfiguration/0.8681965048068074/HeaderLogoUrl_2.png"
              alt="Company Logo"
            />
          </div>
        </div>

        {/* Right section with user profile */}
       
          <div className="flex items-center space-x-3">
          <hr className="w-px h-6 bg-slate-200" />
          <div className="relative inline-flex" x-data="{ open: false }">
            <div className="relative inline-flex userProfileContainer">
              <button
                className="inline-flex justify-center items-center group"
                aria-haspopup="true"
                aria-expanded="true"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="h-10 w-10 flex items-center justify-center overflow-hidden rounded-full">
                  <img
                    src="https://lanoadmin.redefineapp.io/static/media/userAvatar.8b4ffbe6909512c99e68.jpg"
                    alt="user avatar"
                    
                  />
                </div>
                <div className="flex items-center truncate">
                  <span className="truncate ml-2 text-sm font-medium group-hover:text-gray-800">
                    Dhrumisha&nbsp;Rakholiya
                  </span>
                  <svg
                    className={`w-3 h-3 flex-shrink-0 ml-1 fill-current text-gray-400 ${isOpen ? 'rotate-180' : ''}`}
                    viewBox="0 0 12 12"
                  >
                    <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"></path>
                  </svg>
                </div>
              </button>
              {isOpen && (
              <div
                className="z-50 absolute top-8 right-0 min-w-44 bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 enter-done"
                style={{}}
              >
                <div>
                  <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-neutral-200">
                    <div className="font-medium text-gray-800">
                      Dhrumisha
                    </div>
                    <div className="text-xs text-gray-500 italic">
                      Super Admin
                    </div>
                  </div>
                  <ul>
                    <li>
                      <a
                        className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                        href="/admin/settings/profile/"
                      >
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                        href="/admin/settings/user"
                      >
                        User
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                        href="/admin/settings/system/log"
                      >
                        System Logs
                      </a>
                    </li>
                    <li className="mt-1 pt-1 border-t border-neutral-200">
                      <span className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3 cursor-pointer">
                        Sign Out
                      </span>
                    </li>
                  </ul>
                </div>
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
