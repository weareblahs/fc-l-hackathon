import {
  Container,
  Row,
  Col,
  Button,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { FaAngleLeft } from "react-icons/fa";
import { addPoints } from "./APIActions";
const Harvest = () => {
  const navigate = useNavigate();
  const [h, chd] = useState(0);
  const reScan = () => {
    return navigate("/managementqr");
  };

  const confirmSubmit = () => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Ok",
      denyButtonText: `Re-scan`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        submitAndAddPoint();
        navigate("/");
      } else if (result.isDenied) {
        navigate("/managementqr");
      }
    });
  };
  const changeHarvest = (v) => {
    chd(v);
  };
  const submitAndAddPoint = () => {
    const user = JSON.parse(localStorage.getItem("userList")).filter(
      (a) => a.id === Cookies.get("harvestUser")
    )[0]._id;
    addPoints(user, h);
  };
  return (
    <>
      <div style={{ width: "90vw" }} className="ms-auto me-auto mt-4">
        <Row>
          <Col>
            <div className="text-center mt-2 position-relative">
              <div className="d-flex">
                <div className="me-2">
                  <h2
                    className="userHover mt-auto mb-auto rounded-pill"
                    onClick={() => navigate("/managementqr")}
                  >
                    <FaAngleLeft />
                  </h2>
                </div>
                <div className="mt-auto">
                  <h2>Submit harvest data</h2>
                </div>
              </div>

              <div className="mt-5">
                <h2>
                  {
                    JSON.parse(localStorage.getItem("userList")).filter(
                      (a) => a.id === Cookies.get("harvestUser")
                    )[0].name
                  }
                </h2>
                <h4>
                  {" "}
                  {
                    JSON.parse(localStorage.getItem("userList")).filter(
                      (a) => a.id === Cookies.get("harvestUser")
                    )[0].id
                  }
                </h4>

                <div className="d-flex justify-content-center mt-5 flex-column">
                  <InputGroup className="mb-3 w-100 ">
                    <FormControl
                      placeholder="Enter harvest"
                      aria-label="Input Harvest"
                      className=""
                      type="number"
                      onChange={(e) => changeHarvest(e.target.value)}
                    />
                  </InputGroup>
                  <label>
                    <i>Current system: 1 harvest = 1 point</i>
                  </label>
                  <Button
                    variant="primary"
                    className=" w-100"
                    onClick={confirmSubmit}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Harvest;
