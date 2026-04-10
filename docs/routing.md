# Rutas y navegación

La aplicación utiliza React Router para gestionar la navegación entre páginas.

## Rutas principales

- `/`
  - Página de inicio (HomePage)
  - Contiene Hero e información general

- `/catalogo`
  - Página de catálogo (CoffeesPage)
  - Muestra la lista de cafés disponibles

- `/favorites`
  - Página de favoritos (FavoritesPage)
  - Muestra los cafés guardados por el usuario

- `*`
  - Página 404 (NotFoundPage)
  - Se muestra cuando la ruta no existe

## Navegación

La navegación se realiza mediante el componente `Link` de React Router, evitando recargas de página.

## Estructura

La configuración de rutas se encuentra en `App.tsx`, donde se definen los distintos `Route`.