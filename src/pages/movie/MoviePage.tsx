import { useMovieDetailsQuery } from "entities/movie";
import { FC } from "react";
import { useParams } from "react-router-dom";

export const MoviePage: FC = () => {
    const { id } = useParams();
    const { data: movie } = useMovieDetailsQuery(Number(id), {
        language: "ru-Ru",
    });

    return (
        <section>
            <h2 className="text-xl font-bold">{movie?.title}</h2>
            <img
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                alt=""
            />
        </section>
    );
};
