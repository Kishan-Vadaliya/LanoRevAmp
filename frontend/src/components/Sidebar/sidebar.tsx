import React, { useState } from 'react';
import { MenuList } from './MenuListRoutes';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <aside className="h-full bg-[#1E1E1E] text-white w-full">
      <nav className="h-full py-4">
        <ul className="space-y-1">
          {MenuList.map((item) => (
            <li key={item.id}>
              {item.href ? (
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 ${
                    pathname === item.href ? 'bg-gray-700' : ''
                  }`}
                >
                  {item.icon && (
                    <span className="w-5 h-5 mr-3">
                      <FontAwesomeIcon icon={item.icon} />
                    </span>
                  )}
                  <span>{item.label}</span>
                </Link>
              ) : (
                <div>
                  <button
                    onClick={() => setActiveSubmenu(activeSubmenu === item.id ? null : item.id)}
                    className="flex items-center justify-between w-full px-4 py-2 text-gray-300 hover:bg-gray-700"
                  >
                    <div className="flex items-center">
                      {item.icon && (
                        <span className="w-5 h-5 mr-3">
                          <FontAwesomeIcon icon={item.icon} />
                        </span>
                      )}
                      <span>{item.label}</span>
                    </div>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        activeSubmenu === item.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {activeSubmenu === item.id && item.subItems && (
                    <ul className="mt-1 space-y-1 bg-gray-800">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.id}>
                          <Link
                            href={subItem.href || '#'}
                            className="flex items-center pl-12 pr-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
