import { FC } from "react";
import { MovieRowTemplate } from "features/movie";
import { useMoviePopularQuery } from "entities/movie";

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
