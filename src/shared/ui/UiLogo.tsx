import { FC } from "react";
import { Link } from "react-router-dom";
import { PATH_PAGE } from "shared/lib";

export const UiLogo: FC = () => {
    return (
        <Link to={PATH_PAGE.HOME} className="font-bold text-2xl">
            <span>Movie</span>
            <span>Guide</span>
        </Link>
    );
};
