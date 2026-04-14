import type { Coffee } from "../types/coffee";
import { useFavorites } from "../context/FavoritesContext";

interface Props {
  coffee: Coffee;
}

function CoffeeCard({ coffee }: Props) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
 const favorite = isFavorite(coffee.id);

  const handleFavoriteClick = () => {
    if (favorite) {
      removeFavorite(coffee.id);
    } else {
      addFavorite(coffee);
    }
  };
  return (
    <article className="overflow-hidden rounded-[2rem] bg-[#7a5447] p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="overflow-hidden rounded-[1.5rem] bg-[#ffffff]">
        <img
          src={coffee.image}
          alt={coffee.name}
          className="h-48 w-full object-contain"
        />
      </div>

      <div className="p-2 pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#fcedd6]">
          {coffee.origin}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-[#fcedd6]">
          {coffee.name}
        </h3>

        <div className="mt-4 flex flex-wrap gap-4 text-xs font-medium">
          <span className="rounded-full border border-[#daa77a] bg-[#ffffff] px-3 py-1 text-[#7a5447]">
            {coffee.intensity}
          </span>

          <span className="rounded-full border border-[#daa77a] bg-[#ffffff] px-3 py-1 text-[#7a5447]">
            {coffee.acidity}
          </span>
        </div>

        <p className="mt-4 text-sm leading-7 text-[#fcedd6]">
          {coffee.description}
        </p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <a
            href={coffee.amazonUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#7c895e] px-5 py-3 text-sm font-semibold text-[#ffffff] transition hover:bg-[#daa77a] hover:text-[#7a5447]"
          >
            Ver en Amazon
          </a>

           <button
            onClick={handleFavoriteClick}
            className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition hover:bg-[#daa77a] hover:text-[#7a5447] ${
              favorite
                ? "bg-[#ffffff] text-[#7c895e]"
                : "bg-[#7c895e] text-[#ffffff]"
            }`}
          >
            {favorite ? "Añadido" : "Añadir a favoritos"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default CoffeeCard;