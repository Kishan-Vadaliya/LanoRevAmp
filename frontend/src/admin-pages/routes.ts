// All Static Routes are defined here.
export const PageRoutes = {
  DASHBOARD: "admin/dashboard",
  MASTER_PRODUCT_FEED: {
    DASHBOARD: "/admin/master-product-feed/dashboard",
    CORE_PRODUCT_FEED: "/admin/master-product-feed/core-product-feed",
    GIFT_CARD: "/admin/master-product-feed/gift-card",
    PRODUCT_INVENTORY: "/admin/master-product-feed/product-inventory",
    SETTINGS: "/admin/master-product-feed/settings",
    CONFIGURATION: "/admin/master-product-feed/configuration",
  },
  MASTER_CONFIGURATOR: {
    VENDOR_CONFIGURATOR: "/admin/master-configurator/vendor-configurator",
    BRAND_MASTER_CONFIGURATOR:
      "/admin/master-configurator/brand-master-configurator",
    PRODUCT_CATEGORY_CONFIGURATOR:
      "/admin/master-configurator/product-category-configurator",
    CATEGORY_CONFIGURATOR: "/admin/master-configurator/category-configurator",
    PRODUCT_CUSTOM_CONFIGURATOR:
      "/admin/master-configurator/product-custom-configurator",
    PRODUCT_ATTRIBUTE_CONFIGURATOR:
      "/admin/master-configurator/product-attribute-configurator",
    PRODUCT_READINESS_CONFIGURATOR:
      "/admin/master-configurator/product-readiness-configurator",
    SEO_READINESS_CONFIGURATOR:
      "/admin/master-configurator/seo-readiness-configurator",
    QUALITY_DISCOUNT_CONFIGURATOR:
      "/admin/master-configurator/quality-discount-configurator",
  },
  MASTER_SETTINGS: {
    CLEAR_CACHE: "/admin/master-product-feed/settings/clear-cache",
  },
  STORES_LANO: {
    DASHBOARD: "/admin/stores/lano/dashboard",
    PRODUCT: "/admin/stores/lano/product",
    CATEGORY_MASTER: "/admin/stores/lano/category-master",
    CATEGORY_ORDER: "/admin/stores/lano/category-order",
    PRODUCT_ORDER: "/admin/stores/lano/product-order",
    BRAND_MASTER: "/admin/stores/lano/brand-master",
    PROMOTIONS: "/admin/stores/lano/promotions",
    CAREER_PAGE_FORMS: "/admin/stores/lano/career-page-forms",
    VENDOR_MAPPING: "/admin/stores/lano/vendor-mapping",
  },
  CONTENT_MANAGEMENT: {
    DASHBOARD: "/admin/content-management/dashboard",
    CONTENT: "/admin/content-management/content",
    CAREERS: "/admin/content-management/careers",
    STORY_CATEGORY: "/admin/content-management/story-category",
    ASSET_LIBRARY: "/admin/content-management/asset-library",
    TEMPLATE: "/admin/content-management/template",
  },
  ORDERS: {
    ORDER_LIST: "/admin/orders/order-list",
    PHONE_ORDER: "/admin/orders/phone-order",
  },
  CUSTOMER: {
    DASHBOARD: "/admin/customer/dashboard",
    CUSTOMER_REVIEW: "/admin/customer/customer-review",
    CUSTOMER_GIFT_CARD: "/admin/customer/customer-gift-card",
    CUSTOMER_REQUEST_QUOTE: "/admin/customer/customer-request-quote",
  },
  PROMOTIONS: {
    COUPON_CODE: "/admin/promotions/coupon-code",
  },
  SETTINGS: {
    DASHBOARD: "/admin/settings/dashboard",
    PROFILE: "/admin/settings/profile",
    ROLES: "/admin/settings/roles",
    SYSTEM_LOG: "/admin/settings/system-log",
    ACCOUNT_ACTIVITY: "/admin/settings/account-activity",
    USERS: "/admin/settings/users",
  },
  CONFIGURATOR: {
    STORE_CONFIGURATOR: "/admin/configurator/store-configurator",
    THEME_CONFIGURATOR: "/admin/configurator/theme-configurator",
    COMPANY_CONFIGURATOR: "/admin/configurator/company-configurator",
    SEO_CONFIGURATOR: "/admin/configurator/seo-configurator",
    MODULE_CONFIGURATOR: "/admin/configurator/module-configurator",
    THIRD_PARTY_CONFIGURATOR: "/admin/configurator/third-party-configurator",
    WIDGET_CONFIGURATOR: "/admin/configurator/widget-configurator",
  },
  REPORTS: {
    DASHBOARD: "/admin/reports/",
  },
};
