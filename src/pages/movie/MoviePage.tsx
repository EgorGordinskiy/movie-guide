import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieSimilarRow } from "widgets/movie";
import { MovieDetailsBlock } from "widgets/movie";

export const MoviePage: FC = () => {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <section className="pb-5 pt-12">
            <MovieDetailsBlock movieId={Number(id)} />
            <MovieSimilarRow />
        </section>
    );
};
