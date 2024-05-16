import { useQuery } from "@tanstack/react-query";
import { createInstance, type BodyType } from "shared/api";
import { QUERY_KEYS } from "shared/lib";
import {
    FetchMovieDetailsParamsSchema,
    FetchMovieDetailsSchema,
} from "./contracts";
import type { TFetchMovieDetails, TFetchMovieDetailsParams } from "./types";

export const fetchMovieDetails = (
    signal: AbortSignal,
    id: number,
    params: BodyType<TFetchMovieDetailsParams>,
) => {
    FetchMovieDetailsParamsSchema.parse(params);

    return createInstance<TFetchMovieDetails>(
        {
            url: `/movie/${id}`,
            method: "GET",
            signal,
            params,
        },
        FetchMovieDetailsSchema,
    );
};

export function useMovieDetailsQuery(
    id: number,
    params: TFetchMovieDetailsParams,
) {
    return useQuery({
        queryKey: QUERY_KEYS.MOVIE_DETAILS.concat([id]),
        queryFn: ({ signal }) => fetchMovieDetails(signal, id, params),
        retry: 0,
    });
}
