import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7c895e]">
        Error
      </p>

      <h1 className="mt-3 text-5xl font-black text-[#7a5447]">404</h1>

      <p className="mt-4 max-w-md text-sm leading-7 text-[#7a5447]">
        La página que buscas no existe o ha sido movida.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-full bg-[#7a5447] px-6 py-3 text-sm font-semibold text-[#ffffff] transition hover:bg-[#daa77a] hover:text-[#7a5447]"
      >
        Volver al catálogo
      </Link>
    </main>
  );
}

export default NotFoundPage;