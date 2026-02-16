/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Consulta from "./pages/Consulta";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Consulta />}
        />
        <Route
          path='/admin'
          element={<Dashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
