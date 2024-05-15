import { FC } from "react";
import { useParams } from "react-router-dom";
import { MovieSimilarRow } from "widgets/movie";
import { MovieDetails, useMovieDetailsQuery } from "entities/movie";

export const MoviePage: FC = () => {
    const { id } = useParams();
    const { data: movie } = useMovieDetailsQuery(Number(id), {
        language: "ru-Ru",
    });

    return (
        <section className="pt-2 pb-5">
            <MovieDetails movie={movie} />
            <MovieSimilarRow />
        </section>
    );
};
