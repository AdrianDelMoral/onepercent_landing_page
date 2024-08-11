import { Offers } from "../../types"

type OfferProps = {
    offerInfo: Offers
}

export default function OfferItem({ offerInfo }: OfferProps) {
    return (
        <>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href={offerInfo.linkto}
                className="absolute inset-0 z-10" >
                <span className="sr-only">View</span>
            </a>
            <img
                src={`/images/${offerInfo.offerImage}.jpg`}
                alt="Entrenamiento"
                className="max-w-[300] max-h-[400] [grid-area:stack] object-cover w-full aspect-[3/4]"
            />
            <div className="flex-1 [grid-area:stack] bg-black/60 group-hover:opacity-70 transition-opacity text-white p-10 justify-center flex flex-col gap-2">
                <h2 className="text-4xl font-bold text-center">
                {offerInfo.offerTitle}
                </h2>
            </div>
        </>
    )
}
