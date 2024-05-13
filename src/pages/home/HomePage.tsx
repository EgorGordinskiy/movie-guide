import { FC } from "react";
import { MoviePopularRow } from "widgets/movie";

export const HomePage: FC = () => {
    return (
        <section className="pt-24 pb-5">
            <h2 className=" ml-3 mb-2 text-xl font-bold">Популярные</h2>
            <MoviePopularRow />
            <h2 className="mt-10 ml-3 mb-2 text-xl font-bold">Лучшие фильмы</h2>
        </section>
    );
};
