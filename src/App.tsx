import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/Footer"
import FirstSection from "./components/FirstSection/FirstSection"
import PlanSection from "./components/Plans/PlanSection"
import Offers from "./components/OffersSection/Offers"

export const App = () => {

  return (
    <>
      <Hero />

      <FirstSection />
      
      <Offers/>

      <PlanSection />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('/images/last-section.jpg')] bg-cover bg-center">
        <div className="container grid gap-20 mx-auto max-w-xs md:max-w-xl lg:max-w-4xl 2xl:max-w-6xl w-full uppercase">
          <p className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Unete al <br /> Club.</p>
          <p className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Empieza <br /> hoy.</p>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default App