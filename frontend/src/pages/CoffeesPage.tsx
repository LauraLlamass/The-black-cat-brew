import { useMemo } from "react";
import CoffeeCard from "../components/CoffeeCard";
import SectionHeading from "../components/SectionHeading";
import { useCoffees } from "../hooks/useCoffees";

function CoffeesPage() {
  const { coffees, loading, error } = useCoffees();

  const sortedCoffees = useMemo(() => {
    return [...coffees].sort((a, b) => a.name.localeCompare(b.name));
  }, [coffees]);

  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 text-primary">
        <SectionHeading
                  title="Descubre nuestros cafés"
          description="Una selección pensada para explorar distintos perfiles de sabor, orígenes y estilos de café."
        />

        {loading ? (
          <div className="mt-10 rounded-xl bg-secondary p-6 text-center text-primary shadow-md">
            Cargando cafés...
          </div>
        ) : error ? (
          <div className="mt-10 rounded-xl bg-accent/10 p-6 text-center text-accent">
            {error}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedCoffees.map((coffee) => (
              <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default CoffeesPage;