import { createApiInstance } from "./api";

const webStoreApi = createApiInstance(import.meta.env.VITE_WEB_STORE_API_URL as string || "http://localhost:5000");

export default webStoreApi;