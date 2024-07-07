import type { Project } from "@/types/project";
import { ReactNode } from "react";

export function Project(info: Project) : ReactNode {
    return (
        <div className="w-2/3 bg-slate-800">
            <div className="top flex w-full justify-between">
                <span>
                    {info.name}
                </span>
                <span>
                    {info.when}
                </span>
            </div>
        </div>
    )
}