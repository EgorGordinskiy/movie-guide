import { useQuery } from "@tanstack/react-query";
import { createInstance, type BodyType } from "shared/api";
import { QUERY_KEYS } from "shared/lib";
import {
    FetchMoviePopularParamsSchema,
    FetchMoviePopularSchema,
} from "./contracts";
import { TFetchMoviePopular, TFetchMoviePopularParams } from "./types";

export const fetchMoviePopular = (
    signal: AbortSignal,
    params: BodyType<TFetchMoviePopularParams>,
): Promise<TFetchMoviePopular> => {
    FetchMoviePopularParamsSchema.parse(params);

    return createInstance<TFetchMoviePopular>(
        {
            url: `/movie/popular`,
            method: "GET",
            signal,
            params,
        },
        FetchMoviePopularSchema,
    );
};

export function useMoviePopularQuery(params: TFetchMoviePopularParams) {
    return useQuery({
        queryKey: QUERY_KEYS.MOVIE_POPULAR.concat([params]),
        queryFn: ({ signal }) => fetchMoviePopular(signal, params),
        retry: 0,
    });
}
