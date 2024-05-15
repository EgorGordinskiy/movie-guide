import { FC } from "react";
import { MovieCard } from "entities/movie";
import { IMovie } from "shared/api";
import { UiError, UiSlider, UiSpinner } from "shared/ui";

export interface IMovieRowTemplateProps {
    title?: string;
    movies: IMovie[];
    loading?: boolean;
    error?: boolean;
}

export const MovieRowTemplate: FC<IMovieRowTemplateProps> = (props) => {
    const { title, movies, loading, error } = props;
    return (
        <div>
            <h2 className="p-2 text-xl font-bold">{title}</h2>
            {error && (
                <div className="flex h-[336px] items-center justify-center">
                    <UiError />
                </div>
            )}
            {loading && (
                <div className="flex h-[336px] items-center justify-center">
                    <UiSpinner />
                </div>
            )}
            {movies && (
                <UiSlider scrollAmount={500}>
                    {movies.map((movie) => (
                        <div key={movie.id}>
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </UiSlider>
            )}
        </div>
    );
};
