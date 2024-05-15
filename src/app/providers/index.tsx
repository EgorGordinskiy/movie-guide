import { QueryClientProvider } from "@tanstack/react-query";
import { SkeletonTheme } from "react-loading-skeleton";
import { BrowserRouter } from "react-router-dom";
import { queryClient } from "shared/lib";
import { Router } from "./RouterProvider";

export function Provider() {
    return (
        <QueryClientProvider client={queryClient}>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </SkeletonTheme>
        </QueryClientProvider>
    );
}
