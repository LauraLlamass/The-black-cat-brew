import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-secondary bg-primary backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-6">
        <Link
          to="/"
          className="text-base font-semibold tracking-tight text-brand-white sm:text-lg md:text-2xl"
          onClick={() => setMenuOpen(false)}
        >
          The Black Cat Brew
        </Link>

        <nav className="hidden items-center gap-4 md:flex">
          <Link
            to="/"
            className="rounded-full border border-secondary px-5 py-2 text-sm font-medium text-secondary transition hover:bg-accent"
          >
            Inicio
          </Link>

          <Link
            to="/catalogo"
            className="rounded-full border border-secondary px-5 py-2 text-sm font-medium text-secondary transition hover:bg-accent"
          >
            Cafés
          </Link>

          <Link
            to="/about"
            className="rounded-full border border-secondary px-5 py-2 text-sm font-medium text-secondary transition hover:bg-accent"
          >
            Sobre nosotros
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/favorites"
            aria-label="Ir a favoritos"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-secondary text-white transition hover:border-accent hover:bg-accent hover:text-brand-white sm:h-11 sm:w-11"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 sm:size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menú"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-secondary text-brand-white transition hover:border-accent hover:bg-accent md:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-secondary bg-primary px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-3 pt-4">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="rounded-full border border-secondary px-5 py-3 text-sm font-medium text-secondary transition hover:bg-accent"
            >
              Inicio
            </Link>

            <Link
              to="/catalogo"
              onClick={() => setMenuOpen(false)}
              className="rounded-full border border-secondary px-5 py-3 text-sm font-medium text-secondary transition hover:bg-accent"
            >
              Cafés
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="rounded-full border border-secondary px-5 py-3 text-sm font-medium text-secondary transition hover:bg-accent"
            >
              Sobre nosotros
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;