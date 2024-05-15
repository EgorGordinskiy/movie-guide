import { FC } from "react";
import {
    MovieDetails,
    MovieDetailsSkeleton,
    useMovieDetailsQuery,
} from "entities/movie";
import { UiError } from "shared/ui";

export interface IMovieDetailsBlockProps {
    movieId: number;
}
export const MovieDetailsBlock: FC<IMovieDetailsBlockProps> = (props) => {
    const { movieId } = props;

    const {
        data: movie,
        isError,
        isPending,
    } = useMovieDetailsQuery(movieId, {
        language: "ru-Ru",
    });
    return (
        <>
            {isError && (
                <div className="flex h-[600px] w-full items-center justify-center">
                    <UiError />
                </div>
            )}

            {isPending && <MovieDetailsSkeleton />}

            {movie && <MovieDetails movie={movie} />}
        </>
    );
};
