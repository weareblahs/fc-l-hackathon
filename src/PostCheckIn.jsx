import { Badge, Button, Container } from "react-bootstrap";
import { MdCheckCircle } from "react-icons/md";
import moment from "moment/moment";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
export const PostCheckIn = () => {
  const Navigate = useNavigate();
  const d = Cookies.get("tempCheckInData").time;
  const [t, st] = useState(5);
  useEffect(() => {
    if (t == 0) {
      Navigate("/");
    }
  }, [t]);
  setInterval(() => {
    st(t - 1);
  }, 1000);
  return (
    <div style={{ width: "90vw" }} className="ms-auto me-auto mt-4 text-center">
      <h1>Scan successful</h1>
      <span className="" style={{ fontSize: "10em", color: "#32a852" }}>
        <MdCheckCircle />
      </span>
      <center>
        <Badge
          style={{
            backgroundColor: "#32a852",
            paddingLeft: "1em",
            paddingRight: "1em",
            paddingTop: "0.5em",
            paddingBottom: "0.5em",
          }}
        >
          <h4 className="mt-auto mb-auto">+1 point</h4>
        </Badge>
      </center>
      <div className="mt-2 mb-2">
        <h4>Checkpoint name</h4>
        <h1>{Cookies.get("lastCheckIn")}</h1>
      </div>
      <div className="mt-2 mb-2">
        <h4>Date and time</h4>
        <h1>{moment(d).format("MMMM Do, YYYY, h:mm A")}</h1>
      </div>
      <h4>Bringing you back to home page in {t} seconds...</h4>
    </div>
  );
};
