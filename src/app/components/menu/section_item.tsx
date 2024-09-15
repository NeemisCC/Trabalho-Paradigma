'use client'

import { normalizeString } from "@/app/util/normalizeString";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuSectionItem = ({ text }: { text: string }) => {
    const pathName = usePathname();

    return (
        <div className={
            `text-sm mb-5 text-black hover:text-yellow-500 hover:cursor-pointer transition-all duration-300
            ${pathName == "/" + normalizeString(text) ? 'text-yellow-500' : ''}`
        }>
            <Link href={normalizeString(text)}>{text}</Link>
        </div>
    )
}

export default MenuSectionItem