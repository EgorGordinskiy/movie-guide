import { FC } from "react";
import { IMovie } from "shared/api";
import { UiMovieRating } from "shared/ui";

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
            <UiMovieRating rating={movie.vote_average} />
        </div>
    );
};
