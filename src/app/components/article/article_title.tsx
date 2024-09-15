type Props = {
    title: string;
    subtitle: string;
}

export const ArticleTitle = ({ title, subtitle }: Props) => (
    <div className="mb-5">
        <h1 className="font-bold text-3xl">{title}</h1>
        <h1 className="mt-1">{subtitle}</h1>
    </div>
)