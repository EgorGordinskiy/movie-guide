import { MovieCard, useMoviePopularQuery } from "entities/movie";
import { FC } from "react";
import { UiSlider } from "shared/ui";

export const MoviePopularRow: FC = () => {
    const { data } = useMoviePopularQuery({
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
