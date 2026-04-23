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
    <article className="relative overflow-hidden rounded-2xl bg-secondary p-2.5 sm:p-3 shadow-md shadow-black/10 transition hover:-translate-y-1 hover:shadow-xl">
      {!favView ? (
        <button
          onClick={handleFavoriteClick}
          aria-label={favorite ? "Quitar de favoritos" : "Añadir a favoritos"}
          className={`absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border transition ${favorite
              ? "border-accent bg-accent text-primary"
              : "border-secondary bg-primary text-brand-white hover:border-accent hover:bg-accent hover:text-brand-white"
            }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={favorite ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
        </button>
      ) : (
        <button
          onClick={() => removeFavorite(coffee.id)}
          aria-label="Quitar de favoritos"
          className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-accent bg-accent text-primary transition hover:bg-primary hover:text-accent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
        </button>
      )}

      <div className="overflow-hidden rounded-[1.5rem] border border-primary/10 bg-brand-white">
        <div className="bg-primary px-4 py-3 text-center">
          <h3 className="text-base font-black tracking-[0.15em] text-brand-white sm:text-lg">
            {coffee.name.toUpperCase()}
          </h3>
        </div>

        <div className="bg-brand-white p-4">
          <img
            src={`${apiUrl}${coffee.image}`}
            alt={coffee.name}
className="h-40 w-full object-contain transition duration-300 hover:scale-105 sm:h-48"          />
        </div>

        <div className="px-5 py-4 text-center">
          <p className="text-sm leading-6 text-primary">
            {coffee.description !== "Desconocido"
              ? coffee.description
              : "Perfil equilibrado con carácter propio."}
          </p>
        </div>

        <div className="border-t border-primary/15" />

        <div className="grid grid-cols-2 gap-x-3 gap-y-4 px-4 py-4 sm:gap-x-4 sm:px-5">
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-primary/50">
              Intensidad
            </p>
            <p className="mt-1 text-sm font-semibold text-primary sm:text-base">
              {coffee.intensity}
            </p>
          </div>

          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-primary/50">
              Acidez
            </p>
            <p className="mt-1 text-sm font-semibold text-primary sm:text-base">
              {coffee.acidity}
            </p>
          </div>

        </div>
      </div>
    </article>
  );
}

export default CoffeeCard;