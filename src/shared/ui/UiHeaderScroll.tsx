import { FC, ReactNode, useEffect, useState } from "react";

export interface IUiHeaderScrollProps {
    children: ReactNode;
}

export const UiHeaderScroll: FC<IUiHeaderScrollProps> = (props) => {
    const { children } = props;

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            if (window.scrollY > lastScrollY) {
                setShow(false);
            } else {
                setShow(true);
            }

            setLastScrollY(window.scrollY);
        };
        window.addEventListener("scroll", controlNavbar);

        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 bg-neutral-950 transition-transform duration-300 ${
                show ? "translate-y-0" : "translate-y-[-102%]"
            }`}
        >
            <div className="flex items-center gap-7 px-2">{children}</div>
        </header>
    );
};
