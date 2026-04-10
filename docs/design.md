# Cliente de API y tipos

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
  amazonUrl: string;
}

## Estados de red

En la interfaz se gestionan tres estados:

loading → mientras se cargan los datos
success → cuando los datos se han cargado correctamente
error → cuando ocurre un fallo en la petición

## Fuente de datos

Los datos provienen del backend (API), eliminando la necesidad de usar LocalStorage como fuente principal.