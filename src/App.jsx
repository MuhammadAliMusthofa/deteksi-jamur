import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./fragments/regis-form/RegisForm";
import Dashboard from "./pages/Dashboard";
import Mushroom from "./pages/Mushrooms";
import Detail from "./pages/DetailMushroom";
import Detect from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/' || location.pathname === '/register'  ; // Sembunyikan Navbar jika rute aktif adalah '/login'
  const hideFooter = location.pathname === '/' || location.pathname === '/register'  ; // Sembunyikan Navbar jika rute aktif adalah '/login'
  return (
    <div className="app">
      <main className="content">
      {!hideNavbar && <Navbar/>} {/* Tampilkan Navbar jika hideNavbar bernilai false */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/history" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/about" element={<Dashboard />} />
          <Route path="/jamur" element={<Mushroom />} />
          <Route path="/history" element={<Dashboard />} />
          <Route path="/detect" element={<Detect />} />
          <Route path="/mushroom-detail/:name" element={<Detail />} />
        </Routes>
        
        {!hideFooter && <Footer/>} 
      </main>
    </div>
  );
}

export default App;
