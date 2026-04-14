import { createContext, useContext, useState, useCallback } from "react";
import type { Coffee } from "../types/coffee";

interface FavoritesContextType {
  favorites: Coffee[];
  addFavorite: (coffee: Coffee) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Coffee[]>([]);

  const addFavorite = useCallback((coffee: Coffee) => {
    setFavorites((prev) => {
      const alreadyExists = prev.some((item) => item.id === coffee.id);
      if (alreadyExists) return prev;
      return [...prev, coffee];
    });
  }, []);

  const removeFavorite = useCallback((id: string) => {
    setFavorites((prev) => prev.filter((coffee) => coffee.id !== id));
  }, []);

  const isFavorite = useCallback(
    (id: string) => favorites.some((coffee) => coffee.id === id),
    [favorites]
  );

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }

  return context;
}