import { useEffect, useState } from "react";
import { getCoffees } from "../api/client";
import type { Coffee } from "../types/coffee";

export function useCoffees() {
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

  return { coffees, loading, error };
}