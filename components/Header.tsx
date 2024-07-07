import { ReactNode } from "react";
import { headerLinkInfo } from "@/data/headerLinkInfo"
import { HeaderLink } from "./HeaderLink";

export function Header() : ReactNode {
    return (
        <div className="border-b-0 border-red-300 pt-6 px-4 flex flex-row-reverse ">
            {
                headerLinkInfo.toReversed().map(headerData => {
                    return (
                        <HeaderLink {...headerData} />
                    )
                })
            }
        </div>
    )
}