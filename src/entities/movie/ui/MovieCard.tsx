import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IMovie } from "shared/api";

export interface IMovieCardProps {
    movie: IMovie;
    loading?: boolean;
}

export const MovieCard: FC<IMovieCardProps> = (props) => {
    const { movie, loading } = props;

    const [imageLoading, setImageLoading] = useState(true);
    const navigate = useNavigate();

    const imageLoaded = () => {
        setImageLoading(false);
    };
    const handleClickCard = () => navigate(`/movie/${movie.id}`);

    const isLoading = loading || imageLoading;
    return (
        <div
            className="relative w-56 h-[336px] cursor-pointer movie group
    "
            onClick={handleClickCard}
        >
            {imageLoading && (
                <div className="animate-pulse rounded-lg w-full h-full bg-neutral-800 border border-neutral-600"></div>
            )}
            <img
                className={`w-full h-full rounded-lg transition-all hover:opacity-70 ${isLoading ? "hidden" : ""}`}
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="movie poster"
                onLoad={imageLoaded}
            />
            <div className="py-1 px-2 text-xs rounded absolute top-2 right-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                {movie.vote_average}
            </div>
        </div>
    );
};
