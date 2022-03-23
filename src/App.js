import "./App.css";

import Modal from "react-modal/lib/components/Modal";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

Modal.setAppElement('#root')

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
