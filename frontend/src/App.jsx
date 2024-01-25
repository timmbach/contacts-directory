import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddContact from "./pages/AddContact";
import ViewContact from "./pages/ViewContact";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/view/:contactId" element={<ViewContact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
