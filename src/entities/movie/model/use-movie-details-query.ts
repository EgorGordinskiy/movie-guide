import { useQuery } from "@tanstack/react-query";
import {
    createInstance,
    type BodyType,
    type IFetchMovieDetails,
    type IFetchMovieDetailsParams,
} from "shared/api";
import { QUERY_KEYS } from "shared/lib";

export const fetchMovieDetails = (
    signal: AbortSignal,
    id: number,
    params: BodyType<IFetchMovieDetailsParams>,
) => {
    return createInstance<IFetchMovieDetails>({
        url: `/movie/${id}`,
        method: "GET",
        signal,
        params,
    });
};

export function useMovieDetailsQuery(
    id: number,
    params: IFetchMovieDetailsParams,
) {
    return useQuery({
        queryKey: QUERY_KEYS.MOVIE_POPULAR.concat([id, params]),
        queryFn: ({ signal }) => fetchMovieDetails(signal, id, params),
    });
}
