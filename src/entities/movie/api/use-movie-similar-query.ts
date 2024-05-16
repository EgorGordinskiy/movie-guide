import { useQuery } from "@tanstack/react-query";
import { createInstance, type BodyType } from "shared/api";
import { QUERY_KEYS } from "shared/lib";
import {
    FetchMovieSimilarParamsSchema,
    FetchMovieSimilarSchema,
} from "./contracts";
import type { TFetchMovieSimilar, TFetchMovieSimilarParams } from "./types";

export const fetchMovieSimilar = (
    signal: AbortSignal,
    id: number,
    params: BodyType<TFetchMovieSimilarParams>,
): Promise<TFetchMovieSimilar> => {
    FetchMovieSimilarParamsSchema.parse(params);

    return createInstance<TFetchMovieSimilar>(
        {
            url: `/movie/${id}/similar`,
            method: "GET",
            signal,
            params,
        },
        FetchMovieSimilarSchema,
    );
};

export function useMovieSimilarQuery(
    id: number,
    params: TFetchMovieSimilarParams,
) {
    return useQuery({
        queryKey: QUERY_KEYS.MOVIE_SIMILAR.concat([id, params]),
        queryFn: ({ signal }) => fetchMovieSimilar(signal, id, params),
        retry: 0,
    });
}
