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
    <div className="min-h-screen text-primary  py-14 " >
      <Navbar />
<div className="min-h-screen bg-brand-white text-primary  py-14 " style={{
        backgroundImage: `url(${granos})`,
        backgroundRepeat: "repeat",
        backgroundSize: "180px",
        backgroundPosition: "center",
      }}>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogo" element={<CoffeesPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
        
      </Routes>

</div>

      <Footer />
    </div>
  );
}

export default App;