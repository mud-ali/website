import type { Project } from "@/types/project";
import { ReactNode } from "react";
import Image from "next/image"

function parseUrls(raw: string) : string {
    let htmlOutput = ""
    const wordList = raw.split(" ")

    for (let word of wordList) {
        // remove () [] {} $ from the word and see if it starts like a link
        let cleaned = word.replaceAll(/(\(|\)|\[|\]|\$|\{|\})/gmi, "")
        if (!cleaned.startsWith("http")) {
            htmlOutput += word + " "
        } else {
            htmlOutput += word.replace(cleaned, `<a href="${cleaned}" class="content">${cleaned}</a>`)
        }
    }
    return htmlOutput.trim()
}

export function Project(info: Project): ReactNode {
    return (
        <div
            className={
                `w-11/12 mx-auto bg-slate-800 min-h-60 mt-8 mb-4 sm:mb-16 px-8 py-8 rounded-lg flex
                flex-col lg:flex-row
                justify-around hover:shadow-[0px_0px_25px_4px_rgba(185,115,117,1)] duration-300`
            }
        >
            <div className="w-full md:w-1/3 img-container flex justify-center items-center mx-auto">
                <Image
                    className="w-full aspect-auto mb-6 sm:mb-0"
                    src={info.icon}
                    alt={`Icon for project: ${info.name}`}
                />
            </div>
            <div className="w-full sm:p-4 pt-4 sm:pb-0 px-2 border-0 border-red-600 flex flex-col justify-between">
                <div className="top flex w-full justify-between mb-6 sm:mb-0">
                    <div className="w-1/2 text-left sm:w-full">
                        {info.name}
                    </div>
                    <div className="w-1/2 text-right sm:w-full">
                        {info.when}
                    </div>
                </div>
                <div
                    className="mt-[1rem] sm:text-left text-center break-words"
                    dangerouslySetInnerHTML={{ __html: parseUrls(info.desc) }}>
                </div>

                <div className="flex w-1/3 min-w-max mx-0 flex-row justify-left items-center mt-8 mb-2 border-0 border-red-600">
                    {
                        info.tech?.map((imageInfo, i)=>{
                            return (
                                <Image
                                    src={imageInfo}
                                    title={info.techTitle?.at(i) ?? ""}
                                    alt={info.techTitle?.at(i) ?? ""}
                                    height={30}
                                    width={30}
                                    className={`mx-3 border-0 border-green-400`}
                                />
                            )
                        })
                    }
                </div>
                <div className="my-4 flex justify-start border-0 border-red-300">
                    {info.url.map((url, i) => {
                        return (
                            <a
                                key={i}
                                href={url[0]}
                                target="_blank"
                                className={`inline-block rounded-2xl bg-slate-700 px-3 py-1 text-blue-300 mx-2 hover:underline underline-offset-4
                                          hover:text-accent-hue hover:bg-slate-900 transition-colors duration-300`}
                            >
                                {url[1]}
                            </a>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}