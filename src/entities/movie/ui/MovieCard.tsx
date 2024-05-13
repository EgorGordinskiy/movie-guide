import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IMovie } from "shared/api";

export interface IMovieCardProps {
    movie: IMovie;
}

export const MovieCard: FC<IMovieCardProps> = ({ movie }) => {
    const [imageLoading, setImageLoading] = useState(true);
    const navigate = useNavigate();

    const imageLoaded = () => {
        setImageLoading(false);
    };
    const handleClickCard = () => navigate(`/movie/${movie.id}`);
    return (
        <div
            className="w-56 h-[336px] cursor-pointer movie group
    "
            onClick={handleClickCard}
        >
            {imageLoading && (
                <div className="animate-pulse rounded-lg w-full h-full bg-neutral-800 border border-neutral-600"></div>
            )}
            <img
                className={`w-full h-full rounded-lg transition-all hover:opacity-70 ${imageLoading ? "hidden" : ""}`}
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="movie poster"
                onLoad={imageLoaded}
            />
        </div>
    );
};
