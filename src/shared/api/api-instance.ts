import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { z } from "zod";

export const apiInstance = axios.create({
    baseURL: import.meta.env.VITE_TMDB_API_URL,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN}`,
    },
});

export const createInstance = async <T>(
    config: AxiosRequestConfig,
    schema: z.ZodSchema<T>,
    options?: AxiosRequestConfig,
): Promise<T> => {
    try {
        const response: AxiosResponse = await apiInstance({
            ...config,
            ...options,
        });

        const parsedData = schema.parse(response.data);
        return parsedData;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new AxiosError(
                "Request failed",
                error.response?.status.toString(),
                error.config,
                error.request,
                error.response,
            );
        }
        throw error;
    }
};

export type BodyType<Data> = Data;

export type ErrorType<Error> = AxiosError<Error>;
