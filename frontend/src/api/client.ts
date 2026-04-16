import type { Coffee } from "../types/coffee.js";

export async function getCoffees(): Promise<Coffee[]> {
  const response = await fetch("https://the-black-cat-brew.onrender.com/api/v1/coffees");

  if (!response.ok) {
    throw new Error("Error fetching coffees");
  }

  return response.json();
}