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

const Harvest = () => {
  const navigate = useNavigate();

  const reScan = () => {
    return navigate("/");
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="text-center mt-5">
              <h2>Muhammad Ali</h2>
              <h4>PD-000002</h4>
              <h4>21 Oct 2024 11:00am</h4>
              <center>
                <InputGroup className="mb-3 w-75">
                  <FormControl
                    placeholder="Enter harvest"
                    aria-label="Input Harvest"
                  />
                  <Button variant="primary">Submit</Button>
                </InputGroup>
                <Button variant="primary" className="w-50" onClick={reScan}>
                  Re-Scan
                </Button>
              </center>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Harvest;
