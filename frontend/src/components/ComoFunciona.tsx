function ComoFunciona() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-10">
                    <h2 className="text-3xl font-black text-primary md:text-4xl ">
                        Cómo funciona
                    </h2>
                    
                </div>

                <div className="grid gap-6 md:grid-cols-3">

                    {/* Paso 1 */}
                    <article className="rounded-[1rem] border border-primary bg-brand-white p-6 transition duration-300 ease-out hover:scale-105">

                        <span className="text-4xl font-black text-accent">01</span>
                        <h3 className="mt-4 text-xl font-bold text-primary">
                            Explora cafés
                        </h3>
                        <p className="mt-3 text-sm text-primary">
                            Filtra por origen, intensidad o acidez.
                        </p>
                    </article>

                    {/* Paso 2 */}
                    <article className="rounded-[1rem] border border-primary bg-brand-white p-6 transition duration-300 ease-out hover:scale-105">

                        <span className="text-4xl font-black text-accent">02</span>
                        <h3 className="mt-4 text-xl font-bold text-primary">
                            Compara perfiles
                        </h3>
                        <p className="mt-3 text-sm text-primary">
                            Analiza y encuentra tu favorito.
                        </p>
                    </article>

                    {/* Paso 3 */}
                    <article className="rounded-[1rem] border border-primary bg-brand-white p-6 transition duration-300 ease-out hover:scale-105">
                        <span className="text-4xl font-black text-accent">03</span>
                        <h3 className="mt-4 text-xl font-bold text-primary">
                            Guarda favoritos
                        </h3>
                        <p className="mt-3 text-sm text-primary">
                            Crea tu colección personal y vuelve a tus cafés cuando quieras.
                        </p>
                    </article>

                </div>
            </div>
        </section>
    );
}

export default ComoFunciona;