import { useState } from "react";

function CoffeeForm() {
  const [name, setName] = useState("");
  const [origin, setOrigin] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // VALIDACIÓN
    if (!name || !origin) {
      setError("Todos los campos son obligatorios");
      return;
    }

    // SIMULACIÓN DE ENVÍO
    setSuccess("Formulario enviado correctamente");

    // reset
    setName("");
    setOrigin("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md rounded-xl bg-[#fcedd6] p-6 shadow-md"
    >
      <h2 className="mb-4 text-xl font-bold text-[#7a5447]">
        Añadir café
      </h2>

      <div className="mb-4">
        <label className="block text-sm mb-1">Nombre</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm mb-1">Origen</label>
        <input
          type="text"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className="w-full rounded-md border px-3 py-2"
        />
      </div>

      {/* ERROR */}
      {error && <p className="mb-3 text-red-500">{error}</p>}

      {/* SUCCESS */}
      {success && <p className="mb-3 text-green-600">{success}</p>}

      <button
        type="submit"
        className="rounded-md bg-[#7a5447] px-4 py-2 text-white hover:bg-[#5c3f35]"
      >
        Enviar
      </button>
    </form>
  );
}

export default CoffeeForm;