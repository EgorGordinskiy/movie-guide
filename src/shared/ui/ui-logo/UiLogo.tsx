import { FC } from "react";
import { GiFilmSpool } from "react-icons/gi";
import { Link } from "react-router-dom";
import { PATH_PAGE } from "shared/lib";

export const UiLogo: FC = () => {
    return (
        <Link
            to={PATH_PAGE.HOME}
            className="flex items-center gap-1 text-2xl font-bold"
        >
            <span>MovieGuide</span>
            <GiFilmSpool size={30} />
        </Link>
    );
};
