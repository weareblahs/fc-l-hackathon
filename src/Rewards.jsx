import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { Badge, Col, Image, Row } from "react-bootstrap";
export const Rewards = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div style={{ width: "90vw" }} className="ms-auto me-auto mt-4">
        <div className="d-flex">
          <div className="me-2">
            <h2
              className="userHover mt-auto mb-auto rounded-pill"
              onClick={() => Navigate("/")}
            >
              <FaAngleLeft />
            </h2>
          </div>
          <div className="mt-auto">
            <h2>Rewards</h2>
          </div>
        </div>
        <Row>
          <Col md={6} className="col-6">
            <img
              src="https://iili.io/2droUJf.jpg"
              className="img-thumbnail"
              style={{ width: "100%" }}
            />
            <h2>
              AEON RM10 Voucher
              <br />
              <Badge style={{ fontSize: "0.5em" }}>50 points</Badge>
              <Badge style={{ fontSize: "0.5em" }} className="ms-2">
                Family
              </Badge>
            </h2>
          </Col>
          <Col md={6} className="col-6">
            <img
              src="https://iili.io/2drecX4.png"
              className="img-thumbnail"
              style={{ width: "100%" }}
            />
            <h2>
              BP Healthcare Free Screening
              <br />
              <Badge style={{ fontSize: "0.5em" }}>50 points</Badge>
              <Badge style={{ fontSize: "0.5em" }} className="ms-2">
                Healthcare
              </Badge>
            </h2>
          </Col>
          <Col md={6} className="col-6">
            <img
              src="https://iili.io/2draE91.png"
              className="img-thumbnail"
              style={{ width: "100%" }}
            />
            <h2>
              Touch 'n Go eWallet RM10 Reload PIN
              <br />
              <Badge style={{ fontSize: "0.5em" }}>50 points</Badge>
              <Badge style={{ fontSize: "0.5em" }} className="ms-2">
                Personal
              </Badge>
            </h2>
          </Col>
          <Col md={6} className="col-6">
            <img
              src="https://iili.io/2droUJf.jpg"
              className="img-thumbnail"
              style={{ width: "100%" }}
            />
            <h2>
              AEON RM10 Voucher
              <br />
              <Badge style={{ fontSize: "0.5em" }}>50 points</Badge>
              <Badge style={{ fontSize: "0.5em" }} className="ms-2">
                Personal
              </Badge>
            </h2>
          </Col>
        </Row>
      </div>
    </>
  );
};
