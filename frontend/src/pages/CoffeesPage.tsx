import { useMemo } from "react";
import CoffeeCard from "../components/CoffeeCard";
import SectionHeading from "../components/SectionHeading";
import granos from "../assets/fondoGranos.png";
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
          <div className="mt-10 rounded-[1.5rem] bg-secondary p-6 text-center text-primary shadow-md">
            Cargando cafés...
          </div>
        ) : error ? (
          <div className="mt-10 rounded-[1.5rem] bg-accent/10 p-6 text-center text-accent">
            {error}
          </div>
        ) : (
          <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
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