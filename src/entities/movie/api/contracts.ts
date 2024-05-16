import { z } from "zod";

export const MovieSchema = z.object({
    id: z.number(),
    adult: z.boolean(),
    backdrop_path: z.string(),
    genre_ids: z.array(z.number()),
    original_language: z.string(),
    original_title: z.string(),
    overview: z.string(),
    popularity: z.number(),
    poster_path: z.string(),
    release_date: z.string(),
    title: z.string(),
    video: z.boolean(),
    vote_average: z.number(),
    vote_count: z.number(),
});

export const GenreSchema = z.object({
    id: z.number(),
    name: z.string(),
});
export const MovieDetailsSchema = MovieSchema.omit({ genre_ids: true }).extend({
    genres: z.array(GenreSchema),
});

//params
export const FetchMoviePopularParamsSchema = z.object({
    language: z.string(),
    page: z.number().int().min(1),
});
export const FetchMovieSimilarParamsSchema =
    FetchMoviePopularParamsSchema.extend({});
export const FetchMovieTopRatedParamsSchema =
    FetchMoviePopularParamsSchema.extend({});
export const FetchMovieDetailsParamsSchema = FetchMoviePopularParamsSchema.omit(
    { page: true },
);

//fetch
export const FetchMoviePopularSchema = z.object({
    page: z.number(),
    results: z.array(MovieSchema),
    total_pages: z.number(),
    total_results: z.number(),
});
export const FetchMovieSimilarSchema = FetchMoviePopularSchema.extend({});
export const FetchMovieTopRatedSchema = FetchMoviePopularSchema.extend({});
export const FetchMovieDetailsSchema = MovieDetailsSchema.extend({});
