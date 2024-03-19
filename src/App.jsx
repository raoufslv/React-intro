import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Lina from "./pages/Lina.jsx";
import Profil from "./pages/Profil.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  const connected = true;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />

        {/* dynamic routing */}
        <Route path="/article/:id" element={<Lina />} />

        {/* conditional routing */}
        {connected && <Route path="/profil" element={<Profil />} />}
      </Routes>
    </>
  );
}

export default App;
