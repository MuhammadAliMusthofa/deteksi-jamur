import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./fragments/regis-form/RegisForm";
import Dashboard from "./pages/Dashboard";
import Mushroom from "./pages/Mushrooms";
import Detail from "./pages/DetailMushroom";
import UserMushroomDetail from "./pages/DetailUserMushroom";
import Detect from "./pages/DetectPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import History from "./pages/History";

function App() {
   const location = useLocation();
   const sharedLayout =
      location.pathname === "/" || location.pathname === "/login";
   return (
      <div className="app">
         <main className="content">
            {!sharedLayout && <Navbar />}
            {/* Tampilkan Navbar jika hideNavbar bernilai false */}
            <Routes>
               <Route path="/" element={<Register />} />
               <Route path="/login" element={<Login />} />
               <Route path="/dashboard" element={<Dashboard />} />
               <Route path="/home" element={<Dashboard />} />
               <Route path="/about" element={<About />} />
               <Route path="/jamur" element={<Mushroom />} />
               {/* <Route path="/history" element={<Dashboard />} /> */}
               {/* <Route path="/detect" element={<Detect />} /> */}
               {/* <Route path="/history" element={<History />} /> */}
               <Route path="/mushroom-detail/:name" element={<Detail />} />
               <Route
                  path="/mushroom-detail/:id/:name"
                  element={<UserMushroomDetail />}
               />
            </Routes>
            {!sharedLayout && <Footer />}
         </main>
      </div>
   );
}

export default App;
