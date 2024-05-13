import { FC } from "react";

export const MovieCard: FC = () => {
    return (
        <div
            className="w-52 cursor-pointer flex flex-col
     transition-all 
    hover:opacity-90"
        >
            <img
                className="rounded-lg"
                src="https://avatars.mds.yandex.net/get-kinopoisk-image/10812607/e494e281-1062-4cf7-bdde-b30be2270830/600x900"
                alt="movie poster"
            />
            <div className="pt-2">
                <h3>Фильм</h3>
                <p className="text-xs text-zinc-500">Комедия, Приключение</p>
            </div>
        </div>
    );
};
