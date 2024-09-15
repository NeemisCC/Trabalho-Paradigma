'use client'

import Participantes from "../Image/participantes.png"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArticleTitle } from "./article/article_title"
import { useRouter } from "next/navigation"

const Apresentacao = () => {
    const router = useRouter();
    return (
        <div>
            <ArticleTitle title="Participantes" subtitle="Descubra quem são os anselmos" />
            <Image className="rounded-sm" src={Participantes} alt="participantes"></Image>
            <Button className="absolute right-0 mt-5" onClick={() => router.push('/caracteristicas')}>Aventure-se</Button>
        </div>
    )
}

export default Apresentacao