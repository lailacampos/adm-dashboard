const API_ENDPOINTS = {
    WEB_STORE: {
        PRODUCTS: {
            GET_ALL: "/products",
            GET_BY_ID: (id: number | string) => `/products/${id}`,
            CREATE: "/products",
            UPDATE: (id: number | string) => `/products/${id}`,
            DELETE: (id: number | string) => `/products/${id}`,
            FILTER: {
                BY_NAME: (name: string) => `/products?name=${encodeURIComponent(name)}`,
                BY_PRICE: (minPrice: number, maxPrice: number) => `/products?price_gte=${minPrice}&price_lte=${maxPrice}`,
                BY_CATEGORY: (category: string) => `/products?category=${encodeURIComponent(category)}`
            }
        },
        USERS: {
            GET_ALL: "/users",
            GET_BY_ID: (id: number | string) => `/users/${id}`,
            CREATE: "/users",
            UPDATE: (id: number | string) => `/users/${id}`,
            DELETE: (id: number | string) => `/users/${id}`
        },
        ORDERS: {
            GET_ALL: "/orders",
            GET_BY_ID: (id: number | string) => `/orders/${id}`,
            CREATE: "/orders",
            UPDATE: (id: number | string) => `/orders/${id}`,
            DELETE: (id: number | string) => `/orders/${id}`
        },
        SALES: {
            GET_ALL: "/sales",
            GET_BY_YEAR: (year: number) => `/sales?year=${year}`,
            GET_BY_MONTH: (year: number, month: number) => `/sales?year=${year}&month=${month}`
        },
        STATISTICS: {
            TOTAL_PRODUCTS: "/totalProducts",
            TOTAL_USERS: "/totalUsers",
            TOTAL_VISITS: "/totalVisits"
        }
    }
};

export default API_ENDPOINTS;
