type TId = number | ":id";

export const PATH_PAGE = {
    HOME: "/",
    MOVIE: (id: TId): string => `/movie/${id}`,
} as const;
