import { useFavorites } from "../context/FavoritesContext";
import SectionHeading from "../components/SectionHeading";

function FavoritesPage() {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <SectionHeading
        eyebrow="Tu selección"
        title="Cafés favoritos"
        description="Aquí puedes consultar y gestionar los cafés que has guardado."
      />

      {favorites.length === 0 ? (
        <div className="rounded-[2rem] border border-[#daa77a] bg-[#fcedd6] p-10 text-center">
          <p className="text-lg font-medium text-[#7a5447]">
            Todavía no has añadido favoritos.
          </p>
          <p className="mt-2 text-sm text-[#7a5447]">
            Explora el catálogo y guarda los cafés que más te llamen la atención.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {favorites.map((coffee) => (
            <article
              key={coffee.id}
              className="rounded-[2rem] border border-[#daa77a] bg-[#fcedd6] p-6 shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7c895e]">
                {coffee.origin}
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[#7a5447]">
                {coffee.name}
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#7a5447]">
                {coffee.description}
              </p>

              <button
                onClick={() => removeFavorite(coffee.id)}
                className="mt-6 rounded-full bg-[#7a5447] px-5 py-3 text-sm font-semibold text-[#ffffff] transition hover:bg-[#daa77a] hover:text-[#7a5447]"
              >
                Quitar de favoritos
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default FavoritesPage;