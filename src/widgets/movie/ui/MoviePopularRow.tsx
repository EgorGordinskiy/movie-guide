import { FC } from "react";
import { MovieRowTemplate } from "features/movie";
import { useMoviePopularQuery } from "entities/movie";

export const MoviePopularRow: FC = () => {
    const { data, isError, isPending } = useMoviePopularQuery({
        language: "ru-Ru",
        page: 10,
    });

    return (
        <MovieRowTemplate
            title="Популярные"
            loading={isPending}
            error={isError}
            movies={data?.results || []}
        />
    );
};
