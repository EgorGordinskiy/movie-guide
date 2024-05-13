import { FC } from "react";
import { IMovieDetails } from "shared/api";

export interface IMovieDetailsProps {
    movie: IMovieDetails | undefined;
}

export const MovieDetails: FC<IMovieDetailsProps> = (props) => {
    const { movie } = props;

    return (
        <div className="w-full h-[600px]">
            <div className="w-full h-full">
                <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
                <img
                    className={`w-full h-full object-cover`}
                    src={
                        movie
                            ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                            : ""
                    }
                    alt={`poster`}
                />

                <div className="absolute w-full top-[10%] p-4 md:p-8">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        {movie?.title}
                    </h1>
                    <p>{movie?.genres.map((genre) => genre.name).join(", ")}</p>
                    <p className="mt-2 text-neutral-400 text-sm">
                        {movie?.release_date}
                    </p>
                    <p className="mt-2 w-full md:max-w-[70%] lg:max-w-[60%] xl:max-w-[55%]">
                        {movie?.overview}
                    </p>
                </div>
            </div>
        </div>
    );
};
