import { useMovieTopRatedQuery } from "entities/movie";
import { MovieRowTemplate } from "features/movie";
import { FC } from "react";

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
