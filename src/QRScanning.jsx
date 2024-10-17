import { useState } from "react";
import { Container } from "react-bootstrap";
import { Scanner } from "@yudiel/react-qr-scanner";
function App() {
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
        </div>
      </Container>
    </>
  );
}

export default App;
