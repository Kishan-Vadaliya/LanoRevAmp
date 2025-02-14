import {
  faGauge,
  faBox,
  faStore,
  faFileLines,
  faShoppingCart,
  faUsers,
  faTag,
  faCog,
  faWrench,
  faChartBar
} from "@fortawesome/free-solid-svg-icons";
import { MenuItem } from "@/types/sidebar/NavItem/sidebar.types";

export const MenuList: MenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/dashboard",
    icon: faGauge
  },
  {
    id: "master-product-feed",
    label: "Master Product Feed",
    icon: faBox,
    subItems: []
  },
  {
    id: "stores",
    label: "Stores",
    icon: faStore,
    subItems: []
  },
  {
    id: "content-management",
    label: "Content Management",
    icon: faFileLines,
    subItems: []
  },
  {
    id: "orders",
    label: "Orders",
    icon: faShoppingCart,
    subItems: []
  },
  {
    id: "customer",
    label: "Customer",
    icon: faUsers,
    subItems: []
  },
  {
    id: "promotions",
    label: "Promotions",
    icon: faTag,
    subItems: []
  },
  {
    id: "settings",
    label: "Settings",
    icon: faCog,
    subItems: [
      {
        id: "settings-dashboard",
        label: "Dashboard",
        href: "/settings/dashboard"
      },
      {
        id: "settings-profile",
        label: "Profile",
        href: "/settings/profile"
      },
      {
        id: "settings-roles",
        label: "Roles",
        href: "/settings/roles"
      },
      {
        id: "settings-users",
        label: "Users",
        href: "/settings/users"
      },
      {
        id: "settings-system-log",
        label: "System Log",
        href: "/settings/system-log"
      },
      {
        id: "settings-account-activity",
        label: "Account Activity",
        href: "/settings/account-activity"
      }
    ]
  },
  {
    id: "configurator",
    label: "Configurator",
    icon: faWrench,
    subItems: []
  },
  {
    id: "reports",
    label: "Reports",
    icon: faChartBar,
    href: "/reports"
  }
]; 