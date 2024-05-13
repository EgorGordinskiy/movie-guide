import {
    MovieCard,
    MovieDetails,
    useMovieDetailsQuery,
    useMovieSimilarQuery,
} from "entities/movie";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { UiSlider } from "shared/ui";

export const MoviePage: FC = () => {
    const { id } = useParams();
    const { data: movie } = useMovieDetailsQuery(Number(id), {
        language: "ru-Ru",
    });
    const { data } = useMovieSimilarQuery(Number(id), {
        language: "ru-Ru",
        page: 1,
    });

    return (
        <section className="pt-2 pb-5">
            <MovieDetails movie={movie} />
            <h3 className="p-3">Похожие фильмы</h3>
            <UiSlider scrollAmount={500}>
                {data?.results.map((movie) => (
                    <li key={movie.id}>
                        <MovieCard movie={movie} />
                    </li>
                ))}
            </UiSlider>
        </section>
    );
};
