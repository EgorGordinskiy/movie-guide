import { FC } from "react";
import { MovieCard, useMoviePopularQuery } from "entities/movie";
import { UiSlider } from "shared/ui";

export const HomePage: FC = () => {
    const { data } = useMoviePopularQuery({
        language: "ru-Ru",
        page: 1,
    });

    return (
        <section>
            <h2 className=" ml-3 mb-2 text-xl font-bold">Популярные</h2>
            <UiSlider scrollAmount={500}>
                {data?.results.map((movie) => (
                    <li key={movie.id}>
                        <MovieCard movie={movie} />
                    </li>
                ))}
            </UiSlider>

            <h2 className="mt-10 ml-3 mb-2 text-xl font-bold">Лучшие фильмы</h2>
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
