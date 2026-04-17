# Retrospective

## Aprendizaje durante el proyecto

Durante este proyecto he aprendido a desarrollar una aplicación web completa conectando frontend y backend.

En el frontend he trabajado con React y TypeScript, creando componentes reutilizables, gestionando estado con hooks (useState, useEffect, useMemo, useCallback) y organizando la aplicación en páginas y rutas con React Router.

En el backend he utilizado Node.js con Express para crear una API REST, estructurada en capas (rutas, controladores y servicios), lo que me ha permitido entender mejor cómo organizar la lógica del servidor, entendiendo mejor como funciona y se conecta la arquitectura de una web.

También he aprendido a conectar ambas partes mediante peticiones HTTP, utilizando el frontend como cliente de la API y gestionando los datos recibidos. 

## Cómo he conectado frontend, backend y API

La conexión entre frontend y backend se ha realizado mediante una API REST.

El backend expone endpoints como:

- GET /api/v1/coffees
- POST /api/v1/coffees
- PATCH /api/v1/coffees/:id
- DELETE /api/v1/coffees/:id

El frontend consume estos endpoints usando fetch desde un cliente de API, utilizando una variable de entorno (VITE_API_URL) para apuntar al backend tanto en desarrollo como en producción.

Esto ha permitido separar responsabilidades:
- el backend gestiona los datos
- el frontend los muestra y permite interactuar con ellos

## Problemas encontrados

Durante el desarrollo he encontrado varios problemas importantes:

- errores en rutas de archivos e importaciones
- problemas con React Router al usar más de un Router
- errores al cargar imágenes por rutas incorrectas
- problemas en el backend al estructurar servicios y controladores
- errores al desplegar en Render por configuración incorrecta (Root Directory, comandos)
- problemas de conexión entre frontend y backend en producción (uso de localhost en lugar de la URL real)
- errores de CORS al intentar acceder al backend desde Vercel
- duplicar funciones
- problemas de estructura al utilizar mal componentes
- problemas al entender como debia proceder

Estos problemas me han ayudado a entender mejor cómo funciona una aplicación real y cómo depurar errores.


## Uso de IA durante el desarrollo

He utilizado IA como apoyo durante el desarrollo del proyecto en las ocasiones en las que tenia alguna duda o me quedaba bloqueada.

Principalmente me ha ayudado a:

- localizar el fallo y entenderlo 
- entender conceptos de React y backend
- generar ejemplos de código para posteriormente poder realizar el mio propio
- depurar problemas de despliegue

Aun así, siempre he revisado el código y entendido antes de aplicarlo.

## Reflexión final

Este proyecto me ha permitido consolidar conocimientos de desarrollo web completo.
He aprendido a trabajar con frontend y backend de forma conjunta, a estructurar un proyecto real, ser capaz de entender como funciona el flujo de la aplicación y a resolver problemas que aparecen en entornos reales, especialmente en el despliegue.
El resultado final es una aplicación funcional que cumple los objetivos planteados y que demuestra una buena base para seguir desarrollando proyectos más complejos.