import { FC } from "react";

import { PiAirplayBold, PiShootingStarBold } from "react-icons/pi";
import { Outlet } from "react-router-dom";

export const MainLayout: FC = () => {
    return (
        <>
            <header className="">
                <div className="container py-2 flex items-center gap-7">
                    <div className="font-bold text-2xl">
                        <span>Movie</span>
                        <span>Guide</span>
                    </div>
                    <ul className="flex items-center gap-4">
                        <li className="flex items-center gap-1">
                            <PiAirplayBold /> Главная
                        </li>
                        <li className="flex items-center gap-1">
                            <PiShootingStarBold /> Избранное
                        </li>
                    </ul>
                </div>
            </header>
            <div className="container py-5">
                <Outlet />
            </div>
        </>
    );
};
