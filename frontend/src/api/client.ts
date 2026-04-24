import type { Coffee } from "../types/coffee.js";

export async function getCoffees(): Promise<Coffee[]> {
  //url por entorno
//  const local = "http://localhost:3000/api/v1/coffees";

  //fetch
  const deployed = "https://the-black-cat-brew.onrender.com/api/v1/coffees";

  //cambiar "local" y "deployed" segun forma de trabajo
  const response = await fetch(deployed);

  if (!response.ok) {
    throw new Error("Error fetching coffees");
  }

  return response.json();
}