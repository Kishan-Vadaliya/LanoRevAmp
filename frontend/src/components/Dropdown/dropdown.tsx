"use client";
import { JSX, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import  Button  from "../Button/Button";

interface SidebarDropdownProps {
  label: string;
  icon: JSX.Element;
  items: string[];
}

const SidebarDropdown: React.FC<SidebarDropdownProps> = ({ label, icon, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-gray-700 font-semibold py-2 px-3 rounded-lg"
      >
        <span className="flex items-center gap-2">
          {icon}
          {label}
        </span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </Button>

      {isOpen && (
        <ul className="mt-1 space-y-1 pl-6 text-gray-600">
          {items.map((item) => (
            <li key={item} className="py-1 cursor-pointer hover:text-gray-900">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SidebarDropdown;
