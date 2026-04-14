import enProceso from "../assets/enProceso.png";
import granos from "../assets/fondoGranos.png";

function AboutPage() {
    return (
        <section
            className="py-14"
            style={{
                backgroundImage: `url(${granos})`,
                backgroundRepeat: "repeat",
                backgroundSize: "180px",
                backgroundPosition: "center",
            }}
        >
            <div className="mx-auto max-w-7xl px-6 text-[#fcedd6]">
                <div className="mb-10 rounded-[2rem] bg-[#fcedd6] p-8 shadow-sm">

                    <h1 className="text-4xl font-bold md:text-5xl text-[#7a5447]">
                        Sobre The Black Cat Brew
                    </h1>

                    <p className="mt-4 max-w-2xl text-sm leading-8 text-[#7a5447]">
                        The Black Cat Brew es una aplicación inspirada en el mundo del café.
                        El objetivo del proyecto es ofrecer una experiencia visual donde el usuario pueda
                        descubrir distintos cafés, conocer su origen y guardar sus favoritos.
                    </p>

                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    <article className="rounded-[2rem] bg-[#7a5447] p-8 shadow-sm">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#fcedd6]">
                            Nuestra idea
                        </p>



                        <h2 className="text-3xl font-bold leading-tight">
                            Dulces momentos con tus cafés favoritos
                        </h2>

                        <p className="mt-5 text-sm leading-8">
                            El proyecto nace como una guía visual para descubrir cafés,
                            explorar perfiles de sabor y crear una pequeña colección personal
                            de favoritos. La intención no es simular una tienda real, sino una
                            experiencia informativa con identidad propia.
                        </p>

                        <p className="mt-4 text-sm leading-8">
                            A nivel visual, se ha trabajado con ilustraciones, colores suaves
                            y una composición inspirada en branding de cafeterías y productos
                            creativos.
                        </p>
                    </article>

                    <div className="overflow-hidden rounded-[2rem] bg-[#7a5447] p-4 shadow-sm">
                        <img
                            src={enProceso}
                            alt="Ilustración de The Black Cat Brew"
                            className="h-full min-h-[320px] w-full rounded-[1.5rem] object-cover"
                        />
                    </div>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                    <article className="rounded-[1.5rem] bg-[#7a5447] p-6">
                        <h3 className="text-lg font-bold">Identidad visual</h3>
                        <p className="mt-3 text-sm leading-7">
                            El proyecto utiliza ilustraciones propias y una paleta cálida para dar una
                            personalidad propia a la aplicación.
                        </p>
                    </article>

                    <article className="rounded-[1.5rem] bg-[#7a5447] p-6">
                        <h3 className="text-lg font-bold">Catálogo informativo</h3>
                        <p className="mt-3 text-sm leading-7">
                            Los cafés se presentan como fichas visuales con origen,
                            intensidad, acidez y enlace externo.
                        </p>
                    </article>

                    <article className="rounded-[1.5rem] bg-[#7a5447] p-6">
                        <h3 className="text-lg font-bold">Favoritos personales</h3>
                        <p className="mt-3 text-sm leading-7">
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