import { StaticImageData } from "next/image"

export type Project = {
    name: string,
    desc: string,
    icon: StaticImageData,
    when: string,
    url: string[][],
    tech?: StaticImageData[],
    techTitle?: string[],
    id?: number
}