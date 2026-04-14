import { useFavorites } from "../context/FavoritesContext";
import SectionHeading from "../components/SectionHeading";
import granos from "../assets/fondoGranos.png";

function FavoritesPage() {
  const { favorites, removeFavorite } = useFavorites();

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
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Tus cafés favoritos"
        />

        {favorites.length === 0 ? (
          <div className="rounded-[2rem] border border-secondary/40 bg-secondary p-10 text-center shadow-lg shadow-black/10">
            <p className="text-lg font-medium text-primary">
              Todavía no has añadido favoritos.
            </p>
            <p className="mt-2 text-sm leading-7 text-primary">
              Explora el catálogo y guarda los cafés que más te llamen la atención.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {favorites.map((coffee) => (
              <article
                key={coffee.id}
                className="rounded-[2rem] border border-secondary/30 bg-secondary p-6 shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {coffee.origin}
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-primary">
                  {coffee.name}
                </h2>

                <p className="mt-4 text-sm leading-7 text-primary">
                  {coffee.description}
                </p>

                <button
                  onClick={() => removeFavorite(coffee.id)}
                  className="mt-6 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-secondary"
                >
                  Quitar de favoritos
                </button>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default FavoritesPage;