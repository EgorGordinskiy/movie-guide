import { FC } from "react";
import { LinkProps, NavLink } from "react-router-dom";

export interface IUiNavLinkProps extends LinkProps {}

export const UiNavLink: FC<IUiNavLinkProps> = (props) => {
    return (
        <NavLink
            className={({ isActive }) =>
                `flex items-center gap-1 border-b-2 py-2  ${!isActive && "border-transparent hover:text-neutral-100"}  transition-all
                ${isActive ? "border-purple-600" : ""}`
            }
            {...props}
        />
    );
};
