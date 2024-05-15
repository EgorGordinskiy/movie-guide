import { useEffect, useState } from "react";

export function useHeaderScroll() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlHeader = () => {
            if (window.scrollY > lastScrollY) {
                setShow(false);
            } else {
                setShow(true);
            }

            setLastScrollY(window.scrollY);
        };
        window.addEventListener("scroll", controlHeader);

        return () => {
            window.removeEventListener("scroll", controlHeader);
        };
    }, [lastScrollY]);

    return {
        show,
    };
}
