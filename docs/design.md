# Arquitectura de la aplicación

## Introducción

La aplicación se ha desarrollado siguiendo una arquitectura fullstack con separación entre frontend y backend.

El frontend está construido con React, TypeScript y Tailwind CSS, mientras que el backend se ha implementado con Node.js y Express dentro del mismo repositorio.

El objetivo principal de esta arquitectura es organizar el proyecto de forma clara, separar responsabilidades y facilitar el mantenimiento del código.

## Estructura general del proyecto

El proyecto se divide en dos partes principales:

- `frontend/` → aplicación cliente con React
- `server/` → backend/API con Express

Además, se incluye una carpeta `docs/` para documentar las distintas fases del proyecto.

## Estructura del frontend

En el frontend se ha seguido una organización por carpetas según responsabilidades:

- `src/components/` → componentes reutilizables
- `src/pages/` → páginas principales
- `src/hooks/` → hooks personalizados y lógica reutilizable
- `src/types/` → tipos e interfaces TypeScript
- `src/utils/` → utilidades
- `src/context/` → estado global con Context API
- `src/api/` → cliente de API tipado

Esta estructura permite separar la interfaz, la lógica y el acceso a datos.

## Componentes principales

Los componentes principales de la aplicación son:

- `Navbar` → navegación principal
- `Hero` → sección principal de la página de inicio
- `InfoStrip` → bloque informativo de presentación
- `CoffeeCard` → tarjeta reutilizable que muestra cada café
- `SectionHeading` → componente reutilizable para títulos de sección
- `Footer` → pie de página

Las páginas principales son:

- `HomePage`
- `CoffeesPage`
- `FavoritesPage`
- `NotFoundPage`

## Componentes reutilizables

Se han definido varios componentes reutilizables para evitar duplicación de código y mantener coherencia visual:

- `CoffeeCard`
- `Navbar`
- `SectionHeading`
- `Footer`

La reutilización mejora la escalabilidad del proyecto y facilita futuros cambios de diseño o funcionalidad.

## Gestión del estado de la aplicación

El estado de la aplicación se gestiona de dos formas:

### Estado local
Se usa `useState` para gestionar:
- listas de cafés cargadas desde la API
- estados de carga y error
- datos temporales de componentes

### Estado global
Se usa Context API para compartir los cafés favoritos entre distintos componentes.

Se ha creado un contexto específico para favoritos, con su Provider correspondiente, permitiendo añadir o eliminar cafés favoritos desde diferentes páginas.

## Diseño del backend/API

El backend se ha estructurado por capas:

- `routes/` → define endpoints
- `controllers/` → gestiona request y response
- `services/` → contiene lógica de negocio
- `data/` → datos de los cafés
- `config/` → configuración general

Esta arquitectura por capas permite una mejor separación de responsabilidades.

## Recursos REST

Actualmente el recurso principal es:

- `/api/v1/coffees`

Endpoints implementados:

- `GET /api/v1/coffees` → devuelve todos los cafés
- `GET /api/v1/coffees/:id` → devuelve un café concreto por id

Estos endpoints devuelven datos en formato JSON.

## Contrato de datos

Cada café sigue una estructura tipada:

```ts
interface Coffee {
  id: string;
  name: string;
  origin: string;
  intensity: string;
  acidity: string;
  notes: string[];
  description: string;
  image: string;
}
```
Esto permite mantener alineados el backend y el frontend mediante TypeScript.

## Persistencia de datos

En esta versión del proyecto:

Los datos de los cafés se almacenan en el backend mediante datos mock
Los favoritos se almacenan en el estado global del frontend mediante Context API

No se utiliza base de datos en esta fase, ya que el objetivo principal es demostrar la arquitectura fullstack y la conexión entre frontend y backend.

## Decisiones de arquitectura

Las decisiones principales han sido:

- separar frontend y backend en carpetas distintas
- usar arquitectura por capas en el backend
- uar un cliente de API tipado en el frontend
- usar Context API para compartir favoritos
- usar componentes reutilizables para la interfaz
- usar datos mock en backend para simplificar la implementación

## Conclusión

La arquitectura elegida permite desarrollar una aplicación organizada, mantenible y escalable. Además, facilita la conexión entre frontend, backend y API.

## Diagrama simple del flujo de datos

```text
Usuario
   ↓
Frontend (React)
   ↓
Cliente de API (src/api/client.ts)
   ↓
Backend/API (Express)
   ↓
Routes → Controllers → Services → Data
   ↓
Respuesta JSON
   ↓
Frontend (React)
   ↓
Renderizado en componentes
```

# Cliente de API y tipos, 12

## Cliente de API

Se ha creado un cliente de API en `src/api/client.ts` que se encarga de realizar las peticiones al backend.

### Ejemplo

```ts
export async function getCoffees(): Promise<Coffee[]> {
  const response = await fetch("http://localhost:3000/api/v1/coffees");
  if (!response.ok) {
    throw new Error("Error al obtener los cafés");
  }
  return response.json();
}
```

## Tipos

Se han definido tipos usando TypeScript para asegurar la consistencia de los datos.

### Coffee
export interface Coffee {
  id: string;
  name: string;
  origin: string;
  intensity: string;
  acidity: string;
  notes: string[];
  description: string;
  image: string;
}

## Estados de red

En la interfaz se gestionan tres estados:

loading → mientras se cargan los datos
success → cuando los datos se han cargado correctamente
error → cuando ocurre un fallo en la petición

## Fuente de datos

Los datos provienen del backend (API), eliminando la necesidad de usar LocalStorage como fuente principal.