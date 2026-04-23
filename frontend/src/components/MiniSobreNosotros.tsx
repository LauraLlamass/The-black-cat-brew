
function MiniSobreNosotros() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-8 rounded-[1rem] border border-primary bg-brand-white p-8  md:grid-cols-2 md:items-center transition duration-300 ease-out hover:scale-105">
                    <div>
                        <p className="text-sm font-semibold tracking-wide text-accent">
                            SOBRE NOSOTROS
                        </p>

                        <h2 className="mt-3 text-3xl font-black text-primary md:text-4xl">
                            The Black Cat Brew
                        </h2>

                        <p className="mt-5 max-w-xl text-base leading-8 text-primary">
                            Creamos este espacio para quienes estan empezando a descubrir
                            cafés con carácter. Queremos que explorar orígenes, perfiles de sabor y
                            favoritos sea una experiencia simple, visual y con personalidad.
                        </p>

                    </div>

                    <div className="rounded-[1.5rem] bg-secondary p-6">
                        <p className="text-lg leading-8 text-primary">
                            “Una pequeña guía para amantes del café que quieren descubrir,
                            comparar y guardar sus cafés favoritos en un solo lugar.”
                        </p>

                        <span className="mt-4 block text-right text-sm font-semibold text-primary/70">
                            — The Black Cat Brew
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default MiniSobreNosotros;