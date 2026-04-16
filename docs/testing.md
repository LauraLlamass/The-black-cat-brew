# Testing y mejoras

## Introducción

Durante el desarrollo del proyecto se ha ido realizado pruebas manuales para comprobar que la aplicación funciona correctamente tanto en el frontend como en el backend (server).

El objetivo de estas pruebas ha sido detectar errores durante el desarrollo, comprobar la integración entre React y Express y revisar el comportamiento general de la aplicación, además de comrpobar el diseño.


## Pruebas manuales realizadas

### 1. Carga de cafés desde la API
Se comprobó que el frontend realiza correctamente la petición al backend y muestra los cafés en pantalla, además de añadirlos a favoritos y eliminarlos.


### 2. Visualización de tarjetas de café
Se revisó que cada café se muestra con:
- nombre
- intensidad
- acidez
- descripción
- imagen
- enlace externo



### 3. Sistema de favoritos
Se probó la funcionalidad de añadir y quitar cafés de favoritos.


### 4. Cambio visual del botón de favoritos
Se comprobó que el botón cambia de estado cuando un café ya está en favoritos.

### 5. Navegación entre páginas
Se revisaron las rutas principales:
- `/`
- `/catalogo`
- `/favorites`
- `/about`
- página 404

### 6. Backend y endpoints
Se probaron los endpoints principales de la API:

- `GET /api/v1/coffees`
- `GET /api/v1/coffees/:id`
- `POST /api/v1/coffees`
- `PATCH /api/v1/coffees/:id`
- `DELETE /api/v1/coffees/:id`

### 7. Códigos HTTP
Se comprobó el uso de códigos HTTP correctos:

- `200 OK`
- `201 Created`
- `400 Bad Request`
- `404 Not Found`
- `500 Internal Server Error`

## Diseño responsive

Se revisó el comportamiento de la interfaz en distintos tamaños de pantalla.

Observaciones:
- en escritorio el catálogo se visualiza correctamente en varias columnas
- en móvil fue necesario ajustar el grid para mostrar una sola tarjeta por fila y mejorar la legibilidad

Mejora aplicada:
- configuración del grid responsive para 1 columna en móvil, 2 en tablet y 3 en escritorio

## Revisión de errores en consola

Durante el desarrollo se revisaron errores en consola relacionados con:

- configuración de rutas con React Router
- importaciones incorrectas
- problemas con imágenes y assets
- errores en nombres de archivos
- configuración del backend

Estos errores fueron corregidos durante el desarrollo.

## Bugs encontrados y corregidos

Algunos problemas detectados fueron:

- errores de importación por nombres incorrectos de archivos
- conflicto al usar más de un Router en React
- imágenes no encontradas por rutas incorrectas
- problema al servir imágenes desde el backend
- errores de tipado y rutas de componentes

Todos estos errores fueron corregidos para conseguir una aplicación funcional.

## Conclusión

Las pruebas manuales permitieron comprobar que la aplicación funciona correctamente, que el frontend y el backend están conectados y que la mayoría de funcionalidades responden como se esperaba. Fue necesaria que se hicieran las pruebas manuales en cada cambio añadido para una mejor fluidez.
