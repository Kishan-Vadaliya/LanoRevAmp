import { PageRoutes } from "../../admin-pages/routes";
import { MenuItem } from "../../types/sidebar/NavItem/sidebar.types";
import {
  faHouse,
  faLayerGroup,
  faStore,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

export const MenuList: MenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: faHouse, // 🏠 Home icon
    href: PageRoutes.DASHBOARD,
  },
  {
    id: "master-product-feed",
    label: "Master Product Feed",
    icon: faLayerGroup, // 🗂️ Layers icon
    subItems: [
      {
        id: "dashboard",
        label: "Dashboard",
        href: PageRoutes.MASTER_PRODUCT_FEED.DASHBOARD,
      },
      {
        id: "core-product-feed",
        label: "Core Product Feed",
        href: PageRoutes.MASTER_PRODUCT_FEED.CORE_PRODUCT_FEED,
      },
      {
        id: "product-database",
        label: "Product Database",
        href: PageRoutes.MASTER_PRODUCT_FEED.PRODUCT_INVENTORY,
      },
      {
        id: "configurator",
        label: "Configurator",
      },
      {
        id: "setting",
        label: "Setting",
        subItems: [
          {
            id: "clear-cache",
            label: "Clear Cache",
            href: PageRoutes.MASTER_SETTINGS.CLEAR_CACHE,
          },
        ],
      },
    ],
  },
  {
    id: "stores",
    label: "Stores",
    icon: faStore, // 🏪 Store icon
    subItems: [
      {
        id: "lano",
        label: "Lano",
        subItems: [
          {
            id: "dashboard",
            label: "Dashboard",
            href: PageRoutes.STORES_LANO.DASHBOARD,
          },
          {
            id: "product",
            label: "Product",
            href: PageRoutes.STORES_LANO.PRODUCT,
          },
          {
            id: "category-master",
            label: "Category Master",
            href: PageRoutes.STORES_LANO.CATEGORY_MASTER,
          },
          {
            id: "category-order",
            label: "Category Order",
            href: PageRoutes.STORES_LANO.CATEGORY_ORDER,
          },
          {
            id: "product-order",
            label: "Product Order",
            href: PageRoutes.STORES_LANO.PRODUCT_ORDER,
          },
          {
            id: "brand-master",
            label: "Brand Master",
            href: PageRoutes.STORES_LANO.BRAND_MASTER,
          },
          {
            id: "promotions",
            label: "Promotions",
            href: PageRoutes.STORES_LANO.PROMOTIONS,
          },
          {
            id: "career-page-forms",
            label: "Career Page Forms",
            href: PageRoutes.STORES_LANO.CAREER_PAGE_FORMS,
          },
          {
            id: "vendor-mapping",
            label: "Vendor Mapping",
            href: PageRoutes.STORES_LANO.VENDOR_MAPPING,
          },
        ],
      },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    icon: faGear, // ⚙️ Gear icon
    subItems: [
      {
        id: "dashboard",
        label: "Dashboard",
        href: PageRoutes.SETTINGS.DASHBOARD,
      },
      {
        id: "profile",
        label: "Profile",
        href: PageRoutes.SETTINGS.PROFILE,
      },
      {
        id: "roles",
        label: "Roles",
        href: PageRoutes.SETTINGS.ROLES,
      },
      {
        id: "account-activity",
        label: "Account Activity",
        href: PageRoutes.SETTINGS.ACCOUNT_ACTIVITY,
      },
      {
        id: "system-log",
        label: "System Log",
        href: PageRoutes.SETTINGS.SYSTEM_LOG,
      },
      {
        id: "users",
        label: "Users",
        href: PageRoutes.SETTINGS.USERS,
      },
    ],
  },
];
