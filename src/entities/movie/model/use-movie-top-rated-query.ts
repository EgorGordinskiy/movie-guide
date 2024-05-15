import { useQuery } from "@tanstack/react-query";
import {
    createInstance,
    type BodyType,
    type IFetchMovieTopRatedParams,
    type IFetchMovieTopRated,
} from "shared/api";

import { QUERY_KEYS } from "shared/lib";

export const fetchMovieTopRated = (
    signal: AbortSignal,
    params: BodyType<IFetchMovieTopRatedParams>,
) => {
    return createInstance<IFetchMovieTopRated>({
        url: `/movie/top_rated`,
        method: "GET",
        signal,
        params,
    });
};

export function useMovieTopRatedQuery(params: IFetchMovieTopRatedParams) {
    return useQuery({
        queryKey: QUERY_KEYS.TOP_RATED.concat([params]),
        queryFn: ({ signal }) => fetchMovieTopRated(signal, params),
        retry: 0,
    });
}
