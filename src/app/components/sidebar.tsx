import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import MenuSectionTitle from "./menu/section_title"
import MenuSectionItem from "./menu/section_item"
import MenuSection from "./menu/menu_section"

export function Sidebar() {
    return (
        <ScrollArea className="h-screen w-60 fixed top-10">
            <MenuSection>
                <MenuSectionTitle text="P.O.O"/>
                <MenuSectionItem text="Características"/>
                <MenuSectionItem text="História"/>
                <MenuSectionItem text="Pessoas Envolvidas"/>
                <MenuSectionItem text="Fundamentos"/>
                <MenuSectionItem text="Objetos e Classes"/>
                <MenuSectionItem text="Principais Linguagens"/>
            </MenuSection>

            <MenuSection>
                <MenuSectionTitle text="Linguagem Java"/>
                <MenuSectionItem text="História"/>
                <MenuSectionItem text="Sintaxe"/>
                <MenuSectionItem text="Semântica"/>
            </MenuSection>
        </ScrollArea>
    )
}
