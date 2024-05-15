import { FC, ReactNode, useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export interface IUiSliderProps {
    scrollAmount: number;
    children: ReactNode;
}

export const UiSlider: FC<IUiSliderProps> = (props) => {
    const { children, scrollAmount } = props;

    const sliderRef = useRef<HTMLDivElement>(null);

    const handleSlideLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= scrollAmount;
        }
    };

    const handleSlideRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += scrollAmount;
        }
    };

    return (
        <div className="group relative flex items-center">
            <MdChevronLeft
                onClick={handleSlideLeft}
                className="absolute left-2 z-50 hidden cursor-pointer rounded-full bg-neutral-800 opacity-80 hover:opacity-100 group-hover:block"
                size={40}
            />
            <div
                ref={sliderRef}
                className="scrollbar-hide flex size-full gap-3 overflow-x-scroll scroll-smooth whitespace-nowrap"
            >
                {children}
            </div>
            <MdChevronRight
                onClick={handleSlideRight}
                className="absolute right-2 z-50 hidden cursor-pointer rounded-full bg-neutral-800 opacity-80 hover:opacity-100 group-hover:block"
                size={40}
            />
        </div>
    );
};
