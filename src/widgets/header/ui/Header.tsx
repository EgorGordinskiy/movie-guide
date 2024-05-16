import { FC } from "react";
import { PiAirplay } from "react-icons/pi";
import { PATH_PAGE, useHeaderScroll } from "shared/lib";
import { UiLogo, UiNavigation } from "shared/ui";

export const Header: FC = () => {
    const { show } = useHeaderScroll();

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 bg-neutral-950 transition-transform duration-300 ${
                show ? "translate-y-0" : "translate-y-[-102%]"
            }`}
        >
            <div className="flex items-center gap-7 px-2">
                <UiLogo />
                <UiNavigation
                    items={[
                        {
                            key: "home",
                            path: PATH_PAGE.HOME,
                            icon: <PiAirplay />,
                            text: "Главная",
                        },
                    ]}
                />
            </div>
        </header>
    );
};
