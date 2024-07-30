import { ReactNode } from "react";
import { Blogpost } from "@/types/blogpost";

//TODO
export function PostPreview(info: Blogpost): ReactNode {
    return (
        <div
            className={
                `w-full break-word mx-auto my-8 p-8 box-border flex
                flex-col items-center justify-center rounded-xl
                bg-dark-tint`
            }
        >
            <a href={info.url} className="block w-full">
                <div className="mb-4 w-full flex justify-between">
                    <span className="text-2xl font-bold inline">
                        {info.title}
                    </span>
                    <span className="text-right inline">
                        {info.date instanceof Date ? info.date.toDateString() : info.date}
                    </span>
                </div>
                
                {info.description}
                <div className="flex pt-8 pb-0">
                    {
                        info.tags.length > 0 && <p className="text-white">Tags: </p>
                    }
                    {
                        info.tags.map((tag, i) => {
                            return (
                                <p key={i}>
                                    <span className="ml-2 text-accent-hue hover:">{tag}</span>
                                    {i !== info.tags.length - 1 ? "," : ""}
                                </p>
                            )
                        })
                    }
                </div>
            </a>
        </div>
    )
}