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
        <div className="relative flex items-center group">
            <MdChevronLeft
                onClick={handleSlideLeft}
                className="bg-neutral-800 left-2 rounded-full absolute opacity-80 hover:opacity-100 cursor-pointer z-50 hidden group-hover:block"
                size={40}
            />
            <div
                ref={sliderRef}
                className="flex gap-3 w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
                {children}
            </div>
            <MdChevronRight
                onClick={handleSlideRight}
                className="right-2 bg-neutral-800 rounded-full absolute opacity-80 hover:opacity-100 cursor-pointer z-50 hidden group-hover:block"
                size={40}
            />
        </div>
    );
};
