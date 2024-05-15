import { FC } from "react";
import { useParams } from "react-router-dom";
import { MovieRowTemplate } from "features/movie";
import { useMovieSimilarQuery } from "entities/movie";

export const MovieSimilarRow: FC = () => {
    const { id } = useParams();

    const { data } = useMovieSimilarQuery(Number(id), {
        language: "ru-Ru",
        page: 1,
    });

    return (
        <MovieRowTemplate
            title="Похожие фильмы"
            loading={!data}
            movies={data?.results || []}
        />
    );
};
