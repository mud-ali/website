import { StaticImageData } from "next/image"

export type Project = {
    name: string,
    desc: string,
    icon: StaticImageData,
    when: string 
}