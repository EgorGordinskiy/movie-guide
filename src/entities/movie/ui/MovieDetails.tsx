import { FC } from "react";
import { IMovieDetails } from "shared/api";

export interface IMovieDetailsProps {
    movie: IMovieDetails;
}

export const MovieDetails: FC<IMovieDetailsProps> = (props) => {
    const { movie } = props;

    return (
        <div className="h-[600px] w-full">
            <div className="size-full">
                <div className="absolute h-[600px] w-full bg-gradient-to-r from-black"></div>
                <img
                    className={`size-full object-cover`}
                    src={
                        movie
                            ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                            : ""
                    }
                    alt={`poster`}
                />

                <div className="absolute top-[10%] w-full p-4 md:p-8">
                    <h1 className="text-3xl font-bold md:text-5xl">
                        {movie?.title}
                    </h1>
                    <p className="mt-1 text-sm">
                        {movie?.genres.map((genre) => genre.name).join(", ")}
                    </p>
                    <p className="mt-2 text-sm text-neutral-400">
                        {movie?.release_date}
                    </p>
                    <p className="mt-2 w-full text-base md:max-w-[70%] lg:max-w-[60%] xl:max-w-[55%]">
                        {movie?.overview}
                    </p>
                </div>
            </div>
        </div>
    );
};
