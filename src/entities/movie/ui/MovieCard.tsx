import { FC, useState } from "react";
import { IMovie } from "shared/api";

export interface IMovieCardProps {
    movie: IMovie;
}

export const MovieCard: FC<IMovieCardProps> = ({ movie }) => {
    const [imageLoading, setImageLoading] = useState(true);

    const imageLoaded = () => {
        setImageLoading(false);
    };

    return (
        <div
            className="w-52 h-[312px] cursor-pointer flex flex-col
            hover:-translate-y-1 hover:scale-110
     transition-all"
        >
            {imageLoading && (
                <div className=" animate-pulse rounded-lg w-full h-full bg-neutral-800 border border-neutral-600"></div>
            )}
            <img
                className={`w-full h-full rounded-lg ${imageLoading ? "hidden" : ""}`}
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="movie poster"
                onLoad={imageLoaded}
            />
        </div>
    );
};
