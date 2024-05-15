import { useMoviePopularQuery } from "entities/movie";
import { MovieRowTemplate } from "features/movie";
import { FC } from "react";

export const MoviePopularRow: FC = () => {
    const { data } = useMoviePopularQuery({
        language: "ru-Ru",
        page: 1,
    });

    return (
        <MovieRowTemplate
            title="Популярные"
            loading={!data}
            movies={data?.results || []}
        />
    );
};
