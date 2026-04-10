# Context y estado global

## Introducción

Para gestionar el estado global de la aplicación se ha utilizado la Context API de React.
El objetivo es compartir datos entre distintos componentes sin necesidad de pasar props manualmente en cada nivel.

## Implementación

Se ha creado un contexto para gestionar los cafés favoritos del usuario.

### Creación del contexto

Se utiliza `createContext` para definir el contexto:

```ts
import { createContext } from "react";

export const FavoritesContext = createContext(null);
```

## Provider

Se implementa un Provider que envuelve la aplicación y proporciona el estado global:

```ts
import { useState } from "react";

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (coffee) => {
    setFavorites([...favorites, coffee]);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
```

## Uso del contexto

El contexto se consume en distintos componentes mediante useContext:

```ts
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const { favorites, addFavorite } = useContext(FavoritesContext);
```

### Esto permite:

Añadir cafés a favoritos desde las tarjetas
Mostrar los cafés guardados en la página de favoritos

## Casos de uso de Context API

Se necesita compartir estado entre muchos componentes
Se quiere evitar el "prop drilling" (pasar props por muchos niveles)
Se gestionan datos globales como:
- usuario autenticado
- tema (dark/light)
- favoritos 

### Ventajas
Código más limpio y organizado
Fácil acceso al estado global
Evita duplicación de lógica
