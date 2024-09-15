import React from 'react'

import {
    Breadcrumb as BreadCrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

type Props = {
    caminho: { title: string, src: string }[];
    itemAtual: string;
}

const Breadcrumb = ({ caminho, itemAtual }: Props) => {
    return (
        <BreadCrumb className='mb-5'>
            <BreadcrumbList>
                {caminho.map((item) => (
                    <>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={item.src}>{item.title}</BreadcrumbLink>
                        </BreadcrumbItem>
                        {caminho.indexOf(item) == caminho.length - 1 && <BreadcrumbSeparator />}
                    </>
                ))}
                <BreadcrumbItem>
                    <BreadcrumbPage>{itemAtual}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </BreadCrumb>

    )
}

export default Breadcrumb