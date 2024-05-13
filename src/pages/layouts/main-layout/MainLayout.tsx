import { FC } from "react";
import { CiViewList } from "react-icons/ci";
import { PiAirplay } from "react-icons/pi";
import { Outlet } from "react-router-dom";
import { PATH_PAGE } from "shared/lib";
import { UiHeaderScroll, UiLogo, UiNavigation } from "shared/ui";

export const MainLayout: FC = () => {
    return (
        <>
            <UiHeaderScroll>
                <UiLogo />
                <UiNavigation
                    items={[
                        {
                            key: "home",
                            path: PATH_PAGE.HOME,
                            icon: <PiAirplay />,
                            text: "Главная",
                        },
                        {
                            key: "catalog",
                            path: "*",
                            icon: <CiViewList size={20} />,
                            text: "Каталог",
                        },
                    ]}
                />
            </UiHeaderScroll>

            <Outlet />
        </>
    );
};
