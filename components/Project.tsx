import type { Project } from "@/types/project";
import { ReactNode } from "react";
import Image from "next/image"

export function Project(info: Project): ReactNode {
    return (
        <div
            className={
                `w-11/12 mx-auto bg-slate-800 min-h-60 mt-8 mb-4 sm:mb-16 p-8 rounded-lg flex
                flex-col lg:flex-row
                justify-around hover:shadow-[0px_0px_25px_4px_rgba(185,115,117,1)] duration-300`
            }
        >
            <div className="img-container flex justify-center items-center">
                <Image
                    className="w-1/3 sm:w-2/3 aspect-auto mb-6 sm:mb-0"
                    src={info.icon}
                    alt={`Icon for project: ${info.name}`}
                />
            </div>
            <div className="w-full sm:p-4 py-4 px-2">
                <div className="top flex w-full justify-between mb-6 sm:mb-0">
                    <div className="w-1/2 text-left sm:w-full">
                        {info.name}
                    </div>
                    <div className="w-1/2 text-right sm:w-full">
                        {info.when}
                    </div>
                </div>
                <div className="mt-[1rem] sm:text-left text-center break-words">
                    {info.desc}
                </div>
            </div>
        </div>
    )
}