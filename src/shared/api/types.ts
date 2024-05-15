export interface IMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
export interface IMovieDetails extends Omit<IMovie, "genre_ids"> {
    genres: IGenre[];
}
export interface IGenre {
    id: number;
    name: string;
}

//fetch

export interface IFetchMoviePopular {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}
export interface IFetchMovieTopRated extends IFetchMoviePopular {}
export interface IFetchMovieSimilar extends IFetchMoviePopular {}
export interface IFetchMovieDetails extends IMovieDetails {}

//params

export interface IFetchMoviePopularParams {
    language: string;
    page: number;
}
export interface IFetchMovieDetailsParams {
    language: string;
}
export interface IFetchMovieTopRatedParams extends IFetchMoviePopularParams {}
export interface IFetchMovieSimilarParams extends IFetchMoviePopularParams {}
