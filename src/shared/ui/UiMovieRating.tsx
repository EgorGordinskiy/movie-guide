import { FC } from "react";
export interface IUiMovieRatingProps {
    rating: number;
}
export const UiMovieRating: FC<IUiMovieRatingProps> = (props) => {
    const { rating } = props;

    return (
        <div className="absolute right-2 top-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 py-1 text-xs">
            {rating}
        </div>
    );
};
