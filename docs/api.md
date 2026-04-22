# API

## Introducción

El backend de la aplicación se ha implementado con Node.js y Express siguiendo una arquitectura por capas.

La API expone un recurso principal relacionado con los cafés y permite realizar operaciones básicas mediante endpoints REST.

Base URL en desarrollo:

```text
http://localhost:3000/api/v1
```
## Recurso principal
/coffees

### GET /coffees

Devuelve la lista completa de cafés.

#### Request
```text
GET /api/v1/coffees
```
#### Response

*Código: 200 OK*
```ts
[
  {
    "id": "1",
    "name": "Colombia Supremo",
    "origin": "Colombia",
    "intensity": "medium",
    "acidity": "high",
    "notes": ["fruity", "citrus"],
    "description": "Smooth coffee with fruity notes.",
    "image": "http://localhost:3000/images/cafe.png",
  }
]
```

### GET /coffees/:id

Devuelve un café concreto a partir de su id.

#### Request
```text
GET /api/v1/coffees/1
```
#### Response correcta

*Código: 200 OK*
```ts
{
  "id": "1",
  "name": "Colombia Supremo",
  "origin": "Colombia",
  "intensity": "medium",
  "acidity": "high",
  "notes": ["fruity", "citrus"],
  "description": "Smooth coffee with fruity notes.",
  "image": "http://localhost:3000/images/cafe.png",
}
```
#### Response si no existe

*Código: 404 Not Found*
```ts
{
  "message": "Coffee not found"
}
```
### POST /coffees

Crea un nuevo café.

#### Request
```text
POST /api/v1/coffees
Content-Type: application/json
```

```ts
{
  "name": "Test Coffee",
  "origin": "Peru",
  "intensity": "medium",
  "acidity": "low",
  "notes": ["cocoa"],
  "description": "Coffee created for testing.",
  "image": "http://localhost:3000/images/cafe.png",
}
```
#### Response correcta

*Código: 201 Created*
```ts
{
  "id": "13",
  "name": "Test Coffee",
  "origin": "Peru",
  "intensity": "medium",
  "acidity": "low",
  "notes": ["cocoa"],
  "description": "Coffee created for testing.",
  "image": "http://localhost:3000/images/cafe.png",
}
```
#### Response si faltan campos

*Código: 400 Bad*

#### Request
```ts
{
  "message": "Missing required fields"
}
```
### PATCH /coffees/:id

Actualiza parcialmente un café existente.

#### Request
```text
PATCH /api/v1/coffees/1
Content-Type: application/json
```
```ts
{
  "intensity": "high",
  "description": "Updated description"
}
```
#### Response correcta

*Código: 200 OK*
```ts
{
  "id": "1",
  "name": "Colombia Supremo",
  "origin": "Colombia",
  "intensity": "high",
  "acidity": "high",
  "notes": ["fruity", "citrus"],
  "description": "Updated description",
  "image": "http://localhost:3000/images/cafe.png",
}
```
#### Response si no existe

*Código: 404 Not Found*
```ts
{
  "message": "Coffee not found"
}
```
#### Response si el body está vacío

*Código: 400 Bad*

#### Request
```ts
{
  "message": "Request body is empty"
}
```
### DELETE /coffees/:id

Elimina un café por id.

#### Request
```text
DELETE /api/v1/coffees/1
```
#### Response correcta

*Código: 200 OK*
```ts
{
  "message": "Coffee deleted successfully",
  "coffee": {
    "id": "1",
    "name": "Colombia Supremo",
    "origin": "Colombia",
    "intensity": "medium",
    "acidity": "high",
    "notes": ["fruity", "citrus"],
    "description": "Smooth coffee with fruity notes.",
    "image": "http://localhost:3000/images/cafe.png",
  }
}
```
#### Response si no existe

*Código: 404 Not Found*
```ts
{
  "message": "Coffee not found"
}
```
## Códigos HTTP utilizados

La API utiliza los siguientes códigos HTTP:

- *200 OK* → operación realizada correctamente
- *201 Created* → recurso creado correctamente
- *400 Bad Request* → datos enviados inválidos o incompletos
- *404 Not Found* → recurso no encontrado
- *500 Internal Server Error* → error interno del servidor

## Conclusión

La API sigue una estructura REST sencilla y permite consultar, crear, actualizar y eliminar cafés. Esto facilita la conexión con el frontend y demuestra una arquitectura backend organizada por capas.