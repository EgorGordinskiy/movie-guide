import { FC } from "react";
import { LinkProps, NavLink } from "react-router-dom";

export interface IUiLinkProps extends LinkProps {}

export const UiLink: FC<IUiLinkProps> = (props) => {
    return (
        <NavLink
            className={({ isActive }) =>
                `flex gap-1 items-center py-2 border-b-2  ${!isActive && "hover:text-neutral-100 border-transparent"}  transition-all
                ${isActive ? "border-purple-600" : ""}`
            }
            {...props}
        />
    );
};
