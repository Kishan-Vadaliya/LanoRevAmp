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
        const isSelected = selectedItem === (item.href || "");
        
        return (
          <li key={item.id}>
            <Link
              href={item.href || "#"}
              onClick={(e) => {
                if (item.subItems) {
                  e.preventDefault();
                  onToggleExpand(item.id);
                }
                onItemSelect(item.id);
              }}
              className={`
                flex items-center justify-between px-3 py-2 text-sm rounded-md
                transition-colors duration-150 ease-in-out
                ${isSelected 
                  ? "text-light-400" 
                  : "text-black-300"}
                ${level > 0 ? "pl-10" : ""}
              `}
            >
              <span className="flex items-center gap-3">
                {item.icon && (
                  <FontAwesomeIcon
                    icon={item.icon as IconProp}
                    className={isSelected ? "text-blue-400" : "text-black-300"}
                    size="sm"
                  />
                )}
                {item.label}
              </span>

              {item.subItems && (
                <FontAwesomeIcon
                  icon={isExpanded ? faAngleUp : faAngleDown}
                  size="sm"
                  className="text-gray-400"
                />
              )}
            </Link>

            {item.subItems && isExpanded && (
              <div className="mt-1">
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
