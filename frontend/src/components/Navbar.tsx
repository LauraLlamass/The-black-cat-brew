import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-[#fcedd6]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-[#7a5447]"
        >
          The Black Cat Brew
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm font-medium text-[#7a5447] transition hover:text-[#daa77a]"
          >
            Inicio
          </Link>

          <Link to="/catalogo"
            className="text-sm font-medium text-[#7a5447] transition hover:text-[#daa77a]"
          >
            Cafés
          </Link>

          <Link
            to="/favorites"
            className="text-sm font-medium text-[#7a5447] transition hover:text-[#daa77a]"
          >
            Favoritos
          </Link>

          <Link
            to="/about"
            className="text-sm font-medium text-[#7a5447] transition hover:text-[#daa77a]"
          >
            Sobre nosotros
          </Link>

        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/favorites"
            className="rounded-full border border-[#7a5447] px-5 py-2 text-sm font-semibold text-[#7a5447] transition hover:bg-[#7a5447] hover:text-[#ffffff]"
          >
            Mis favoritos
          </Link>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#daa77a] text-sm font-bold text-[#7a5447]">
            ☕
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;