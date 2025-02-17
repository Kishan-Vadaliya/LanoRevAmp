"use client";

import { useState, useCallback } from "react";
import { NavSideItems } from "./NavSideItems";
import { MenuList } from "../Sidebar/MenuListRoutes";
import { usePathname } from "next/navigation";

const MainSidebar = () => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const pathname = usePathname();


  const handleToggleExpand = useCallback((itemId: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(itemId)) {
        next.delete(itemId);
      } else {
        next.add(itemId);
      }
      return next;
    });
  }, []);

  return (
    <nav className="space-y-4">
      <NavSideItems
        menuItems={MenuList}
        expandedItems={expandedItems}
        selectedItem={pathname}
        onItemSelect={() => {}}
        onToggleExpand={handleToggleExpand}
      />
    </nav>
  );
};

export default MainSidebar;
