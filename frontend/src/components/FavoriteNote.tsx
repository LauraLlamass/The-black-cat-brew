import { useEffect, useState } from "react";

interface Props {
  coffeeId: string;
}

function FavoriteNote({ coffeeId }: Props) {
  const [note, setNote] = useState("");

  // Cargar nota al iniciar
  useEffect(() => {
    const saved = localStorage.getItem(`note-${coffeeId}`);
    if (saved) setNote(saved);
  }, [coffeeId]);

  // Guardar nota
  const handleChange = (value: string) => {
    setNote(value);
    localStorage.setItem(`note-${coffeeId}`, value);
  };

  return (
    <textarea
      value={note}
      onChange={(e) => handleChange(e.target.value)}
      placeholder="Este café ha sido..."
      className="mt-3 w-full rounded-xl border border-primary/20 bg-brand-white p-3 text-sm text-primary placeholder:text-primary/40 focus:outline-none focus:ring-1 focus:ring-primary"
      rows={3}
    />
  );
}

export default FavoriteNote;