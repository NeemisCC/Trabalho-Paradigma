import Participantes from "../Image/participantes.png"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArticleTitle } from "./article/article_title"

const Content = () => {
    return (
        <div>
            <ArticleTitle title="Participantes" subtitle="Descubra quem são os anselmos" />
            <Image className="rounded-sm" src={Participantes} alt="participantes"></Image>
            <Button className="absolute right-0 mt-5">Aventure-se</Button>
        </div>
    )
}

export default Content