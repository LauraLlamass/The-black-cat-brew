import { Link } from "react-router-dom";
import granos from "../assets/fondoGranos.png";

function NotFoundPage() {
  return (
    <main
      className="flex min-h-[80vh] items-center justify-center bg-brand-white px-6 text-center"
      style={{
        backgroundImage: `url(${granos})`,
        backgroundRepeat: "repeat",
        backgroundSize: "180px",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-md rounded-[2rem] border border-secondary/40 bg-secondary p-10 shadow-xl shadow-black/10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          Error
        </p>

        <h1 className="mt-3 text-5xl font-semibold text-secondary">404</h1>

        <p className="mt-4 text-sm leading-7 text-secondary/80">
          La página que buscas no existe o ha sido movida.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-brand-white transition hover:bg-primary hover:text-secondary"
        >
          Volver al catálogo
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;