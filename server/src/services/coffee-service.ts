import { coffees } from "../data/coffees";

export function getAllCoffees() {
  return coffees;
}

export function getCoffeeById(id: string) {
  return coffees.find((coffee) => coffee.id === id);
}

export function createCoffee(newCoffee: {
  name: string;
  origin: string;
  intensity: string;
  acidity: string;
  notes: string[];
  description: string;
  image: string;
  amazonUrl: string;
}) {
  const coffee = {
    id: String(coffees.length + 1),
    ...newCoffee,
  };

  coffees.push(coffee);
  return coffee;
}

export function updateCoffee(
  id: string,
  updates: Partial<{
    name: string;
    origin: string;
    intensity: string;
    acidity: string;
    notes: string[];
    description: string;
    image: string;
    amazonUrl: string;
  }>
) {
  const coffee = coffees.find((item) => item.id === id);

  if (!coffee) {
    return null;
  }

  Object.assign(coffee, updates);
  return coffee;
}

export function deleteCoffee(id: string) {
  const index = coffees.findIndex((coffee) => coffee.id === id);

  if (index === -1) {
    return null;
  }

  const deletedCoffee = coffees[index];
  coffees.splice(index, 1);

  return deletedCoffee;
}