import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IMovie } from "shared/api";
import { UiError } from "shared/ui";

export interface IMovieCardProps {
    movie: IMovie;
    loading?: boolean;
    error?: boolean;
}

export const MovieCard: FC<IMovieCardProps> = (props) => {
    const { movie, loading, error } = props;

    const [imageLoading, setImageLoading] = useState(true);
    const navigate = useNavigate();

    const imageLoaded = () => {
        setImageLoading(false);
    };
    const handleClickCard = () => navigate(`/movie/${movie.id}`);

    const isLoading = loading || imageLoading;
    return (
        <>
            {error ? (
                <UiError />
            ) : (
                <div
                    className="group relative h-[336px] w-56 cursor-pointer
"
                    onClick={handleClickCard}
                >
                    {imageLoading && (
                        <div className="size-full animate-pulse rounded-lg border border-neutral-600 bg-neutral-800"></div>
                    )}
                    <img
                        className={`size-full rounded-lg transition-all hover:opacity-70 ${isLoading ? "hidden" : ""}`}
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt="movie poster"
                        onLoad={imageLoaded}
                    />
                    <div className="absolute right-2 top-2 rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 py-1 text-xs">
                        {movie.vote_average}
                    </div>
                </div>
            )}
        </>
    );
};
