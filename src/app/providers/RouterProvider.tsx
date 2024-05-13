import { HomePage } from "pages/home";
import { MainLayout } from "pages/layouts";
import { MoviePage } from "pages/movie";
import { Navigate, useRoutes } from "react-router-dom";
import { PATH_PAGE } from "shared/lib";

export function Router() {
    return useRoutes([
        { path: "*", element: <Navigate to={PATH_PAGE.HOME} replace /> },
        {
            path: PATH_PAGE.HOME,
            element: <MainLayout />,
            children: [
                {
                    path: PATH_PAGE.HOME,
                    element: <HomePage />,
                },
                {
                    path: PATH_PAGE.MOVIE,
                    element: <MoviePage />,
                },
            ],
        },
    ]);
}
