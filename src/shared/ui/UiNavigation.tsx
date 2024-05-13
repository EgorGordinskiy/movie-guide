import { FC, ReactNode } from "react";
import { UiNavLink } from "./UiNavLink";

export interface IUiNavigationItem {
    key: string;
    path: string;
    text: string;
    icon: ReactNode;
}
export interface IUiNavigationProps {
    items: IUiNavigationItem[];
}

export const UiNavigation: FC<IUiNavigationProps> = (props) => {
    const { items } = props;

    return (
        <nav>
            <ul className="flex gap-3">
                {items.map((item) => (
                    <li key={item.key}>
                        <UiNavLink to={item.path}>
                            {item.icon} <span>{item.text}</span>
                        </UiNavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
