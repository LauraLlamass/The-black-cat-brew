import { useEffect, useState } from "react";

type Cafe = {
  id: string;
  name: string;
  description: string;
  image: string;
};

function CafesDestacados() {
  const [cafes, setCafes] = useState<Cafe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerCafes = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/v1/coffees");
        const data: Cafe[] = await res.json();

        // destacados elegidos
        const ids = ["1", "3", "4", "9"];
        const destacados = data.filter((c) => ids.includes(c.id));

        setCafes(destacados);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    obtenerCafes();
  }, []);

  if (loading) return <p className="p-6">Cargando cafés...</p>;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-black text-primary md:text-4xl">
          Cafés destacados
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cafes.map((cafe) => (
            <article 
              key={cafe.id}
              className="rounded-[1rem] border border-primary bg-brand-white p-6 transition duration-300 ease-out hover:scale-105"
            >
              <img
                src={`https://the-black-cat-brew.onrender.com/api/v1/coffees{cafe.image}`}
                alt={cafe.name}
                className="mb-4 h-40 w-full object-contain"
              />

              <h3 className="text-xl font-bold text-primary">
                {cafe.name}
              </h3>

              <p className="mt-3 text-sm text-primary">
                {cafe.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CafesDestacados;