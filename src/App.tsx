import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/Footer"
import FirstSection from "./components/FirstSection/FirstSection"
import PlanSection from "./components/Plans/PlanSection"

export const App = () => {

  return (
    <>
      <Hero />

      <FirstSection />

      <section className="mx-auto space-y-16 max-w-6xl">
        <div className="text-center space-y-4">
          <h2 className="text-6xl font-bold">Planes</h2>
          <p className="text-xl font-extralight">La mejor experiencia de asesoramiento nutricional y entrenamiento.</p>
        </div>
        <div className="container px-28 xl:px-0 mx-auto w-full bg-muted grid grid-cols-1 gap-16 xl:gap-8 xl:grid-cols-3 max-w-6xl">
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <a
              rel="noopener noreferrer"
              href="#"
              className="absolute inset-0 z-10" >
              <span className="sr-only">View</span>
            </a>
            <img
              src="/images/training-image.jpg"
              alt="Entrenamiento"
              className="max-w-[300] max-h-[400] [grid-area:stack] object-cover w-full aspect-[3/4]"
            />
            <div className="flex-1 [grid-area:stack] bg-black/60 group-hover:opacity-70 transition-opacity text-white p-10 justify-center flex flex-col gap-2">
              <h2 className="text-4xl font-bold text-center">
                Entrenamiento
              </h2>
            </div>
          </div>
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <a
              rel="noopener noreferrer"
              href="#"
              className="absolute inset-0 z-10"
            >
              <span className="sr-only">View</span>
            </a>
            <img
              src="/images/nutrition-image.jpg"
              alt="Nutrición"
              className="max-w-[300] max-h-[400] [grid-area:stack] object-cover w-full aspect-[3/4]"
            />
            <div className="flex-1 [grid-area:stack] bg-black/60 group-hover:opacity-70 transition-opacity text-white p-10 justify-center flex flex-col gap-2">
              <h2 className="text-4xl font-bold text-center">
                Nutrición
              </h2>
            </div>
          </div>
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <a
              rel="noopener noreferrer"
              href="#"
              className="absolute inset-0 z-10"
            >
              <span className="sr-only">View</span>
            </a>
            <img
              src="/images/training-personalization.jpg"
              alt="Personalización"
              className="max-w-[300] max-h-[400] [grid-area:stack] object-cover w-full aspect-[3/4]"
            />
            <div className="flex-1 [grid-area:stack] bg-black/60 group-hover:opacity-70 transition-opacity text-white p-10 justify-center flex flex-col gap-2">
              <h2 className="text-4xl font-bold text-center">
                Personalización
              </h2>
            </div>
          </div>
        </div>
      </section>

      <PlanSection />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('/images/last-section.jpg')] bg-cover bg-center">
        <div className="container mx-auto grid items-start gap-20 lg:grid-cols-1 max-w-5xl space-y-4 text-center lg:text-left uppercase">
          <p className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Unete al <br /> Club.</p>
          <p className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Empieza <br /> hoy.</p>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default App