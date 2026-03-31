import type { Coffee } from "../types/coffee";
import { useFavorites } from "../context/FavoritesContext";
import enProceso from "../assets/enProceso.png";

interface Props {
  coffee: Coffee;
}

function CoffeeCard({ coffee }: Props) {
  const { addFavorite } = useFavorites();

  return (
    <article className="overflow-hidden rounded-[2rem] bg-[#fcedd6] p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="overflow-hidden rounded-[1.5rem] bg-[#eeefed]">
        <img
          src={enProceso}
          alt={coffee.name}
          className="h-64 w-full object-cover"
        />
      </div>

      <div className="p-2 pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7c895e]">
          {coffee.origin}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-[#7a5447]">
          {coffee.name}
        </h3>

        <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium">
          <span className="rounded-full border border-[#daa77a] bg-[#ffffff] px-3 py-1 text-[#7a5447]">
            {coffee.intensity}
          </span>
          <span className="rounded-full border border-[#daa77a] bg-[#ffffff] px-3 py-1 text-[#7a5447]">
            {coffee.acidity}
          </span>
        </div>

        <p className="mt-4 text-sm leading-7 text-[#7a5447]">
          {coffee.description}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={coffee.amazonUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#7a5447] px-5 py-3 text-sm font-semibold text-[#ffffff] transition hover:bg-[#daa77a] hover:text-[#7a5447]"
          >
            Ver en Amazon
          </a>

          <button
            onClick={() => addFavorite(coffee)}
            className="inline-flex items-center justify-center rounded-full bg-[#7c895e] px-5 py-3 text-sm font-semibold text-[#ffffff] transition hover:bg-[#daa77a] hover:text-[#7a5447]"
          >
            Añadir a favoritos
          </button>
        </div>
      </div>
    </article>
  );
}

export default CoffeeCard;