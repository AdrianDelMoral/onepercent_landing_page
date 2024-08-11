import { heroItems } from "../../data/db";

export default function Hero() {
    return (
        <header className="relative flex flex-col items-center justify-center h-screen mb-24 overflow-hidden">
            <div className="z-30 container mx-auto grid grid-rows-2 items-center justify-center gap-4 md:gap-20 xl:gap-48 px-8 lg:px-20 xl:px-0">
                <h1 className="font-bold tracking-tighter text-6xl sm:text-8xl lg:text-9xl text-center">{heroItems.title}</h1>
                <h2 className="w-full mx-auto px-20 md:px-0 lg:max-w-5xl font-bold tracking-tighter text-2xl sm:text-2xl md:text-2xl text-end">{heroItems.subtittle}</h2>
            </div>
            <video
                autoPlay
                loop
                muted
                className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
            >
                <source
                    src={heroItems.videolink}
                    type="video/mp4"
                />
            </video>
        </header>
    )
}
