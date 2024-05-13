import { useQuery } from "@tanstack/react-query";
import {
    createInstance,
    type BodyType,
    type IFetchMovieSimilarParams,
    type IFetchMovieSimilar,
} from "shared/api";

import { QUERY_KEYS } from "shared/lib";

export const fetchMovieSimilar = (
    signal: AbortSignal,
    id: number,
    params: BodyType<IFetchMovieSimilarParams>,
) => {
    return createInstance<IFetchMovieSimilar>({
        url: `/movie/${id}/similar`,
        method: "GET",
        signal,
        params,
    });
};

export function useMovieSimilarQuery(
    id: number,
    params: IFetchMovieSimilarParams,
) {
    return useQuery({
        queryKey: QUERY_KEYS.MOVIE_SIMILAR.concat([id, params]),
        queryFn: ({ signal }) => fetchMovieSimilar(signal, id, params),
    });
}
