import { ContactInfo } from "@/types/contactinfo";
import { ReactNode } from "react";
import Image from "next/image"

export function ContactCard(info: ContactInfo): ReactNode {
    return (
        <div
            className={
                `w-3/5 sm:w-1/6 md:w-1/5 lg:1/12 xl:w-[13.5%] break-word flex-none bg-dark-tint aspect-square mx-4 mt-8 sm:mb-16 px-2 box-content
                rounded-2xl flex flex-col items-center
                justify-center hover:shadow-[0px_0px_5px_1px_rgba(185,185,177,1)] duration-300`
            }
        >
            <div className="w-1/4 mx-auto text-center transition-transform hover:scale-110 duration-100">
                <a href={info.url}>
                    <Image className="w-full" src={info.imageLink} alt={info.info} />
                </a>
            </div>
            <div className="mt-8 sm:mt-4 text-md text-center break-all w-full">
                {info.info}{info.url !== undefined && 
                    <a className="transition-colors duration-200 hover:text-accent-hue" href={info.url}>{info.urlText}</a>
                    }
            </div>
        </div>
    )
}