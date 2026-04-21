import type { Coffee } from "../types/coffee";
import { useFavorites } from "../context/FavoritesContext";

interface Props {
  coffee: Coffee;
  favView?: boolean;
}

function CoffeeCard({ coffee, favView = false }: Props) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(coffee.id);
const apiUrl = 'https://the-black-cat-brew.onrender.com';
  const handleFavoriteClick = () => {
    if (favorite) {
      removeFavorite(coffee.id);
    } else {
      addFavorite(coffee);
    }
  };

  return (
    <article className="overflow-hidden rounded-2xl bg-secondary p-3 shadow-md shadow-black/10 transition hover:-translate-y-1 hover:shadow-xl">
      {/* Imagen */}
      <div className="overflow-hidden rounded-xl bg-primary">
        <img
          src={`${apiUrl}${coffee.image}`}
          alt={coffee.name}
          className="h-48 w-full object-contain p-4 transition duration-300 hover:scale-105"
        />
      </div>

      {/* Contenido */}
      <div className="p-3 pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {coffee.origin}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-primary">
          {coffee.name}
        </h3>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-3 text-xs font-medium">
          <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-primary">
            {coffee.intensity}
          </span>

          <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-primary">
            {coffee.acidity}
          </span>
        </div>

        <p className="mt-4 text-sm leading-7 text-primary">
          {coffee.description}
        </p>

        {/* Botones */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">

          <a
            href={coffee.amazonUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-secondary"
          >
            Ver en Amazon
          </a>

          {!favView
            ? <button
              onClick={handleFavoriteClick}
              className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${favorite
                ? "bg-primary text-secondary hover:bg-accent"
                : "bg-accent text-primary hover:text-secondary hover:bg-primary"}`}
            >
              {favorite ? "Añadido" : "Añadir a favoritos"}
            </button>
            :
            <button
              onClick={() => removeFavorite(coffee.id)}
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-secondary"
            >
              Quitar 
            </button>
          }


        </div>
      </div>
    </article>
  );
}

export default CoffeeCard;