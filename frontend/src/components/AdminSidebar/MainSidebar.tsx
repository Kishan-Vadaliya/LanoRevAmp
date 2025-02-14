"use client";

import { useState, useCallback } from "react";
import { Sidebar } from "../Sidebar/sidebar";
import { NavSideItems } from "./NavSideItems";
import { MenuList } from "../Sidebar/MenuListRoutes";

const MainSidebar = () => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [isSideBarOpen, setSideBarOpen] = useState<boolean>(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleToggleExpand = useCallback((itemId: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      next.has(itemId) ? next.delete(itemId) : next.add(itemId);
      return next;
    });
  }, []);

  // const memoizedMenuList = useMemo(() => MenuList, []);

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-50"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
       <NavSideItems
          menuItems={MenuList}
          expandedItems={expandedItems}
          selectedItem={selectedItem}
          onItemSelect={setSelectedItem}
          onToggleExpand={handleToggleExpand}
        />
      <Sidebar
        isSideBarOpen={isSideBarOpen || isMobileMenuOpen}
        setSideBarOpen={setSideBarOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      >
       
      </Sidebar>
    </>
  );
};

export default MainSidebar;
