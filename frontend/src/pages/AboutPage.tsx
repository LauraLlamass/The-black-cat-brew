import enProceso from "../assets/enProceso.png";
import granos from "../assets/fondoGranos.png";

function AboutPage() {
  return (
    <section
      className="bg-secondary py-14"
      style={{
        backgroundImage: `url(${granos})`,
        backgroundRepeat: "repeat",
        backgroundSize: "180px",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 text-primary">
        <div className="mb-10 rounded-[2rem] border border-secondary/40 bg-secondary p-8 shadow-lg shadow-black/10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Nuestra esencia
          </p>

          <h1 className="text-4xl font-semibold text-primary md:text-5xl">
            Sobre The Black Cat Brew
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-8 text-primary">
            The Black Cat Brew es una aplicación inspirada en el mundo del café.
            El objetivo del proyecto es ofrecer una experiencia visual donde el
            usuario pueda descubrir distintos cafés, conocer su origen y guardar
            sus favoritos.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-secondary/30 bg-secondary p-8 shadow-lg shadow-black/10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Nuestra idea
            </p>

            <h2 className="text-3xl font-semibold leading-tight text-primary">
              Dulces momentos con tus cafés favoritos
            </h2>

            <p className="mt-5 text-sm leading-8 text-primary">
              El proyecto nace como una guía visual para descubrir cafés,
              explorar perfiles de sabor y crear una pequeña colección personal
              de favoritos. La intención no es simular una tienda real, sino una
              experiencia informativa con identidad propia.
            </p>

            <p className="mt-4 text-sm leading-8 text-primary">
              A nivel visual, se ha trabajado con ilustraciones, colores suaves
              y una composición inspirada en branding de cafeterías y productos
              creativos.
            </p>
          </article>

          <div className="overflow-hidden rounded-[2rem] border border-secondary/30 bg-secondary p-4 shadow-lg shadow-black/10">
            <img
              src={enProceso}
              alt="Ilustración de The Black Cat Brew"
              className="h-full min-h-[320px] w-full rounded-[1.5rem] object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <article className="rounded-[1.5rem] border border-secondary/30 bg-secondary p-6 shadow-md shadow-black/5">
            <h3 className="text-lg font-semibold text-accent">
              Identidad visual
            </h3>
            <p className="mt-3 text-sm leading-7 text-primary">
              El proyecto utiliza ilustraciones propias y una paleta cálida para
              dar una personalidad propia a la aplicación.
            </p>
          </article>

          <article className="rounded-[1.5rem] border border-secondary/30 bg-secondary p-6 shadow-md shadow-black/5">
            <h3 className="text-lg font-semibold text-accent">
              Catálogo informativo
            </h3>
            <p className="mt-3 text-sm leading-7 text-primary">
              Los cafés se presentan como fichas visuales con origen,
              intensidad, acidez y enlace externo.
            </p>
          </article>

          <article className="rounded-[1.5rem] border border-secondary/30 bg-secondary p-6 shadow-md shadow-black/5">
            <h3 className="text-lg font-semibold text-accent">
              Favoritos personales
            </h3>
            <p className="mt-3 text-sm leading-7 text-primary">
              El usuario puede guardar cafés favoritos para crear una selección
              propia dentro de la aplicación.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;