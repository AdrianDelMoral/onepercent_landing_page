import { formatCurrency } from "./helpers"

export const App = () => {
  const priceone=29.90
  const pricetwo=49.90
  const pricethree=69.90

  return (
    <>
      <header className="relative flex flex-col items-center justify-center h-screen mb-24 overflow-hidden">
        <div className="z-30 container mx-auto grid grid-rows-2 items-center justify-center gap-48">
          <h1 className="font-bold tracking-tighter text-4xl sm:text-5xl md:text-9xl text-center">1% TRAINING CLUB</h1>
          <h1 className="font-bold tracking-tighter text-4xl sm:text-3xl md:text-4xl text-end">By Athletes, For Athletes.</h1>
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="/videos/hero-section.mp4"
            type="video/mp4"
          />
        </video>

      </header>

      <section className="container mx-auto md:py-24 lg:py-32 grid items-center gap-8 lg:grid-cols-2">
        <div className="space-y-10 text-center lg:text-left px-16">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            ¿QUIERES SER PARTE DEL 1%?
          </h1>
          <div className="space-y-8 md:text-3xl text-pretty font-light">
            <p className="mx-auto max-w-[600px]  space-y-8">
              Onepercent Training Club nace con la idea de ser parte del 1% juntando varias disciplinas, con el deporte como contexto.
            </p>
            <p className="mx-auto max-w-[600px]  space-y-8">
              Ser parte del 1% en un  conjunto, fuerza, resistencia, estética, salud, mentalidad y hábitos.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex h-10 items-center justify-end rounded-md bg-gray-300 px-8 text-sm font-medium text-gray-900 shadow-sm shadow-white transition-all hover:bg-blue-300 hover:text-gray-900"
          >
            Más información
          </a>
        </div>
        <img
          src="/images/first-section.jpg"
          width={650}
          height={365}
          alt="Fitness"
          className="h-max-[365] w-max-[650] mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
        />
      </section>

      <section className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-6xl font-bold">Planes</h2>
          <p className="text-xl font-extralight">La mejor experiencia de asesoramiento nutricional y entrenamiento.</p>
        </div>
        <div className="container mx-auto w-full bg-muted grid grid-cols-1 gap-8 md:grid-cols-3 max-w-6xl">
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <a href="#" className="absolute inset-0 z-10" >
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
            <a href="#" className="absolute inset-0 z-10" >
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

      <section className="container flex flex-col justify-center items-center mx-auto w-full py-12 md:py-24 lg:py-32">
        <h2 className="text-center text-6xl font-bold mb-16">Planes</h2>
        <div className="container grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl">
          <div className="bg-gray-200 text-gray-900 rounded-lg p-8 space-y-8 flex flex-col justify-around px-10 my-8">
            <h2 className="text-3xl font-extrabold uppercase text-center">Basic</h2>
            <ul className="list-disc uppercase font-semibold">
              <li>Dieta o entrenamiento</li>
              <li>Revisión mensual</li>
              <li>Personalización</li>
              <li>Dudas</li>
            </ul>
            <div className="mx-8 bg-black rounded-xl text-xl font-bold text-center text-gray-200 py-3 cursor-pointer hover:bg-blue-300 hover:text-gray-900 transition-all">{formatCurrency(priceone)}/mes</div>
          </div>
          <div className="bg-gray-200 text-gray-900 rounded-lg p-8 space-y-8 flex flex-col justify-around px-10">
            <h2 className="text-3xl font-extrabold uppercase text-center">Intermediate</h2>
            <ul className="list-disc uppercase font-semibold">
              <li>Plan nutricional</li>
              <li>Entrenamiento</li>
              <li>Revisión cada 2 semanas</li>
              <li>Personalización</li>
              <li>Dudas</li>
            </ul>
            <div className="mx-8 bg-black rounded-xl text-xl font-bold text-center text-gray-200 py-3 cursor-pointer hover:bg-blue-300 hover:text-gray-900 transition-all">{formatCurrency(pricetwo)}/mes</div>
          </div>
          <div className="bg-gray-200 text-gray-900 rounded-lg p-8 space-y-8 flex flex-col justify-around px-10 my-8">
            <h2 className="text-3xl font-extrabold uppercase text-center">1%</h2>
            <ul className="list-disc uppercase font-semibold">
              <li>Plan nutricional</li>
              <li>Entrenamiento</li>
              <li>Revisión semanal</li>
              <li>Personalización</li>
              <li>Dudas 24/7</li>
              <li>Acceso al 1% training club</li>
            </ul>
            <div className="mx-8 bg-black rounded-xl text-xl font-bold text-center text-gray-200 py-3 cursor-pointer hover:bg-blue-300 hover:text-gray-900 transition-all">{formatCurrency(pricethree)}/mes</div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('/images/last-section.jpg')] bg-cover bg-center">
        <div className="container mx-auto grid items-start gap-20 lg:grid-cols-1 max-w-5xl space-y-4 text-center lg:text-left uppercase">
          <p className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Unete al <br /> Club.</p>
          <p className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Empieza <br /> hoy.</p>
        </div>
      </section>

      <footer className="mx-auto w-full bg-muted py-12 md:py-16 lg:py-20 max-w-6xl container grid grid-cols-3">
        {/* <h2 className="col-span-full text-center text-3xl font-bold">Footer</h2> */}
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-3xl font-bold uppercase">Correo</h2>
          <a href="mailto:onepercentrainingclub@gmail.com"
            className="text-xl hover:underline hover:text-blue-300 transition-all">
            onepercentrainingclub@gmail.com
          </a>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-3xl font-bold uppercase">Telegram</h2>
          <a
            href="t.me/onepercentclvb"
            className="text-xl  hover:underline hover:text-blue-300 transition-all"
          >
            t.me/onepercentclvb
          </a>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-3xl font-bold uppercase">Formulario</h2>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdB2XrkjsaPC3Oen-c1sqx-ePUZSQh7vlCQYV__3NChSq199w/viewform"
            target="blank"
            className="text-xl hover:underline hover:text-blue-300 transition-all">
            Clica aquí para rellenar el formulario.
          </a>
        </div>
      </footer>
    </>
  )
}

export default App
