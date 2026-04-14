import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CoffeesPage from "./pages/CoffeesPage";
import FavoritesPage from "./pages/FavoritesPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePages";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="min-h-screen bg-[#eeefed] text-[#7a5447]">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogo" element={<CoffeesPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
        
      </Routes>

      <Footer />
    </div>
  );
}

export default App;