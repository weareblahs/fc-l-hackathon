import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Scanner } from "@yudiel/react-qr-scanner";
import { useNavigate } from "react-router-dom";
function QRScanning() {
  const Navigate = useNavigate();
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
          {" "}
          <div className=" mt-auto mb-auto">
            <center>
              <h1>Scan to check in</h1>
            </center>
            <Scanner onScan={(r) => console.log(r[0].rawValue)} />
          </div>
          <Button className="w-100 mt-2" onClick={() => Navigate("/")}>
            Back to home
          </Button>
        </div>
      </Container>
    </>
  );
}

export default QRScanning;
