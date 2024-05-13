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

export interface IFetchMoviePopular {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}

export interface IFetchMoviePopularParams {
    language: string;
    page: number;
}

export interface IFetchMovieDetailsParams {
    language: string;
}

export interface IFetchMovieDetails extends IMovieDetails {}
