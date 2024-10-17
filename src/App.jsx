import { useState } from "react";
import { Container } from "react-bootstrap";
import { Scanner } from "@yudiel/react-qr-scanner";
import Cookies from "js-cookie";
import { Home } from "./Home";
import SignIn from "./SignIn";
import { Routes, Route, useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import QRScanning from "./QRScanning";
import { Profile } from "./Profile";
import { PostCheckIn } from "./PostCheckIn";
import { Rewards } from "./Rewards";
import { Management } from "./Management";
import ManagementQR from "./ManagementQR";
import Harvest from "./Harvest";

function App() {
  // const [token, setToken] = useState(Cookies.get("authToken") || "");

  return (
    <>
      {/* <TopNav data={{ token, setToken }} /> */}

      <Routes>
        {/* <Route path="/" /> */}
        <Route
          path="/"
          element={
            Cookies.get("id") ? (
              Cookies.get("id").split(",")[1] == "staff" ? (
                <Home />
              ) : (
                <Management />
              )
            ) : (
              <SignIn />
            )
          }
        />
        <Route path="/qr" element={Cookies.get("id") ? <QRScanning /> : null} />
        <Route
          path="/profile"
          element={Cookies.get("id") ? <Profile /> : null}
        />
        <Route
          path="/checkin"
          element={Cookies.get("id") ? <PostCheckIn /> : null}
        />
        <Route
          path="/rewards"
          element={Cookies.get("id") ? <Rewards /> : null}
        />
        <Route
          path="/managementqr"
          element={
            Cookies.get("id") && Cookies.get("id").split(",")[1] != "staff" ? (
              <ManagementQR />
            ) : null
          }
        />
        <Route
          path="/harvest"
          element={
            Cookies.get("id") && Cookies.get("id").split(",")[1] != "staff" ? (
              <Harvest />
            ) : null
          }
        />
      </Routes>
    </>
  );
}

export default App;
