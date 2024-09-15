import { PropsWithChildren } from "react";
import { Menu } from "../menu/menu";
import { Sidebar } from "../sidebar";

export default function PageLayout({ children }: PropsWithChildren) {
    return (
        <div>
            <Menu />
            <div className="container mx-auto px-24">
                <div className="flex mt-10">
                    <Sidebar />
                    <div className="relative top-10 w-2/3 mx-auto text-justify">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}