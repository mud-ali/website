import type { headerLinkProps } from "@/types/headerlink";
import Link from "next/link";
import { ReactNode } from "react";

export function HeaderLink(props: headerLinkProps) : ReactNode {
    return (
        <div className="mx-12 my-4 sm:my-0 text-2xl sm:text-lg font-semibold no-underline hover:text-accent-hue transition-all duration-200">
            <Link href={props.url}>
                {props.display}
            </Link>
        </div>
    )
}