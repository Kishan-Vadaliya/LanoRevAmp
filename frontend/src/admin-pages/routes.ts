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
        VENDOR_MAPPING: "/admin/stores/lano/vendor-mapping"
    },
    SETTINGS: {
        DASHBOARD: "/admin/settings/dashboard",
        PROFILE: "/admin/settings/profile",
        ROLES: "/admin/settings/roles",
        SYSTEM_LOG: "/admin/settings/system-log",
        ACCOUNT_ACTIVITY: "/admin/settings/account-activity",
        USERS: "/admin/settings/users"
    }
}