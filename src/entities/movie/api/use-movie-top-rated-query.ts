import { useQuery } from "@tanstack/react-query";
import { createInstance, type BodyType } from "shared/api";
import { QUERY_KEYS } from "shared/lib";
import {
    FetchMovieTopRatedParamsSchema,
    FetchMovieTopRatedSchema,
} from "./contracts";
import { TFetchMovieTopRated, TFetchMovieTopRatedParams } from "./types";

export const fetchMovieTopRated = (
    signal: AbortSignal,
    params: BodyType<TFetchMovieTopRatedParams>,
): Promise<TFetchMovieTopRated> => {
    FetchMovieTopRatedParamsSchema.parse(params);

    return createInstance<TFetchMovieTopRated>(
        {
            url: `/movie/top_rated`,
            method: "GET",
            signal,
            params,
        },
        FetchMovieTopRatedSchema,
    );
};

export function useMovieTopRatedQuery(params: TFetchMovieTopRatedParams) {
    return useQuery({
        queryKey: QUERY_KEYS.TOP_RATED.concat([params]),
        queryFn: ({ signal }) => fetchMovieTopRated(signal, params),
        retry: 0,
    });
}
