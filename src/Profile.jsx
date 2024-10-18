import { Card } from "react-bootstrap";
import { RiVipCrownFill } from "react-icons/ri";
import Cookies from "js-cookie";
import "./styles.css";
import dummyData from "./assets/DigitalBadgeDummyData.json";
import {
  FaAngleLeft,
  FaArrowCircleLeft,
  FaIdBadge,
  FaSignInAlt,
  FaUser,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
console.log(dummyData);
export const Profile = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div
        style={{ width: "90vw", backgroundColor: "#fff" }}
        className="ms-auto me-auto mt-4 sticky-top"
      >
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
            <h2>Profile</h2>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{ width: "60%", display: "block" }}
            className="mt-auto mb-auto"
          >
            <h1 style={{ fontSize: "2.8em" }}>
              {Cookies.get("id").split(",")[2]}
            </h1>
            <h1 className="gx-0">
              <FaUser /> {Cookies.get("id").split(",")[0]}
              <br />
              Bronze tier
            </h1>
          </div>
          <div style={{ width: "40%" }}>
            <h1
              className="ms-auto me-auto"
              style={{
                width: "2em",
                backgroundColor: "#ccc",
                borderRadius: "100%",
                height: "2em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#cd7f32",
                fontSize: "4em",
              }}
            >
              <RiVipCrownFill />
            </h1>
          </div>
        </div>
        <h4 className="text-center">
          <i>{50 - Cookies.get("points")} points left to reach silver tier</i>
        </h4>
        <div className="mb-2">
          <h2>Recent check-in locations</h2>
        </div>
      </div>
      <div style={{ width: "90vw" }} className="ms-auto me-auto">
        {dummyData.map((data) => {
          return (
            <Card className="mb-2">
              <div className="d-flex ">
                <div style={{ width: "20%" }} className="mt-auto mb-auto py-2">
                  {" "}
                  <h1
                    className="ms-auto me-auto mt-auto mb-auto"
                    style={{
                      width: "2em",
                      backgroundColor: "#ccc",
                      borderRadius: "100%",
                      height: "2em",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#000",
                      fontSize: "1.5em",
                    }}
                  >
                    <FaSignInAlt />
                  </h1>
                </div>
                <div className="gap-0 mt-auto mb-auto">
                  <Card.Title style={{ fontSize: "1.5em" }}>
                    {data.name}
                  </Card.Title>
                  <Card.Subtitle>{data.description}</Card.Subtitle>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
};
