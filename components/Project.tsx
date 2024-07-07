import type { Project } from "@/types/project";
import { ReactNode } from "react";
import Image from "next/image"

export function Project(info: Project): ReactNode {
    return (
        <div
            className="w-11/12 mx-auto bg-slate-800 h-60 mt-8 mb-16 p-8 rounded-lg flex justify-around hover:shadow-[0px_0px_25px_4px_rgba(185,115,117,1)] duration-500"
        >
            <div className="img-container flex justify-center items-center">
                <Image
                    className="w-2/3 h-2/3"
                    src={info.icon}
                    alt={`Icon for project: ${info.name}`}
                />
            </div>
            <div className="w-full p-4">
                <div className="top flex w-full justify-between">
                    <span>
                        {info.name}
                    </span>
                    <span>
                        {info.when}
                    </span>
                </div>
                <div className="mt-[1rem]">
                    {info.desc}
                </div>
            </div>
        </div>
    )
}