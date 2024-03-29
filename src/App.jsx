import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./fragments/regis-form/RegisForm";
import Dashboard from "./pages/Dashboard";
import Mushroom from "./pages/Mushrooms";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Mushrooms from "./pages/Mushrooms";
import LandingPage from "./pages/LandingPage";

function App() {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/" || location.pathname === "/register"; // Sembunyikan Navbar jika rute aktif adalah '/login'
  return (
    <div className="app">
      <main className="content">
        {!hideNavbar && <Navbar />}{" "}
        {/* Tampilkan Navbar jika hideNavbar bernilai false */}
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/history" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/mushroom" element={<Mushroom />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
