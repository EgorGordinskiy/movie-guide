import { FC } from "react";
import { IMovie } from "shared/api";

export interface IMovieCardProps {
    movie: IMovie;
    onClickCard?: () => void;
}

export const MovieCard: FC<IMovieCardProps> = (props) => {
    const { movie, onClickCard } = props;

    return (
        <div
            className="group relative h-[336px] w-56 cursor-pointer overflow-hidden rounded-lg bg-neutral-800"
            onClick={onClickCard}
        >
            <img
                className={`size-full object-cover transition-all hover:opacity-70 `}
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="movie poster"
            />
            <div className="absolute right-2 top-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 py-1 text-xs">
                {movie.vote_average}
            </div>
        </div>
    );
};
