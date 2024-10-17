import Cookies from "js-cookie";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { FaRegUserCircle, FaQrcode, FaGift } from "react-icons/fa";
import { Row, Col, Button, Image, Modal } from "react-bootstrap";
import "./assets/icon.png";
import { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const userInfo = Cookies.get("id").split(",");
  const position = [];
  const userRole = userInfo[1];
  const [pp, setpp] = useState(false);
  const logOut = () => {
    const confirmation = confirm("Are you sure you want to log out?");
    if (confirmation) {
      Cookies.remove("id");
      window.location.reload();
    }
  };
  const Navigate = useNavigate();
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
            src="./assets/icon.png"
            className="img-responsive"
            width={"32px"}
          />
        </div>
      </div>
      <Row>
        <div className="w-50">
          <Button
            className="btn btn-success btn-lg w-100 mt-2 mb-2"
            onClick={() => Navigate("/qr")}
          >
            <h4 className="m-0 p-0">
              <FaQrcode
                className="me-2 ms-auto me-auto button mb-2"
                style={{ fontSize: "2em" }}
              />
              <br />
              Scan QR Code
            </h4>
          </Button>
        </div>
        <div className="w-50">
          <Button className="btn btn-primary btn-lg w-100 mt-2 mb-2">
            <h4 className="m-0 p-0">
              <FaGift
                className="me-2 ms-auto me-auto button mb-2"
                style={{ fontSize: "2em" }}
              />
              <br />
              Redeem rewards
            </h4>
          </Button>
        </div>
      </Row>
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
        <Modal.Body>
          <Modal.Title className="text-center">My profile</Modal.Title>
          <h1 className="text-center">{userInfo[2]}</h1>
          <h4 className="text-center">
            {userInfo[0]} / {userInfo[1]}
          </h4>
          <center>
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={`[harvest,${userInfo[0]}]`}
              viewBox={`0 0 256 256`}
              className="w-75"
            />
          </center>
          <p className="text-center">
            Show this QR code for the supervisor to scan
          </p>
          <div className="d-flex">
            <div className="w-50 me-2">
              {" "}
              <Button
                variant="secondary"
                onClick={() => setpp(false)}
                className="w-100"
              >
                Close
              </Button>
            </div>
            <div className="w-50">
              <Button
                variant="danger"
                onClick={() => logOut()}
                className="w-100"
              >
                Log out
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
