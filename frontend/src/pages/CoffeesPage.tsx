import { useEffect, useState } from "react";
import { getCoffees } from "../api/client";
import CoffeeCard from "../components/CoffeeCard";
import SectionHeading from "../components/SectionHeading";
import type { Coffee } from "../types/coffee";
import granos from "../assets/fondoGranos.png";

function CoffeesPage() {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getCoffees()
      .then((data) => {
        setCoffees(data);
      })
      .catch(() => {
        setError("No se pudieron cargar los cafés");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section
      id="catalogo"
      className="py-14"
      style={{
        backgroundColor: "#eeefed",
        backgroundImage: `url(${granos})`,
        backgroundRepeat: "repeat",
        backgroundSize: "180px",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 text-[#7a5447]">
        <SectionHeading
          eyebrow="Catálogo"
          title="Descubre nuestros cafés"
          description="Una selección pensada para explorar distintos perfiles de sabor, orígenes y estilos de café."
        />

        {loading ? (
          <p className="text-lg">Cargando cafés...</p>
        ) : error ? (
          <p className="text-lg">{error}</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {coffees.map((coffee) => (
              <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default CoffeesPage;