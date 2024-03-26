import { Routes, Route } from "react-router-dom";
import Front from "./pages/Mushroom";
import Login from "./pages/Login";

function App() {
  return (
    <div className="app">
      <main className="content">
        {/* <Routes>
          <Route path="/" element={<Front />} />
        </Routes> */}
        <Login />
      </main>
    </div>
  );
}

export default App;
