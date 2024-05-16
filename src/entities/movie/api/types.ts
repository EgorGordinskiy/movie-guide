import { z } from "zod";
import {
    FetchMovieDetailsParamsSchema,
    FetchMovieDetailsSchema,
    FetchMoviePopularParamsSchema,
    FetchMoviePopularSchema,
    FetchMovieSimilarParamsSchema,
    FetchMovieSimilarSchema,
    FetchMovieTopRatedParamsSchema,
    FetchMovieTopRatedSchema,
    GenreSchema,
    MovieDetailsSchema,
    MovieSchema,
} from "./contracts";

export type TMovie = z.infer<typeof MovieSchema>;
export type TMovieDetails = z.infer<typeof MovieDetailsSchema>;
export type TGenre = z.infer<typeof GenreSchema>;

export type TFetchMoviePopularParams = z.infer<
    typeof FetchMoviePopularParamsSchema
>;
export type TFetchMovieSimilarParams = z.infer<
    typeof FetchMovieSimilarParamsSchema
>;
export type TFetchMovieTopRatedParams = z.infer<
    typeof FetchMovieTopRatedParamsSchema
>;
export type TFetchMovieDetailsParams = z.infer<
    typeof FetchMovieDetailsParamsSchema
>;

export type TFetchMoviePopular = z.infer<typeof FetchMoviePopularSchema>;
export type TFetchMovieSimilar = z.infer<typeof FetchMovieSimilarSchema>;
export type TFetchMovieTopRated = z.infer<typeof FetchMovieTopRatedSchema>;
export type TFetchMovieDetails = z.infer<typeof FetchMovieDetailsSchema>;
