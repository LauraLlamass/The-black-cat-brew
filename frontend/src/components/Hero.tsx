import { Link } from "react-router-dom";
import enProceso from "../assets/enProceso.png";

function Hero() {
  return (
    <section className="bg-secondary pt-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <div className="pb-10 md:pb-16">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">
            Café de especialidad
          </p>

          <h1 className="max-w-md text-5xl font-black leading-tight text-primary md:text-6xl">
            The Black Cat Brew
          </h1>

          <p className="mt-5 max-w-md text-base leading-8 text-primary/80">
            Explora cafés con personalidad, descubre perfiles de sabor y guarda
            tus favoritos en una colección visual con estilo propio.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/catalogo"
              className="rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-secondary hover:text-accent"
            >
              Ver cafés
            </Link>

            <Link
              to="/favorites"
              className="rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-secondary hover:text-accent"
            >
              Ir a favoritos
            </Link>
          </div>
        </div>

        <div className="relative">
          {/* Glow decorativo */}
          <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-secondary blur-2xl" />

          <div className="overflow-hidden rounded-[2.5rem] bg-secondary shadow-xl shadow-black/10">
            <img
              src={enProceso}
              alt="Imagen principal de The Black Cat Brew"
              className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 h-12 rounded-t-[2rem] bg-secondary" />
    </section>
  );
}

export default Hero;