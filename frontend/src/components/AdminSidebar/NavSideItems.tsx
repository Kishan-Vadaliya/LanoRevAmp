import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons"; // Import necessary icons

import Link from "next/link";
import { MenuItem } from "../../types/sidebar/NavItem/sidebar.types";

interface NavSideItemsProps {
  menuItems: MenuItem[];
  expandedItems: Set<string>;
  selectedItem: string;
  onItemSelect: (id: string) => void;
  onToggleExpand: (id: string) => void;
  level?: number;
}

export const NavSideItems: React.FC<NavSideItemsProps> = ({
  menuItems,
  expandedItems,
  selectedItem,
  onItemSelect,
  onToggleExpand,
  level = 0,
}) => {
  return (
    <ul className="space-y-1">
      {menuItems.map((item) => {
        const isExpanded = expandedItems.has(item.id);
        const isSelected = selectedItem === item.id;
        return (
          <li key={item.id}>
            {/* Menu Item */}
            <Link
              href={item.href || "#"}
              onClick={(e) => {
                if (item.subItems) {
                  e.preventDefault();
                  onToggleExpand(item.id);
                }
                onItemSelect(item.id);
              }}
              className={`flex items-center justify-between px-2 py-2 text-sm rounded-md cursor-pointer
                ${
                  isSelected
                    ? "bg-gray-200 dark:bg-gray-800"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
            >
              <span className="flex items-center gap-3">
                {/* Render Icon */}
                {item.icon && (
                  <FontAwesomeIcon
                    icon={item.icon as IconProp} // ✅ Properly cast to IconProp
                    className="text-gray-400"
                  />
                )}
                {item.label}
              </span>

              {/* Dropdown Arrow Icon */}
              {item.subItems && (
                <FontAwesomeIcon
                  icon={isExpanded ? faAngleUp : faAngleDown}
                  size="sm"
                  className="text-gray-500"
                />
              )}
            </Link>

            {/* Nested Submenu */}
            {item.subItems && isExpanded && (
              <div className="pl-7">
                <NavSideItems
                  menuItems={item.subItems}
                  expandedItems={expandedItems}
                  selectedItem={selectedItem}
                  onItemSelect={onItemSelect}
                  onToggleExpand={onToggleExpand}
                  level={level + 1}
                />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};
