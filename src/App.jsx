import { useState } from "react";
import { Container } from "react-bootstrap";
import { Scanner } from "@yudiel/react-qr-scanner";
import Cookies from "js-cookie";
import { Home } from "./Home";
import SignIn from "./SignIn";
import { Routes, Route, useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import QRScanning from "./QRScanning";

function App() {
  // const [token, setToken] = useState(Cookies.get("authToken") || "");
  return (
    <>
      {/* <TopNav data={{ token, setToken }} /> */}

      <Routes>
        {/* <Route path="/" /> */}
        <Route path="/" element={Cookies.get("id") ? <Home /> : <SignIn />} />
        <Route path="/qr" element={Cookies.get("id") ? <QRScanning /> : null} />
      </Routes>
    </>
  );
}

export default App;
