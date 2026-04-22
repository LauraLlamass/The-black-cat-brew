import type { Coffee } from "../types/coffee";
import { useFavorites } from "../context/FavoritesContext";

interface Props {
  coffee: Coffee;
  favView?: boolean;
}

function CoffeeCard({ coffee, favView = false }: Props) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(coffee.id);
  const apiUrl = "https://the-black-cat-brew.onrender.com";

  const handleFavoriteClick = () => {
    if (favorite) {
      removeFavorite(coffee.id);
    } else {
      addFavorite(coffee);
    }
  };

  return (
    <article className="relative overflow-hidden rounded-2xl bg-secondary p-3 shadow-md shadow-black/10 transition hover:-translate-y-1 hover:shadow-xl">
      {/* Botón favorito arriba derecha */}
      {!favView ? (
        <button
          onClick={handleFavoriteClick}
          aria-label={favorite ? "Quitar de favoritos" : "Añadir a favoritos"}
          className={`absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border transition ${
            favorite
              ? "border-accent bg-accent text-primary"
              : "border-secondary bg-primary text-brand-white hover:border-accent hover:bg-accent hover:text-brand-white"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={favorite ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"
          >
            <path
              strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
        </button>
      ) : (
        <button
          onClick={() => removeFavorite(coffee.id)}
          aria-label="Quitar de favoritos"
          className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-accent bg-accent text-primary transition hover:border-accent hover:bg-primary hover:text-accent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"
          >
            <path
              strokeLinecap="round"  strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
        </button>
      )}

      {/* Imagen Mapa Gato*/}
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
      </div>
    </article>
  );
}

export default CoffeeCard;