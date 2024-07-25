import { ReactNode } from "react";
import { Blogpost } from "@/types/blogpost";

//TODO
export function PostPreview(info: Blogpost): ReactNode {
    return (
        <div
            className={
                `w-2/3 break-word mx-auto my-8 px-2 py-4 box-border flex flex-col items-center justify-center border-4 border-blue-300`
            }
        >
            <a href={`${info.url}`}>
                <div className="mb-4 flex justify-between">
                    <span className="text-2xl font-bold inline">
                        {info.title}
                    </span>
                    <span className="text-right inline">
                        {info.date instanceof Date ? info.date.toDateString() : info.date}
                    </span>
                </div>
                
                {info.description}
            </a>
        </div>
    )
}