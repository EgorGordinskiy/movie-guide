import { FC } from "react";
import { MovieCard } from "entities/movie";
import { IMovie } from "shared/api";
import { UiSlider } from "shared/ui";

export interface IMovieRowTemplateProps {
    title?: string;
    movies: IMovie[];
    loading?: boolean;
}

export const MovieRowTemplate: FC<IMovieRowTemplateProps> = (props) => {
    const { title, movies, loading } = props;
    return (
        <div>
            <h2 className="p-2 text-xl font-bold">{title}</h2>
            <UiSlider scrollAmount={500}>
                {movies.map((movie) => (
                    <div key={movie.id}>
                        <MovieCard movie={movie} loading={loading} />
                    </div>
                ))}
            </UiSlider>
        </div>
    );
};
