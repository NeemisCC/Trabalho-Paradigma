import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import MenuSectionTitle from "./menu/section_title"
import MenuSectionItem from "./menu/section_item"

export function Sidebar() {
    return (
        <ScrollArea className="h-screen w-60 fixed top-10">
            <div className="p-4">
                <MenuSectionTitle text="Seção"/>
                <MenuSectionItem text="Assunto"/>
            </div>
        </ScrollArea>
    )
}
