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
    <section
      id="catalogo"
      className="py-14"
      style={{
        backgroundImage: `url(${granos})`,
        backgroundRepeat: "repeat",
        backgroundSize: "180px",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 text-[#7a5447]">
        <SectionHeading
          title="Descubre nuestros cafés"
          description="Una selección pensada para explorar distintos perfiles de sabor, orígenes y estilos de café."
        />

        {loading ? (
          <p className="text-lg">Cargando cafés...</p>
        ) : error ? (
          <p className="text-lg">{error}</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
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