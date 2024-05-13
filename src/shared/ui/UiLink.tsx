import { FC } from "react";
import { LinkProps, NavLink } from "react-router-dom";

export interface IUiLinkProps extends LinkProps {}

export const UiLink: FC<IUiLinkProps> = (props) => {
    return (
        <NavLink
            className={({ isActive }) =>
                `flex gap-1 items-center py-1 px-3 rounded ${!isActive && "hover:text-neutral-100"}  transition-all
                ${isActive ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" : ""}`
            }
            {...props}
        />
    );
};
