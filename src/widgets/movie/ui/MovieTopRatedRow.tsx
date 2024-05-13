import { MovieCard, useMovieTopRatedQuery } from "entities/movie";
import { FC } from "react";
import { UiSlider } from "shared/ui";

export const MovieTopRatedRow: FC = () => {
    const { data } = useMovieTopRatedQuery({
        language: "ru-Ru",
        page: 1,
    });

    return (
        <UiSlider scrollAmount={500}>
            {data?.results.map((movie) => (
                <div key={movie.id}>
                    <MovieCard movie={movie} loading={!data} />
                </div>
            ))}
        </UiSlider>
    );
};
