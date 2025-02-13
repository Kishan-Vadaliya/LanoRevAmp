"use client";

import Button from "../Button/Button";
import { JSX } from "react";

interface NavItemProps {
  label: string;
  icon: JSX.Element;
}

const NavItem: React.FC<NavItemProps> = ({ label, icon }) => (
  <Button className="flex items-center gap-2 w-full py-2 px-3 text-gray-700 font-semibold hover:bg-gray-200 rounded-lg">
    {icon}
    {label}
  </Button>
);

export default NavItem;
