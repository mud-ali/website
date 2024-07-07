import { StaticImageData } from "next/image";

export type ContactInfo = {
    info: string,
    url: string | undefined,
    urlText: string | undefined,
    imageLink: StaticImageData,
}