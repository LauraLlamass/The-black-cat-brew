import { useFavorites } from "../context/FavoritesContext";
import SectionHeading from "../components/SectionHeading";
import granos from "../assets/fondoGranos.png";
import CoffeeCard from "../components/CoffeeCard";

function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <section>
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
               <CoffeeCard key={coffee.id} coffee={coffee} favView={true}/>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default FavoritesPage;