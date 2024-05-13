import { useQuery } from "@tanstack/react-query";
import {
    type IFetchMoviePopular,
    type IFetchMoviePopularParams,
    createInstance,
    type BodyType,
} from "shared/api";

import { QUERY_KEYS } from "shared/lib";

export const fetchMoviePopular = (
    signal: AbortSignal,
    params: BodyType<IFetchMoviePopularParams>,
) => {
    return createInstance<IFetchMoviePopular>({
        url: `/movie/popular`,
        method: "GET",
        signal,
        params,
    });
};

export function useMoviePopularQuery(params: IFetchMoviePopularParams) {
    return useQuery({
        queryKey: QUERY_KEYS.MOVIE_POPULAR.concat([params]),
        queryFn: ({ signal }) => fetchMoviePopular(signal, params),
    });
}
