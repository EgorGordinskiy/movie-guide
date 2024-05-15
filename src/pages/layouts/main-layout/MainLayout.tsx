import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "widgets/header";

export const MainLayout: FC = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};
