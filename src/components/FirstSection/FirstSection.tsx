import { firstSection } from "../../data/db";

export default function FirstSection() {
    return (
        <section className="container mx-auto px-4 md:px-28 md:py-24 lg:py-32 grid items-center gap-8 xl:grid-cols-2" >
            <div className="space-y-10 text-center lg:text-left px-16">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    {firstSection.title}
                </h1>
                <div className="space-y-8 md:text-3xl text-pretty font-light">
                    <p className="mx-auto max-w-[600px]  space-y-8">
                        {firstSection.description}
                    </p>
                    <p className="mx-auto max-w-[600px]  space-y-8">
                        {firstSection.descriptiontwo}
                    </p>
                </div>
                <a
                    href={firstSection.linkto}
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center justify-end rounded-md bg-gray-300 px-8 text-sm font-medium text-gray-900 shadow-sm shadow-white transition-all hover:bg-blue-300 hover:text-gray-900"
                >
                    Más información
                </a>
            </div>
            <img
                src={`/images/${firstSection.imageSection}.jpg`}
                alt="Fitness"
                className="h-max-[365] w-max-[650] mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
            />
        </section >
    )
}
