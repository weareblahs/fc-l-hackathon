import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Scanner } from "@yudiel/react-qr-scanner";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { submitCheckIn } from "./APIActions";
function ManagementQR() {
  const Navigate = useNavigate();
  const [value, setValue] = useState("");
  useEffect(() => {
    const data = value;

    console.log(data);
    if (data.length != 0) {
      const d = data.split(",");
      const p = Cookies.get("id").split(",");
      if (d[0] == "harvest") {
        Cookies.set("harvestUser", d[1]);
        Navigate("/harvest");
      } else {
        alert("Invalid QR Code");
      }
    } else {
      //   alert("Invalid QR Code");
    }
  }, [value]);
  return (
    <>
      <Container
        style={{
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div style={{ display: "block" }}>
          <div className=" mt-auto mb-auto">
            <center>
              <h1>Scan QR code</h1>
            </center>
            <Scanner onScan={(r) => setValue(r[0].rawValue)} />
          </div>
          <Button className="w-100 mt-2" onClick={() => Navigate("/")}>
            Back to home
          </Button>
        </div>
      </Container>
    </>
  );
}

export default ManagementQR;
