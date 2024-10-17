import Cookies from "js-cookie";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { FaRegUserCircle, FaQrcode, FaGift } from "react-icons/fa";
import {
  Row,
  Col,
  Button,
  Image,
  Modal,
  Card,
  CardHeader,
  ProgressBar,
  CardBody,
} from "react-bootstrap";
import "./assets/icon.png";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { cookieViewCheckin, point } from "./APIActions";
import moment from "moment";
export const Management = () => {
  const userInfo = Cookies.get("id").split(",");
  const position = [];
  const userRole = userInfo[1];
  const [pp, setpp] = useState(false);
  useEffect(() => {
    cookieViewCheckin();
  }, []);

  const logOut = () => {
    const confirmation = confirm("Are you sure you want to log out?");
    if (confirmation) {
      Cookies.remove("id");
      window.location.reload();
    }
  };
  point(Cookies.get("user"));
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
        <div className="w-100">
          <Button
            className="btn btn-success btn-lg w-100 mt-2 mb-2"
            onClick={() => Navigate("/managementqr")}
          >
            <h4 className="m-0 p-0">
              <FaQrcode
                className="me-2 ms-auto me-auto button mb-2"
                style={{ fontSize: "2em" }}
              />
              <br />
              Record harvest info
            </h4>
          </Button>
        </div>
      </Row>

      <MapContainer
        center={{ lat: 5.6422211, lng: 118.335542 }}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "40vh", width: "90vw" }}
        className="rounded"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      <h1>Recent check-ins</h1>
      <div style={{ height: "40vh", width: "90vw", overflowX: "scroll" }}>
        {JSON.parse(localStorage.getItem("recentCheckpoints"))?.data?.map(
          (c) => {
            // dummy data, except the time
            const check = "test";
            return (
              <Card>
                <CardBody>
                  <div className="gap-0 mt-auto mb-auto">
                    <Card.Title style={{ fontSize: "1.5em" }}>
                      Checkpoint 1
                    </Card.Title>
                    <Card.Subtitle>
                      Checked in by Staff 1 on{" "}
                      {moment(c?.data?.time).format("MMMM Do, YYYY, h:mm A")}
                    </Card.Subtitle>
                  </div>
                </CardBody>
              </Card>
            );
          }
        )}
      </div>
      <Modal show={pp} onHide={() => setpp(false)}>
        <Modal.Body className="p-5">
          <center>
            Signed in as {userInfo[2]} ({userInfo[0]})
          </center>

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
