import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

export interface IUiLinkProps extends LinkProps {}

export const UiLink: FC<IUiLinkProps> = (props) => {
    return <Link className="flex gap-1 items-center" {...props} />;
};
