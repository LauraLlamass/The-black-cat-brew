import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CoffeesPage from "./pages/CoffeesPage";
import FavoritesPage from "./pages/FavoritesPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePages";
import AboutPage from "./pages/AboutPage";
import granos from "./assets/fondoGranos.png";

function App() {
  return (
    <div className="min-h-screen flex flex-col text-primary">
      <Navbar />

      <main
        className="flex-1 bg-brand-white pt-24 pb-24"
        style={{
          backgroundImage: `url(${granos})`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px",
          backgroundPosition: "center",
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<CoffeesPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;