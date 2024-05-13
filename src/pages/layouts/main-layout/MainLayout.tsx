import { FC, useEffect, useState } from "react";
import { CiViewList } from "react-icons/ci";
import { PiAirplay } from "react-icons/pi";
import { Outlet } from "react-router-dom";
import { PATH_PAGE } from "shared/lib";
import { UiLink, UiLogo } from "shared/ui";

export const MainLayout: FC = () => {
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
        <>
            <header
                className={`fixed top-0 left-0 right-0 bg-neutral-950 z-50 transform transition-transform duration-300 ${
                    show ? "translate-y-0" : "-translate-y-[102%]"
                }`}
            >
                <div className="px-2 flex items-center gap-7">
                    <UiLogo />
                    <nav>
                        <ul className="flex gap-3">
                            <li>
                                <UiLink to={PATH_PAGE.HOME}>
                                    <PiAirplay /> <span>Главная</span>
                                </UiLink>
                            </li>
                            <li>
                                <UiLink to={"*"}>
                                    <CiViewList size={20} /> Каталог
                                </UiLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <Outlet />
        </>
    );
};
