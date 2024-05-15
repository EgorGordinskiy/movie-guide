import { FC } from "react";
import Skeleton from "react-loading-skeleton";

export const MovieDetailsSkeleton: FC = () => {
    return (
        <div className="h-[600px] w-full">
            <div className="size-full">
                <div className="absolute top-[10%] w-full p-4 md:p-8">
                    <div className=" max-w-96">
                        <Skeleton />
                    </div>
                    <div className="flex max-w-48 gap-2">
                        <Skeleton containerClassName="flex-1" />
                        <Skeleton containerClassName="flex-1" />
                        <Skeleton containerClassName="flex-1" />
                    </div>
                    <div className=" max-w-24 ">
                        <Skeleton />
                    </div>
                    <div className="max-w-96">
                        <Skeleton height={200} />
                    </div>
                </div>
            </div>
        </div>
    );
};
