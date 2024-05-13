import { QueryClientProvider } from "@tanstack/react-query";
import { Router } from "./RouterProvider";
import { BrowserRouter } from "react-router-dom";
import { queryClient } from "shared/lib";

export function Provider() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </QueryClientProvider>
    );
}
