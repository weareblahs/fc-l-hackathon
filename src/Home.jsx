import Cookies from "js-cookie";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { FaRegUserCircle, FaQrcode } from "react-icons/fa";
import { Row, Col, Button, Image, Modal } from "react-bootstrap";
import "../public/icon.png";
import { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";
export const Home = () => {
  const userInfo = Cookies.get("id").split(",");
  const position = [];
  const userRole = userInfo[1];
  const [pp, setpp] = useState(false);
  return (
    <div style={{ width: "90vw" }} className="ms-auto me-auto mt-4">
      <div className="d-flex mb-2">
        <div className="w-50 mt-auto mb-auto ms-2 me-2">
          <h1>
            <FaRegUserCircle
              className="userHover rounded-circle"
              onClick={() => setpp(true)}
            />
          </h1>
        </div>
        <div className="w-50 text-end ms-2 me-2 ">
          {" "}
          <Image
            src="../public/icon.png"
            className="img-responsive"
            width={"32px"}
          />
        </div>
      </div>
      <Button className="btn btn-success btn-lg w-100 mt-2 mb-2">
        <FaQrcode />
        {userRole == "worker" ? " Scan QR Code" : " Scan to check harvest"}
      </Button>
      <MapContainer
        center={{ lat: 5.6422211, lng: 118.335542 }}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "30vh", width: "90vw" }}
        className="rounded"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>

      <Modal show={pp} onHide={() => setpp(false)}>
        <Modal.Header closeButton>
          <Modal.Title>My profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1 className="text-center">{userInfo[2]}</h1>
          <h4 className="text-center">
            {userInfo[0]} / {userInfo[1]}
          </h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setpp(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
