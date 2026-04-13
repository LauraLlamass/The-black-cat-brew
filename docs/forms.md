# Formularios e interacción

## Introducción

Se ha implementado un formulario controlado en React para gestionar la entrada de datos del usuario.


## Formulario controlado

Los inputs están controlados mediante estado usando useState.

Ejemplo:

```ts
const [name, setName] = useState("");

<input value={name} onChange={(e) => setName(e.target.value)} />
```
Esto permite que React tenga el control total del valor del input.

## Gestión del estado

Se utilizan estados para:

- almacenar los valores de los inputs
- manejar errores
- mostrar mensajes de confirmación

## Validación

Se ha implementado una validación básica:
```ts
if (!name || !origin) {
  setError("Todos los campos son obligatorios");
}
```
Esto evita enviar el formulario con campos vacíos.

## Mensajes de feedback

Se muestran mensajes al usuario:

- error → si faltan campos
- éxito → si el formulario se envía correctamente

## Conclusión

El uso de formularios controlados permite gestionar correctamente la interacción del usuario y validar los datos antes de procesarlos.