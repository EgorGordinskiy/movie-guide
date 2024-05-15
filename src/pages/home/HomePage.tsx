import { FC } from "react";
import { MoviePopularRow, MovieTopRatedRow } from "widgets/movie";

export const HomePage: FC = () => {
    return (
        <section className="pb-5 pt-24">
            <MoviePopularRow />
            <MovieTopRatedRow />
        </section>
    );
};
