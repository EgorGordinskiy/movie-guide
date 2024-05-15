import { FC } from "react";

export interface IUiErrorProps {
    message?: string;
}

export const UiError: FC<IUiErrorProps> = (props) => {
    const { message = "Упс! Что-то пошло не так!" } = props;

    return (
        <div className="rounded border border-red-700 bg-neutral-800 px-4 py-3 text-base text-red-700">
            <strong>Ошибка: </strong>
            <span>{message}</span>
        </div>
    );
};
