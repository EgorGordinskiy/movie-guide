import { FC } from "react";
import { MovieRowTemplate } from "features/movie";
import { useMovieTopRatedQuery } from "entities/movie";

export const MovieTopRatedRow: FC = () => {
    const { data } = useMovieTopRatedQuery({
        language: "ru-Ru",
        page: 1,
    });

    return (
        <MovieRowTemplate
            title="Топ"
            loading={!data}
            movies={data?.results || []}
        />
    );
};
