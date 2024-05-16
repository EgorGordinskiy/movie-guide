import { FC } from "react";
import { TGenre } from "../api";

export interface IGenreCardProps {
    genre: TGenre;
    onClickCard?: () => void;
}

export const GenreCard: FC<IGenreCardProps> = (props) => {
    const { genre, onClickCard } = props;

    return (
        <div
            className="flex h-36 w-72 cursor-pointer items-center justify-center rounded-lg bg-neutral-800"
            onClick={onClickCard}
        >
            <h3>{genre.name}</h3>
        </div>
    );
};
