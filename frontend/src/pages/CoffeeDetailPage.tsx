import { Link, useParams } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";
import { useCoffees } from "../hooks/useCoffees";
import { getCoffeeImageUrl } from "../utils/coffeeImage";

function CoffeeDetailPage() {
  const { coffeeId } = useParams();
  const { coffees, loading, error } = useCoffees();
  const coffee = coffees.find((item) => item.id === coffeeId);

  if (loading) return <p className="mx-auto max-w-7xl px-6 py-12">Cargando café…</p>;

  if (error || !coffee) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h1 className="text-3xl font-black">No encontramos este café</h1>
        <Link to="/catalogo" className="mt-6 inline-block rounded-full bg-primary px-6 py-3 font-semibold text-white">
          Volver al catálogo
        </Link>
      </section>
    );
  }

  const similar = coffees
    .filter(
      (item) =>
        item.id !== coffee.id &&
        (item.intensity === coffee.intensity || item.acidity === coffee.acidity),
    )
    .slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Link to="/catalogo" className="mb-8 inline-flex items-center gap-2 font-semibold hover:underline">
        ← Volver al catálogo
      </Link>

      <article className="grid gap-8 rounded-3xl border border-primary/10 bg-brand-white p-6 shadow-lg shadow-black/5 md:grid-cols-2 md:p-10">
        <div className="flex min-h-72 items-center justify-center rounded-2xl bg-secondary p-8">
          <img src={getCoffeeImageUrl(coffee.image)} alt={coffee.name} className="max-h-80 w-full object-contain" />
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary/60">Origen del café</p>
          <h1 className="mt-2 text-4xl font-black sm:text-5xl">{coffee.name}</h1>
          <p className="mt-4 leading-7">{coffee.description}</p>

          <dl className="mt-7 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-secondary p-4"><dt className="text-xs font-bold uppercase text-primary/60">Intensidad</dt><dd className="mt-1 font-bold">{coffee.intensity}</dd></div>
            <div className="rounded-2xl bg-secondary p-4"><dt className="text-xs font-bold uppercase text-primary/60">Acidez</dt><dd className="mt-1 font-bold">{coffee.acidity}</dd></div>
          </dl>

          <div className="mt-7">
            <h2 className="text-xl font-black">Procedencia</h2>
            <p className="mt-2 leading-7">{coffee.origin || coffee.name}</p>
          </div>

          <div className="mt-7">
            <h2 className="text-xl font-black">Notas de sabor típicas</h2>
            <div className="mt-3 flex flex-wrap gap-2">{(coffee.notes ?? []).map((note) => <span key={note} className="rounded-full bg-accent/30 px-4 py-2 text-sm font-semibold">{note}</span>)}</div>
          </div>

          <div className="mt-7">
            <h2 className="text-xl font-black">Preparación recomendada</h2>
            <ul className="mt-3 flex flex-wrap gap-2">{(coffee.recommendedBrewing ?? []).map((method) => <li key={method} className="rounded-full border border-primary px-4 py-2 text-sm font-semibold">{method}</li>)}</ul>
          </div>

          <p className="mt-8 text-xs leading-5 text-primary/60">
            Perfil orientativo: puede variar según región, variedad, proceso y tueste.
            {coffee.sourceUrl && <> Fuente:{" "}<a href={coffee.sourceUrl} target="_blank" rel="noreferrer" className="font-semibold underline">{coffee.sourceLabel}</a>.</>}
          </p>
        </div>
      </article>

      {similar.length > 0 && (
        <div className="py-14">
          <h2 className="text-3xl font-black">Cafés similares</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{similar.map((item) => <CoffeeCard key={item.id} coffee={item} />)}</div>
        </div>
      )}
    </section>
  );
}

export default CoffeeDetailPage;
