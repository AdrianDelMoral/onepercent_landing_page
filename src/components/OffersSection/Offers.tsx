import { offers } from "../../data/db";
import OfferItem from "./OfferItem";

export default function Offers() {
    return (
        <section className="mx-auto space-y-16 max-w-6xl">
            <div className="text-center space-y-4">
                <h2 className="text-6xl font-bold">Qué Ofrecemos</h2>
                <p className="text-xl font-extralight">La mejor experiencia de asesoramiento nutricional y entrenamiento.</p>
            </div>
            <div className="container px-28 xl:px-0 mx-auto w-full bg-muted grid grid-cols-1 gap-16 xl:gap-8 xl:grid-cols-3 max-w-6xl">
                {offers.map(offerInfo => (
                    <div
                        key={offerInfo.id}
                        className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg"
                    >
                        <OfferItem
                            offerInfo={offerInfo}
                        />
                    </div>)
                )}
            </div>
        </section>
    )
}
