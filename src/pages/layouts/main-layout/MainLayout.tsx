import { FC } from "react";
import { Outlet } from "react-router-dom";
import { UiLink, UiLogo } from "shared/ui";

export const MainLayout: FC = () => {
    return (
        <>
            <header className="">
                <div className="container py-2 flex items-center gap-7">
                    <UiLogo />
                    <nav>
                        <ul className="flex gap-3">
                            <li>
                                <UiLink className="text-purple-500" to={"*"}>
                                    Главная
                                </UiLink>
                            </li>
                            <li>
                                <UiLink to={"*"}>Каталог</UiLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="py-5">
                <Outlet />
            </div>
        </>
    );
};
