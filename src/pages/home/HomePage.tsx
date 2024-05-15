import { FC } from "react";
import { MoviePopularRow, MovieTopRatedRow } from "widgets/movie";

export const HomePage: FC = () => {
    return (
        <section className="pt-24 pb-5">
            <MoviePopularRow />
            <MovieTopRatedRow />
        </section>
    );
};
