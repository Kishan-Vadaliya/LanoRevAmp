import React, { useState } from 'react';
import { MenuList } from './MenuListRoutes';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePathname } from 'next/navigation';
import { MenuItem } from '../../types/sidebar/NavItem/sidebar.types';

const Sidebar = () => {
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  const pathname = usePathname();

  const toggleMenu = (menuId: string) => {
    setExpandedMenus(prev => 
      prev.includes(menuId) 
        ? prev.filter(id => id !== menuId)
        : [...prev, menuId]
    );
  };

  const renderMenuItem = (item: MenuItem, depth = 0) => {
    const isExpanded = expandedMenus.includes(item.id);
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const paddingLeft = `${depth * 16 + 16}px`;

    if (item.href && !hasSubItems) {
      return (
        <Link
          href={item.href}
          className={`flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 ${
            pathname === item.href ? 'bg-gray-700' : ''
          }`}
          style={{ paddingLeft }}
        >
          {item.icon && depth === 0 && (
            <span className="w-5 h-5 mr-3">
              <FontAwesomeIcon icon={item.icon} />
            </span>
          )}
          <span>{item.label}</span>
        </Link>
      );
    }

    return (
      <div>
        <button
          onClick={() => toggleMenu(item.id)}
          className="flex items-center justify-between w-full px-4 py-2 text-gray-300 hover:bg-gray-700"
          style={{ paddingLeft }}
        >
          <div className="flex items-center">
            {item.icon && depth === 0 && (
              <span className="w-5 h-5 mr-3">
                <FontAwesomeIcon icon={item.icon} />
              </span>
            )}
            <span>{item.label}</span>
          </div>
          {hasSubItems && (
            <svg
              className={`w-4 h-4 transition-transform ${
                isExpanded ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </button>
        
        {isExpanded && hasSubItems && (
          <ul className="mt-1 space-y-1 bg-gray-800">
            {item.subItems.map((subItem) => (
              <li key={subItem.id}>
                {renderMenuItem(subItem, depth + 1)}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <aside className="h-full bg-[#1E1E1E] text-white w-full">
      <nav className="h-full py-4">
        <ul className="space-y-1">
          {MenuList.map((item) => (
            <li key={item.id}>
              {renderMenuItem(item)}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
