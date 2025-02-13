"use client";
import SidebarDropdown from "../Dropdown/dropdown";
import React from "react";
import NavItem from "../Navbar/navbar";
import {
  LayoutDashboard,
  ShoppingCart,
  Folder,
  ClipboardList,
  Tag,
  FileText,
  Settings,
  Users,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 w-80 h-screen bg-gray-100 p-4 shadow-lg overflow-y-auto">
      <nav className="space-y-2">
        <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" />
        <NavItem
          icon={<ShoppingCart size={18} />}
          label="Master Product Feed"
        />
        <SidebarDropdown
          icon={<Folder size={18} />}
          label="Stores"
          items={["Store 1", "Store 2"]}
        />
        <SidebarDropdown
          icon={<ClipboardList size={18} />}
          label="Content Management"
          items={["Pages", "Media"]}
        />
        <NavItem icon={<Tag size={18} />} label="Orders" />
        <SidebarDropdown
          icon={<Users size={18} />}
          label="Customer"
          items={["Profiles", "Segments"]}
        />
        <NavItem icon={<Tag size={18} />} label="Promotions" />
        <SidebarDropdown
          icon={<Settings size={18} />}
          label="Settings"
          items={[
            "Dashboard",
            "Profile",
            "Roles",
            "Users",
            "System Log",
            "Account Activity",
          ]}
        />
        <NavItem icon={<FileText size={18} />} label="Reports" />
      </nav>
    </div>
  );
};

export default Sidebar;
