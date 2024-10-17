import { useState } from "react";
import { Container } from "react-bootstrap";
import { Scanner } from "@yudiel/react-qr-scanner";
import SignIn from "./SignIn";
import Cookies from "js-cookie";
import { Home } from "./Home";
import "leaflet/dist/leaflet.css";
function App() {
  const [count, setCount] = useState(0);

  if (Cookies.get("id")) {
    return <Home />;
  } else {
    return <SignIn />;
  }
}

export default App;
