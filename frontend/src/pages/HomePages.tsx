import Hero from "../components/Hero";
import InfoStrip from "../components/InfoStrip";

function HomePage() {
  return (
    <>
      <Hero />
      <InfoStrip />

      <section className="bg-[#eeefed] py-16">
        <div className="mx-auto max-w-7xl px-6 text-[#7a5447]">
          <div className="rounded-[2rem] bg-[#fcedd6] p-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7c895e]">
              Welcome
            </p>

            <h2 className="text-4xl font-bold">
              A playful coffee world with cozy visuals and favorite brews
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-8">
              The Black Cat Brew es una experiencia visual inspirada en cafés,
              dibujos e ilustraciones suaves. Explora nuestros cafés en la
              sección de catálogo y guarda tus preferidos para revisitarlos
              cuando quieras.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;