import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface MenuItem {
    id: string;
    label: string;
    href?: string;
    icon?: IconDefinition;
    subItems?: MenuItem[];
  }

  export interface SidebarProps {
    isSideBarOpen: boolean;
    setSideBarOpen: (open: boolean) => void;
    onClose?: () => void;
    children?: React.ReactNode;
  }