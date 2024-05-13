import { MovieCard, useMoviePopularQuery } from "entities/movie";
import { FC } from "react";

export const HomePage: FC = () => {
    const { data } = useMoviePopularQuery({
        language: "ru-Ru",
        page: 1,
    });

    return (
        <section>
            <h2 className="text-xl font-bold">Популярные</h2>
            <div className="mt-2 flex flex-wrap gap-6">
                {data?.results.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </section>
    );
};
