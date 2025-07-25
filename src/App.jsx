import { Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Dashboard from "./Dashboard.jsx";
import GameDetailPage from "./GameDetailPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/games/:id" element={<GameDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
