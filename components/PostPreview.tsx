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
            {info.description}
        </div>
    )
}