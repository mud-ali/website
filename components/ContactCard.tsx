import { ContactInfo } from "@/types/contactinfo";
import { ReactNode } from "react";
import Image from "next/image"

export function ContactCard(info: ContactInfo): ReactNode {
    return (
        <div
            className={
                `w-1/5 sm:w-1/12 break-word flex-none aspect-square mx-4 mt-8 sm:mb-16 px-2 box-content
                rounded-2xl flex flex-col items-center justify-center`
            }
        >
            <div className="w-full mx-auto text-center transition-all hover:w-10/12 duration-200" >
                <a href={info.url} title={info.urlText} target="_blank">
                    <Image className="w-full" src={info.imageLink} alt={info.info} />
                </a>
            </div>
            {/* <div className="mt-8 sm:mt-4 text-md text-center break-all w-full">
                {info.info}{info.url !== undefined && 
                    <a className="transition-colors duration-200 hover:text-accent-hue" href={info.url}>{info.urlText}</a>
                    }
            </div> */}
        </div>
    )
}