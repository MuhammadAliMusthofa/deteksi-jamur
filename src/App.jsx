import { Routes, Route } from "react-router-dom";
import Front from "./pages/Mushroom";

function App() {
  return (
    <div className="app">
      <main className="content">
        <Routes>
          <Route path="/" element={<Front />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;