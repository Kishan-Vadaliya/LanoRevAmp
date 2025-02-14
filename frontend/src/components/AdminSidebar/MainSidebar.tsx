"use client";

import { useState, useCallback } from "react";
// import { Sidebar } from "../Sidebar/sidebar";
import { NavSideItems } from "./NavSideItems";
import { MenuList } from "../Sidebar/MenuListRoutes";
import { usePathname } from "next/navigation";

const MainSidebar = () => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const pathname = usePathname();
  // const [isSideBarOpen, setSideBarOpen] = useState<boolean>(true);
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleToggleExpand = useCallback((itemId: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      next.has(itemId) ? next.delete(itemId) : next.add(itemId);
      return next;
    });
  }, []);

  // const memoizedMenuList = useMemo(() => MenuList, []);

  return (
    <nav className="space-y-4">
      <NavSideItems
        menuItems={MenuList}
        expandedItems={expandedItems}
        selectedItem={pathname}
        onItemSelect={() => {}}
        onToggleExpand={handleToggleExpand}
      />
      {/* <Sidebar
        isSideBarOpen={isSideBarOpen || isMobileMenuOpen}
        setSideBarOpen={setSideBarOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      >
       
      </Sidebar> */}
    </nav>
  );
};

export default MainSidebar;
