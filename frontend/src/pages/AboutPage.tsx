import enProceso from "../assets/enProceso.png";

function AboutPage() {
  return (
    <section className="pb-8 pt-4">
      <div className="mx-auto max-w-7xl px-6 text-primary">
        <div className="mb-6 rounded-2xl border border-secondary/40 bg-secondary px-8 py-5 shadow-lg shadow-black/10 md:px-10 md:py-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Nuestra esencia
          </p>

          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Sobre The Black Cat Brew
          </h1>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-primary/80">
            The Black Cat Brew es una aplicación inspirada en el mundo del café.
            El objetivo del proyecto es ofrecer una experiencia visual donde el
            usuario pueda descubrir distintos cafés, conocer su origen y guardar
            sus favoritos.
          </p>
        </div>

        <div className="flex flex-col gap-5 rounded-2xl border border-secondary/30 bg-secondary p-10 shadow-lg shadow-black/10 lg:flex-row lg:items-center">
          <div className="flex-1">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Nuestra idea
            </p>

            <h2 className="mb-3 text-3xl font-semibold leading-tight md:text-4xl">
              Dulces momentos con tus cafés favoritos
            </h2>

            <p className="text-lg leading-8 text-primary/80">
              El proyecto nace como una guía visual para descubrir cafés,
              explorar perfiles de sabor y crear una pequeña colección personal
              de favoritos. La intención no es simular una tienda real, sino una
              experiencia informativa con identidad propia.
            </p>

            <p className="mt-5 text-lg leading-8 text-primary/80">
              A nivel visual, se ha trabajado con ilustraciones, colores suaves
              y una composición inspirada en branding de cafeterías y productos
              creativos.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl flex-1">
            <img
              src={enProceso}
              alt="Ilustración de The Black Cat Brew"
              className="min-h-[320px] w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <article className="rounded-xl border border-secondary/30 bg-secondary p-6 shadow-md shadow-black/5">
            <h3 className="text-lg font-semibold text-accent">
              Identidad visual
            </h3>
            <p className="mt-3 text-[15px] leading-7 text-primary/80">
              El proyecto utiliza ilustraciones propias y una paleta cálida para
              dar una personalidad visual cercana, cuidada y coherente dentro de
              la aplicación.
            </p>
          </article>

          <article className="rounded-xl border border-secondary/30 bg-secondary p-6 shadow-md shadow-black/5">
            <h3 className="text-lg font-semibold text-accent">
              Catálogo informativo
            </h3>
            <p className="mt-3 text-[15px] leading-7 text-primary/80">
              Los cafés se presentan como fichas visuales con información sobre
              origen, intensidad, acidez y acceso a enlaces externos para seguir
              explorando.
            </p>
          </article>

          <article className="rounded-xl border border-secondary/30 bg-secondary p-6 shadow-md shadow-black/5">
            <h3 className="text-lg font-semibold text-accent">
              Favoritos personales
            </h3>
            <p className="mt-3 text-[15px] leading-7 text-primary/80">
              El usuario puede guardar sus cafés favoritos para crear una
              selección personal y disfrutar de una experiencia más cercana
              dentro de la aplicación.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;