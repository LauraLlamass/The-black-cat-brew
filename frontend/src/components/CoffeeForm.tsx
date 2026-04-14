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

    if (!name || !origin) {
      setError("Todos los campos son obligatorios");
      return;
    }

    setSuccess("Formulario enviado correctamente");

    setName("");
    setOrigin("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md rounded-[1.75rem] bg-secondary/40 p-6 shadow-lg shadow-black/5 backdrop-blur"
    >
      <h2 className="mb-5 text-2xl font-semibold text-primary">
        Añadir café
      </h2>

      {/* Nombre */}
      <div className="mb-4">
        <label className="mb-1 block text-sm font-medium text-primary/80">
          Nombre
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-secondary bg-brand-white/80 px-4 py-2 text-primary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
        />
      </div>

      {/* Origen */}
      <div className="mb-4">
        <label className="mb-1 block text-sm font-medium text-primary/80">
          Origen
        </label>
        <input
          type="text"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className="w-full rounded-xl border border-secondary bg-brand-white/80 px-4 py-2 text-primary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
        />
      </div>

      {/* ERROR */}
      {error && (
        <p className="mb-3 rounded-lg bg-accent/10 px-3 py-2 text-sm text-accent">
          {error}
        </p>
      )}

      {/* SUCCESS */}
      {success && (
        <p className="mb-3 rounded-lg bg-secondary px-3 py-2 text-sm text-primary">
          {success}
        </p>
      )}

      <button
        type="submit"
        className="mt-2 w-full rounded-full bg-accent px-5 py-3 text-sm font-semibold text-brand-white transition hover:bg-primary hover:text-secondary"
      >
        Enviar
      </button>
    </form>
  );
}

export default CoffeeForm;