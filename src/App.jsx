import { Routes, Route, useLocation } from "react-router-dom";
import Front from "./pages/Mushroom";
import Login from "./pages/Login";
import Register from "./fragments/regis-form/RegisForm";
import Dashboard from "./pages/Dashboard";
import Mushroom from "./pages/Mushrooms";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/' || location.pathname === '/register'  ; // Sembunyikan Navbar jika rute aktif adalah '/login'
  return (
    <div className="app">
      <main className="content">
      {!hideNavbar && <Navbar/>} {/* Tampilkan Navbar jika hideNavbar bernilai false */}
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/about" element={<Dashboard />} />
          <Route path="/mushroom" element={<Mushroom />} />
          <Route path="/history" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
