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
            className={`fixed top-0 left-0 right-0 bg-neutral-950 z-50 transform transition-transform duration-300 ${
                show ? "translate-y-0" : "-translate-y-[102%]"
            }`}
        >
            <div className="px-2 flex items-center gap-7">{children}</div>
        </header>
    );
};
