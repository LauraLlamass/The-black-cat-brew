import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-secondary bg-primary backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-semibold tracking-tight text-brand-white"
        >
          The Black Cat Brew
        </Link>

        <nav className="hidden gap-6 md:flex">
          {/* links */}
        </nav>

        <button className="md:hidden rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary">
          Menú
        </button>

        {/* Nav */}
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

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/favorites"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-secondary text-white transition hover:border-accent hover:bg-accent hover:text-brand-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
            </svg>

          </Link>

        </div>
      </div>
    </header>
  );
}

export default Navbar;