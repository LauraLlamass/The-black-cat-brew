import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-secondary/40 bg-primary/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-semibold tracking-tight text-brand-white"
        >
          The Black Cat Brew
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="rounded-full border border-secondary px-5 py-2 text-sm font-medium text-secondary transition hover:text-accent"
          >
            Inicio
          </Link>

          <Link
            to="/catalogo"
            className="rounded-full border border-secondary px-5 py-2 text-sm font-medium text-secondary transition hover:text-accent"
          >
            Cafés
          </Link>


          <Link
            to="/about"
            className="rounded-full border border-secondary px-5 py-2 text-sm font-medium text-secondary transition hover:text-accent"
          >
            Sobre nosotros
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/favorites"
            className="rounded-full border border-secondary/40 px-5 py-2 text-sm font-semibold text-secondary transition hover:bg-accent hover:text-brand-white"
          >
            ☕
          </Link>

        </div>
      </div>
    </header>
  );
}

export default Navbar;