import { useMemo, useState } from "react";
import CoffeeCard from "../components/CoffeeCard";
import SectionHeading from "../components/SectionHeading";
import { useCoffees } from "../hooks/useCoffees";

function CoffeesPage() {
  const { coffees, loading, error } = useCoffees();

  const [selectedOrigin, setSelectedOrigin] = useState("Todos");
  const [selectedIntensity, setSelectedIntensity] = useState("Todos");
  const [selectedAcidity, setSelectedAcidity] = useState("Todos");
  const [openFilter, setOpenFilter] = useState<string | null>(null);

  const sortedCoffees = useMemo(() => {
    return [...coffees].sort((a, b) => a.name.localeCompare(b.name));
  }, [coffees]);

  const origins = useMemo(() => {
    return ["Todos", ...new Set(coffees.map((coffee) => coffee.name))];
  }, [coffees]);

  const intensities = useMemo(() => {
    return ["Todos", ...new Set(coffees.map((coffee) => coffee.intensity))];
  }, [coffees]);

  const acidities = useMemo(() => {
    return ["Todos", ...new Set(coffees.map((coffee) => coffee.acidity))];
  }, [coffees]);

  const filteredCoffees = useMemo(() => {
    return sortedCoffees.filter((coffee) => {
      const matchesOrigin =
        selectedOrigin === "Todos" || coffee.name === selectedOrigin;

      const matchesIntensity =
        selectedIntensity === "Todos" || coffee.intensity === selectedIntensity;

      const matchesAcidity =
        selectedAcidity === "Todos" || coffee.acidity === selectedAcidity;

      return matchesOrigin && matchesIntensity && matchesAcidity;
    });
  }, [sortedCoffees, selectedOrigin, selectedIntensity, selectedAcidity]);

  const toggleFilter = (filterName: string) => {
    setOpenFilter((prev) => (prev === filterName ? null : filterName));
  };

  const filterButtonClass =
    "flex items-center justify-between rounded-full border border-primary bg-brand-white px-5 py-3 text-sm font-semibold text-primary transition hover:bg-accent";

  const optionButtonClass =
    "rounded-full border px-4 py-2 text-sm font-semibold transition";

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-primary">
        <SectionHeading title="Descubre nuestros cafés" />

        <div className="mb-8 flex flex-wrap gap-3 sm:mb-10 sm:gap-4">
          {/* Origen */}
          <div>
            <button
              onClick={() => toggleFilter("origin")}
              className={filterButtonClass}
            >
              <span>Origen</span>
              <span>{openFilter === "origin" ? "−" : "+"}</span>
            </button>

            {openFilter === "origin" && (
              <div className="mt-3 flex flex-wrap gap-3 rounded-[1.5rem] bg-brand-white p-4">
                {origins.map((origin) => (
                  <button
                    key={origin}
                    onClick={() => setSelectedOrigin(origin)}
                    className={`${optionButtonClass} ${
                      selectedOrigin === origin
                        ? "border-primary bg-primary text-white"
                        : "border-primary bg-white text-primary hover:bg-primary hover:text-white"
                    }`}
                  >
                    {origin}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Intensidad */}
          <div>
            <button
              onClick={() => toggleFilter("intensity")}
              className={filterButtonClass}
            >
              <span>Intensidad</span>
              <span>{openFilter === "intensity" ? "−" : "+"}</span>
            </button>

            {openFilter === "intensity" && (
              <div className="mt-3 flex flex-wrap gap-3 rounded-[1.5rem] bg-brand-white p-4">
                {intensities.map((intensity) => (
                  <button
                    key={intensity}
                    onClick={() => setSelectedIntensity(intensity)}
                    className={`${optionButtonClass} ${
                      selectedIntensity === intensity
                        ? "border-primary bg-primary text-white"
                        : "border-primary bg-white text-primary hover:bg-primary hover:text-white"
                    }`}
                  >
                    {intensity}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Acidez */}
          <div>
            <button
              onClick={() => toggleFilter("acidity")}
              className={filterButtonClass}
            >
              <span>Acidez</span>
              <span>{openFilter === "acidity" ? "−" : "+"}</span>
            </button>

            {openFilter === "acidity" && (
              <div className="mt-3 flex flex-wrap gap-3 rounded-[1.5rem] bg-brand-white p-4">
                {acidities.map((acidity) => (
                  <button
                    key={acidity}
                    onClick={() => setSelectedAcidity(acidity)}
                    className={`${optionButtonClass} ${
                      selectedAcidity === acidity
                        ? "border-primary bg-primary text-white"
                        : "border-primary bg-white text-primary hover:bg-primary hover:text-white"
                    }`}
                  >
                    {acidity}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {loading ? (
          <div className="mt-10 rounded-xl bg-secondary p-5 text-center text-primary shadow-md sm:p-6">
            Cargando cafés...
          </div>
        ) : error ? (
          <div className="mt-10 rounded-xl bg-accent/10 p-6 text-center text-accent">
            {error}
          </div>
        ) : filteredCoffees.length === 0 ? (
          <div className="mt-10 rounded-xl bg-secondary p-5 text-center text-primary shadow-md sm:p-6">
            No hay cafés que coincidan con esos filtros.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCoffees.map((coffee) => (
              <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default CoffeesPage;