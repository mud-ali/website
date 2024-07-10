import { ReactNode } from "react";
import { headerLinkInfo } from "@/data/headerLinkInfo"
import { HeaderLink } from "./HeaderLink";

export function Header() : ReactNode {
    return (
        <div className="pt-6 px-4 flex items-center flex-col-reverse md:flex-row-reverse ">
            {
                headerLinkInfo.toReversed().map((headerData, i) => {
                    return (
                        <HeaderLink {...headerData} key={i}/>
                    )
                })
            }
        </div>
    )
}