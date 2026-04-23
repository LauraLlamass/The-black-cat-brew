import enProceso from "../assets/enProceso.png";

function Hero() {
  return (
    <section className="pt-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <div className="pb-10 md:pb-16">

          <h1 className="max-w-md text-6xl font-black leading-tight text-primary md:text-6xl">
            The Black Cat Brew
          </h1>

          <p className="mt-5 max-w-md text-base leading-8 text-primary bg-brand-white p-4">
            Descubre cafés únicos, compara perfiles de sabor y guarda tus favoritos en un solo lugar.          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[1.5rem] ">
            <img
              src={enProceso}
              alt="Imagen principal de The Black Cat Brew"
              className="h-[360px] w-full object-cover"
            />
          </div>
        </div>
      </div>

    </section>
  );
}


export default Hero;