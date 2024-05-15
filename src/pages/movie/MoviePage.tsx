import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieSimilarRow } from "widgets/movie";
import { MovieDetails, useMovieDetailsQuery } from "entities/movie";

export const MoviePage: FC = () => {
    const { id } = useParams();
    const { data: movie } = useMovieDetailsQuery(Number(id), {
        language: "ru-Ru",
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <section className="pb-5 pt-2">
            <MovieDetails movie={movie} />
            <MovieSimilarRow />
        </section>
    );
};
