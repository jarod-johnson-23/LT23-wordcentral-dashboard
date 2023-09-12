import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} exact />
      </Routes>
    </HashRouter>
  );
}

export default App;
