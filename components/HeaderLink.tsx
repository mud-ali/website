import type { headerLinkProps } from "@/types/headerlink";
import { ReactNode } from "react";

export function HeaderLink(props: headerLinkProps) : ReactNode {
    return (
        <div className="mx-12 text-lg font-semibold no-underline hover:text-accent-hue transition-all duration-200">
            <a href={props.url}>
                {props.display}
            </a>
        </div>
    )
}