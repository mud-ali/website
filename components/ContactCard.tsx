import { ContactInfo } from "@/types/contactinfo";
import { ReactNode } from "react";
import Image from "next/image"

export function ContactCard(info: ContactInfo): ReactNode {
    return (
        <div
            className={
                `w-[18%] bg-dark-tint aspect-square mx-4 mt-8 mb-16 p-1 rounded-full flex flex-col items-center
                justify-center hover:shadow-[0px_0px_5px_1px_rgba(185,185,177,1)] duration-300`
            }
        >
            <div className="w-1/4 mx-auto border-0 border-red-300 text-center transition-transform hover:scale-110 duration-100">
                <a href={info.url}>
                    <Image className="w-full" src={info.imageLink} alt={info.info} />
                </a>
            </div>
            <div className="mt-4 w-5/6 pl-0 text-md text-center border-0 border-red-300">
                {info.info}{info.url !== undefined && 
                    <a className="transition-colors duration-200 hover:text-accent-hue" href={info.url}>{info.urlText}</a>
                    }
            </div>
        </div>
    )
}