import axios, { AxiosInstance } from "axios";

export const createApiInstance = (baseURL: string): AxiosInstance => {
    return axios.create({
        baseURL,
        headers: {
            "Content-Type": "application/json",
        },
    });
};

