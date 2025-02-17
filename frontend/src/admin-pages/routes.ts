// All Static Routes are defined here.
export const PageRoutes = {
  DASHBOARD: "/admin/dashboard",
  MASTER_PRODUCT_FEED: {
    DASHBOARD: "/admin/master-product-feed/dashboard",
    CORE_PRODUCT_FEED: "/admin/master-product-feed/core-product-feed",
    GIFT_CARD: "/admin/master-product-feed/gift-card",
    PRODUCT_INVENTORY: "/admin/master-product-feed/product-inventory",
    SETTINGS: {
      CLEAR_CACHE: "/admin/master-product-feed/settings/clear-cache",
    },
    CONFIGURATION: {
      VENDORS: "/admin/master-product-feed/configuration/vendors",
      BRAND_MASTER: "/admin/master-product-feed/configuration/brand-master",
      PRODUCT_CATEGORIES:
        "/admin/master-product-feed/configuration/product-categories",
      PRODUCT_CONFIGURATOR:
        "/admin/master-product-feed/configuration/product-configurator",
      CATEGORIES_CONFIGURATOR:
        "/admin/master-product-feed/configuration/categories-configurator",
      PRODUCT_CUSTOM: "/admin/master-product-feed/configuration/product-custom",
      PRODUCT_ATTRIBUTES:
        "/admin/master-product-feed/configuration/product-attributes",
      PRODUCT_READINESS:
        "/admin/master-product-feed/configuration/product-readiness",
      SEO_READINESS: "/admin/master-product-feed/configuration/seo-readiness",
      QUANTITY_DISCOUNT:
        "/admin/master-product-feed/configuration/quantity-discount",
      PRODUCT_TAGS: "/admin/master-product-feed/configuration/product-tags",
      SHIPPING_CARRIERS:
        "/admin/master-product-feed/configuration/shipping-carriers",
      SHIPPING_METHODS:
        "/admin/master-product-feed/configuration/shipping-methods",
      SHIPPING_COST: "/admin/master-product-feed/configuration/shipping-cost",
      PAYMENT_TYPES: "/admin/master-product-feed/configuration/payment-types",
      FIX_CHARGES: "/admin/master-product-feed/configuration/fix-charges",
      PRODUCT_DIMENSION:
        "/admin/master-product-feed/configuration/product-dimension",
      PAGE_REDIRECT: "/admin/master-product-feed/configuration/page-redirect",
      PRODUCT_TIERS: "/admin/master-product-feed/configuration/product-tiers",
      EMAIL_AUTORESPONDER:
        "/admin/master-product-feed/configuration/email-autoresponder",
      WAREHOUSE: "/admin/master-product-feed/configuration/warehouse",
    },
  },
  STORES: {
    LANO: {
      DASHBOARD: "/admin/stores/lano/dashboard",
      PRODUCT: "/admin/stores/lano/product",
      CATEGORY_MASTER: "/admin/stores/lano/category-master",
      CATEGORY_ORDER: "/admin/stores/lano/category-order",
      PRODUCT_ORDER: "/admin/stores/lano/product-order",
      BRAND_MASTER: "/admin/stores/lano/brand-master",
      PROMOTION: "/admin/stores/lano/promotion",
      CAREER_PAGE_FORMS: "/admin/stores/lano/career-page-forms",
      VENDOR_MAPPING: "/admin/stores/lano/vendor-mapping",
    },
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
    CUSTOMERS: "/admin/customer/customers",
    CUSTOMER_REVIEW: "/admin/customer/customer-review",
    CUSTOMER_GIFT_CARD: "/admin/customer/customer-gift-card",
    TESTIMONIAL: "/admin/customer/testimonial",
    NEWSLETTER_ARCHIVE: "/admin/customer/newsletter-archive",
    ABANDONED_CART: "/admin/customer/abandoned-shopping-cart",
    REQUEST_QUOTE: "/admin/customer/request-a-quote",
    DEALS_REQUEST_QUOTE: "/admin/customer/deals-request-quote-section",
  },
  PROMOTIONS: {
    COUPON_CODES: "/admin/promotions/coupon-codes",
  },
  SETTINGS: {
    DASHBOARD: "/admin/settings/dashboard",
    PROFILE: "/admin/settings/profile",
    ROLES: "/admin/settings/roles",
    USERS: "/admin/settings/users",
    SYSTEM_LOG: "/admin/settings/system-log",
    ACCOUNT_ACTIVITY: "/admin/settings/account-activity",
  },
  CONFIGURATOR: {
    STORE_CONFIGURATION: "/admin/configurator/store-configuration",
    THEME_CONFIGURATION: "/admin/configurator/theme-configuration",
    COMPANY_CONFIGURATION: "/admin/configurator/company-configuration",
    SEO_CONFIGURATION: "/admin/configurator/seo-configuration",
    MODULES: "/admin/configurator/modules",
    THIRD_PARTY_SERVICES: "/admin/configurator/third-party-services",
    WIDGET_MODULE_MAPPING: "/admin/configurator/widget-module-mapping",
  },
  REPORTS: {
    DASHBOARD: "/admin/reports",
  },
};
