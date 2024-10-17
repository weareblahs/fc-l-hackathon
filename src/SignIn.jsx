import { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormLabel,
  Image,
} from "react-bootstrap";
import "./assets/iconextended.png";
import Cookies from "js-cookie";
import { GetUserInfo, postSignIn } from "./APIActions";
function SignIn() {
  const [nv, cnv] = useState("000000");
  const updateNumberValue = (n) => {
    cnv(n);
  };
  const submitNumber = (id) => {
    postSignIn(id);
    if (Cookies.get("id")) {
      window.location.reload();
    }
  };
  return (
    <Container
      style={{
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <div style={{ display: "block" }}>
        <center>
          <Image src="/assets/iconextended.png" className="w-50"></Image>
          <Form className="text-center w-50">
            <FormLabel>Staff ID</FormLabel>
            <FormControl
              type="number"
              className="text-center"
              style={{ fontSize: "2em" }}
              onChange={(e) => updateNumberValue(e.target.value)}
            ></FormControl>
            <Button
              className="btn btn-lg mt-2"
              onClick={() => submitNumber(nv)}
            >
              Access
            </Button>
          </Form>
        </center>
      </div>
    </Container>
  );
}

export default SignIn;
