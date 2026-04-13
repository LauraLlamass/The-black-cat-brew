En este proyecto se ha utilizado *useCallback* dentro de *FavoritesContext* para evitar la recreación de funciones en cada render.

Ejemplo:

```ts
const addFavorite = useCallback((coffee: Coffee) => {
  setFavorites((prev) => {
    const alreadyExists = prev.some((item) => item.id === coffee.id);
    if (alreadyExists) return prev;
    return [...prev, coffee];
  });
}, []);
```