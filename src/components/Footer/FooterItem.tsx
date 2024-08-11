import { FooterInfo } from "../../types"

type FooterProps = {
    item: FooterInfo
}

export default function FooterItem({ item }: FooterProps) {
    return (
        <div className="flex flex-col items-center lg:items-start gap-4 md:px-0">
            <h2 className="text-3xl font-bold uppercase text-start w-full">{item.title}</h2>
            <a
                href={item.link}
                rel="noopener noreferrer"
                className="text-xl hover:underline hover:text-blue-300 transition-all text-start w-full"
            >
                {item.text}
            </a>
        </div>
    )
}