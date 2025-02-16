import { PageRoutes } from "../../admin-pages/routes";
import { MenuItem } from "../../types/sidebar/NavItem/sidebar.types";
import {
  faHouse,
  faLayerGroup,
  faGear,
  faShoppingCart,
  faUsers,
  faPercent,
  faChartLine,
  faCog,
  faStore,
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
        id: "gift-card",
        label: "Gift Card",
        href: PageRoutes.MASTER_PRODUCT_FEED.GIFT_CARD,
      },
      {
        id: "product-inventory",
        label: "Product Inventory",
        href: PageRoutes.MASTER_PRODUCT_FEED.PRODUCT_INVENTORY,
      },
      {
        id: "settings",
        label: "Settings",
        subItems: [
          {
            id: "clear-cache",
            label: "Clear Cache",
            href: PageRoutes.MASTER_PRODUCT_FEED.SETTINGS.CLEAR_CACHE,
          },
        ],
      },

      {
        id: "configuration",
        label: "Configuration",
        subItems: [
          {
            id: "vendors",
            label: "Vendors",
            href: PageRoutes.MASTER_PRODUCT_FEED.CONFIGURATION.VENDORS,
          },
          {
            id: "brand-master",
            label: "Brand Master",
            href: PageRoutes.MASTER_PRODUCT_FEED.CONFIGURATION.BRAND_MASTER,
          },
          {
            id: "product-categories",
            label: "Product Categories",
            href: PageRoutes.MASTER_PRODUCT_FEED.CONFIGURATION
              .PRODUCT_CATEGORIES,
          },
          {
            id: "product-configurator",
            label: "Product Configurator",
            href: PageRoutes.MASTER_PRODUCT_FEED.CONFIGURATION
              .PRODUCT_CONFIGURATOR,
          },
          {
            id: "categories-configurator",
            label: "Categories Configurator",
            href: PageRoutes.MASTER_PRODUCT_FEED.CONFIGURATION
              .CATEGORIES_CONFIGURATOR,
          },
          {
            id: "product-custom",
            label: "Product Custom",
            href: PageRoutes.MASTER_PRODUCT_FEED.CONFIGURATION.PRODUCT_CUSTOM,
          },
          {
            id: "product-attributes",
            label: "Product Attributes",
            href: PageRoutes.MASTER_PRODUCT_FEED.CONFIGURATION
              .PRODUCT_ATTRIBUTES,
          },
          {
            id: "product-readiness",
            label: "Product Readiness",
            href: PageRoutes.MASTER_PRODUCT_FEED.CONFIGURATION
              .PRODUCT_READINESS,
          },
          {
            id: "seo-readiness",
            label: "SEO Readiness",
            href: PageRoutes.MASTER_PRODUCT_FEED.CONFIGURATION.SEO_READINESS,
          },
          {
            id: "quantity-discount",
            label: "Quantity Discount",
            href: PageRoutes.MASTER_PRODUCT_FEED.CONFIGURATION
              .QUANTITY_DISCOUNT,
          },
          {
            id: "product-tags",
            label: "Product Tags",
            href: PageRoutes.MASTER_PRODUCT_FEED.CONFIGURATION.PRODUCT_TAGS,
          },
          {
            id: "shipping-carriers",
            label: "Shipping Carriers",
            href: PageRoutes.MASTER_PRODUCT_FEED.CONFIGURATION
              .SHIPPING_CARRIERS,
          },
          {
            id: "shipping-methods",
            label: "Shipping Methods",
            href: PageRoutes.MASTER_PRODUCT_FEED.CONFIGURATION.SHIPPING_METHODS,
          },
          {
            id: "shipping-cost",
            label: "Shipping Cost",
            href: PageRoutes.MASTER_PRODUCT_FEED.CONFIGURATION.SHIPPING_COST,
          },
          {
            id: "payment-types",
            label: "Payment Types",
            href: PageRoutes.MASTER_PRODUCT_FEED.CONFIGURATION.PAYMENT_TYPES,
          },
          {
            id: "fix-charges",
            label: "Fix Charges",
            href: PageRoutes.MASTER_PRODUCT_FEED.CONFIGURATION.FIX_CHARGES,
          },
          {
            id: "product-dimension",
            label: "Product Dimension",
            href: PageRoutes.MASTER_PRODUCT_FEED.CONFIGURATION
              .PRODUCT_DIMENSION,
          },
          {
            id: "page-redirect",
            label: "Page Redirect",
            href: PageRoutes.MASTER_PRODUCT_FEED.CONFIGURATION.PAGE_REDIRECT,
          },
          {
            id: "product-tiers",
            label: "Product Tiers",
            href: PageRoutes.MASTER_PRODUCT_FEED.CONFIGURATION.PRODUCT_TIERS,
          },
          {
            id: "email-autoresponder",
            label: "Email AutoResponder",
            href: PageRoutes.MASTER_PRODUCT_FEED.CONFIGURATION
              .EMAIL_AUTORESPONDER,
          },
          {
            id: "warehouse",
            label: "Warehouse",
            href: PageRoutes.MASTER_PRODUCT_FEED.CONFIGURATION.WAREHOUSE,
          },
        ],
      },
    ],
  },
  {
    id: "stores",
    label: "Stores",
    icon: faStore,
    subItems: [
      {
        id: "lano",
        label: "Lano",
        href: PageRoutes.STORES.LANO.DASHBOARD,
        subItems: [
          {
            id: "dashboard",
            label: "Dashboard",
            href: PageRoutes.STORES.LANO.DASHBOARD,
          },
          {
            id: "product",
            label: "Product",
            href: PageRoutes.STORES.LANO.PRODUCT,
          },
          {
            id: "category-master",
            label: "Category Master",
            href: PageRoutes.STORES.LANO.CATEGORY_MASTER,
          },
          {
            id: "category-order",
            label: "Category Order",
            href: PageRoutes.STORES.LANO.CATEGORY_ORDER,
          },
          {
            id: "product-order",
            label: "Product Order",
            href: PageRoutes.STORES.LANO.PRODUCT_ORDER,
          },
          {
            id: "brand-master",
            label: "Brand Master",
            href: PageRoutes.STORES.LANO.BRAND_MASTER,
          },
          {
            id: "promotion",
            label: "Promotion",
            href: PageRoutes.STORES.LANO.PROMOTION,
          },
          {
            id: "career-page-forms",
            label: "Career Page Forms",
            href: PageRoutes.STORES.LANO.CAREER_PAGE_FORMS,
          },
          {
            id: "vendor-mapping",
            label: "Vendor Mapping",
            href: PageRoutes.STORES.LANO.VENDOR_MAPPING,
          },
        ],
      },
    ],
  },
  {
    id: "content-management",
    label: "Content Management",
    icon: faLayerGroup, // 🗂️ Layers icon
    subItems: [
      {
        id: "dashboard",
        label: "Dashboard",
        href: PageRoutes.CONTENT_MANAGEMENT.DASHBOARD,
      },
      {
        id: "content",
        label: "Content",
        href: PageRoutes.CONTENT_MANAGEMENT.CONTENT,
      },
      {
        id: "careers",
        label: "Careers",
        href: PageRoutes.CONTENT_MANAGEMENT.CAREERS,
      },
      {
        id: "story-category",
        label: "Story Category",
        href: PageRoutes.CONTENT_MANAGEMENT.STORY_CATEGORY,
      },
      {
        id: "asset-library",
        label: "Asset Library",
        href: PageRoutes.CONTENT_MANAGEMENT.ASSET_LIBRARY,
      },
      {
        id: "template",
        label: "Template",
        href: PageRoutes.CONTENT_MANAGEMENT.TEMPLATE,
      },
    ],
  },
  {
    id: "orders",
    label: "Orders",
    icon: faShoppingCart,
    subItems: [
      {
        id: "order-list",
        label: "Order List",
        href: PageRoutes.ORDERS.ORDER_LIST,
      },
      {
        id: "phone-order",
        label: "Phone Order",
        href: PageRoutes.ORDERS.PHONE_ORDER,
      },
    ],
  },
  {
    id: "customer",
    label: "Customer",
    icon: faUsers,
    subItems: [
      {
        id: "customers",
        label: "Customers",
        href: PageRoutes.CUSTOMER.CUSTOMERS,
      },
      {
        id: "customer-review",
        label: "Customer Review",
        href: PageRoutes.CUSTOMER.CUSTOMER_REVIEW,
      },
      {
        id: "customer-gift-card",
        label: "Customer Gift Card",
        href: PageRoutes.CUSTOMER.CUSTOMER_GIFT_CARD,
      },
      {
        id: "testimonial",
        label: "Testimonial",
        href: PageRoutes.CUSTOMER.TESTIMONIAL,
      },
      {
        id: "newsletter-archive",
        label: "Newsletter Archive",
        href: PageRoutes.CUSTOMER.NEWSLETTER_ARCHIVE,
      },
      {
        id: "abandoned-cart",
        label: "Abandoned Cart",
        href: PageRoutes.CUSTOMER.ABANDONED_CART,
      },
      {
        id: "request-quote",
        label: "Request Quote",
        href: PageRoutes.CUSTOMER.REQUEST_QUOTE,
      },
      {
        id: "deals-request-quote",
        label: "Deals Request Quote",
        href: PageRoutes.CUSTOMER.DEALS_REQUEST_QUOTE,
      },
    ],
  },
  {
    id: "promotions",
    label: "Promotions",
    icon: faPercent,
    subItems: [
      {
        id: "coupon-codes",
        label: "Coupon Codes",
        href: PageRoutes.PROMOTIONS.COUPON_CODES,
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
        id: "users",
        label: "Users",
        href: PageRoutes.SETTINGS.USERS,
      },
      {
        id: "system-log",
        label: "System Log",
        href: PageRoutes.SETTINGS.SYSTEM_LOG,
      },
      {
        id: "account-activity",
        label: "Account Activity",
        href: PageRoutes.SETTINGS.ACCOUNT_ACTIVITY,
      },
    ],
  },
  {
    id: "configurator",
    label: "Configurator",
    icon: faCog,
    subItems: [
      {
        id: "store-configuration",
        label: "Store Configuration",
        href: PageRoutes.CONFIGURATOR.STORE_CONFIGURATION,
      },
      {
        id: "theme-configuration",
        label: "Theme Configuration",
        href: PageRoutes.CONFIGURATOR.THEME_CONFIGURATION,
      },
      {
        id: "company-configuration",
        label: "Company Configuration",
        href: PageRoutes.CONFIGURATOR.COMPANY_CONFIGURATION,
      },
      {
        id: "seo-configuration",
        label: "SEO Configuration",
        href: PageRoutes.CONFIGURATOR.SEO_CONFIGURATION,
      },
      {
        id: "modules",
        label: "Modules",
        href: PageRoutes.CONFIGURATOR.MODULES,
      },
      {
        id: "third-party-services",
        label: "Third Party Services",
        href: PageRoutes.CONFIGURATOR.THIRD_PARTY_SERVICES,
      },
      {
        id: "widget-module-mapping",
        label: "Widget Module Mapping",
        href: PageRoutes.CONFIGURATOR.WIDGET_MODULE_MAPPING,
      },
    ],
  },
  {
    id: "reports",
    label: "Reports",
    icon: faChartLine,
    href: PageRoutes.REPORTS.DASHBOARD,
  },
];
