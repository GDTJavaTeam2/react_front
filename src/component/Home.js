import React, { useState, useEffect, useMemo, useContext } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Row,
  Col,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import Sidebar from "./Sidebar";
import Footer from "./Footer-home";
import Header from "./Header";
import "./Home.css";
import { Link } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";
import GlobalContext from "./GlobalContex";
import { getShift } from "../service/ShiftService";
import { useNavigate } from "react-router-dom";
import { createShiftRecord } from "../service/ShiftService";
const Home = () => {
  const navigate = useNavigate();
  const {user, isSwipeStarted, setIsSwipeStarted, swipeStartTime, setSwipeStartTime} = useContext(GlobalContext)
  const [shiftRecord, setShiftRecord] = useState(null);
  const [shiftData, setShiftData] = useState(null);

  const startSwip = (e) => {
    e.preventDefault();
    setIsSwipeStarted(true);
    setSwipeStartTime(new Date());
  }
  const endSwip = (e) => {
    e.preventDefault();
    setShiftRecord((prev) => {
      const newShiftRecord = {...prev, 
        startTime: swipeStartTime.toISOString(),
        swipeType: shiftData.shiftType,
        endTime: new Date().toISOString()};
      createShiftRecord(newShiftRecord).then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    });
    
    setIsSwipeStarted(false);
    setSwipeStartTime(null);
  }

  const getShiftData = (e) => {
    e.preventDefault();
    navigate("/swipe", { state: { shiftData: shiftData, swipeStartTime: swipeStartTime?swipeStartTime.toLocaleTimeString():"" } });
  };
  
  const piechartdata = useMemo(
    () => ({
      labels: ["Engineering", "Marketing"],
      datasets: [
        {
          data: [100],
          backgroundColor: ["black"],
          borderColor: "black",
          weight: 0.1,
          spacing: 0,
        },
        {
          data: [95, 5],
          backgroundColor: ["#FF6384", "#36A2EB"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB"],
          borderWidth: 0,
          borderColor: "transparent",
          weight: 0.5,
          spacing: 5,
        },
        {
          data: [100],
          backgroundColor: "transparent",
          borderColor: "transparent",
          borderWidth: 0,
          weight: 0.4,
        },
      ],
    }),
    []
  );
  const piechartoptions = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      cutout: "10%",
      plugins: {
        legend: {
          position: "right",
        },
      },
    }),
    []
  );
  ChartJS.register(ArcElement);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    getShift(user.userId).then((response) => {
      setShiftData(response.data._embedded.shifts[0]);
      // navigate("/swipe", { state: { shiftData: response.data._embedded.shifts[0], swipeStartTime: swipeStartTime?swipeStartTime.toLocaleTimeString():"" } });
    })
    .catch((error) => {
      console.log(error);
    });
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="content">
        <Row>
          <Col md="8">
            <div style={{ textAlign: "left" }}>
              <h2>Good Evening</h2>
              <p>If not us, who? If not now, when?</p>
              <p>
                <b>- JOHN F. KENNEDY</b>
              </p>
            </div>
          </Col>

          <Col md="4" className="d-flex justify-content-end">
            <img
              src={require("../images/home-img.jpg")}
              alt="Review"
              className="img-fluid"
              style={{
                maxWidth: "100%",
                height: "auto",
                marginBottom: "20px",
              }}
            />
          </Col>
        </Row>

        <Row className="card-container">
          {/* Review Card */}
          <Col md="4">
            <Card className="custom-card">
              <CardBody style={{ marginBottom: "40px" }}>
                <CardTitle tag="h5" className="cardtitle">
                  Review
                </CardTitle>
                <img
                  src={require("../images/home-review.jpg")}
                  alt="Review"
                  className="img-fluid card-img"
                />
                <CardSubtitle className="mb-2 text-muted">
                  Hurrah! You've nothing to review.
                </CardSubtitle>
              </CardBody>
            </Card>
          </Col>

          {/* Date and Time Card */}
          <Col md="4">
            <Card
              className="custom-card "
              style={{
                backgroundColor: "#eef2ff",
              }}
            >
              <CardBody>
                <CardTitle tag="h5" className="cardtitle">
                  4 September 2024
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted cardtitle"
                  style={{ fontWeight: "300", fontSize: "14px" }}
                >
                  Wednesday | 06:35 PM to 03:35 AM
                </CardSubtitle>
                <CardText
                  className="display-4 cardtitle"
                  style={{ lineHeight: "3" }}
                >
                  {currentTime.toLocaleTimeString()}
                </CardText>
                <div
                  className="d-flex justify-content-between align-items-center mt-3"
                  style={{ marginBottom: "-30px" }}
                >
                  <Link
                    
                    className="cardtitle"
                    style={{
                      color: "#6f78db",
                      fontWeight: "normal",
                      marginTop: "-30px",
                    }}
                    onClick={getShiftData}
                  >
                    View Swipes
                  </Link>
                  {isSwipeStarted ? (
                  <Button
                    onClick={endSwip}
                    color="primary"
                    style={{
                      width: "100px",
                      backgroundColor: "#5962d9",
                      border: "none",
                    }}
                  >
                    Sign Out
                  </Button>
                  ) : (
                    <Button
                      onClick={startSwip}
                      color="primary"
                      style={{
                        width: "100px",
                        backgroundColor: "#5962d9",
                        border: "none",
                      }}>
                        Sign In
                      </Button>
                  )}
                </div>
              </CardBody>
            </Card>
          </Col>

          {/* Upcoming Holidays Card */}
          <Col md="4">
            <Card className="custom-card">
              <CardBody>
                <CardTitle tag="h5" className="cardtitle">
                  Upcoming Holidays
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted "
                  style={{
                    textAlign: "left",
                    marginLeft: "20px",
                    paddingBottom: "20px",
                    fontSize: "14px",
                  }}
                >
                  <br />
                  <b>28 Nov</b> Thursday <br />
                  Thanksgiving <br />
                  <br />
                  <b>25 Dec</b> Wednesday <br /> Christmas Day
                </CardSubtitle>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="card-container">
          {/* IT Declaration */}
          <Col md="4">
            <Card className="custom-card">
              <CardBody>
                <CardTitle tag="h5" className="cardtitle">
                  IT Decration
                </CardTitle>
                <CardText
                  className="mb-2 text-muted"
                  style={{ fontSize: "16px", textAlign: "left" }}
                >
                  Hurrah! Considered your IT declaration for Aug 2024.
                </CardText>
                <Button
                  style={{
                    width: "80px",
                    backgroundColor: "transparent",
                    borderColor: "#6f78db",
                    color: "#6f78db",
                    position: "absolute",
                    right: "20px",
                    bottom: "-20px",
                  }}
                >
                  View
                </Button>
              </CardBody>
            </Card>
          </Col>

          {/*  Payslip Card */}
          <Col md="4">
            <Card className="custom-card" style={{ marginTop: "-3.5rem" }}>
              <CardBody>
                <CardTitle tag="h5" className="cardtitle">
                  Payslip
                </CardTitle>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ width: "60%", height: "200px" }}>
                    <Pie data={piechartdata} options={piechartoptions} />
                  </div>
                  <div style={{ width: "35%", textAlign: "right" }}>
                    <p>
                      <b>Aug 2024</b>
                    </p>
                    <p>
                      <b>21</b>
                      <br />
                      Paid Days
                    </p>
                  </div>
                </div>
                <div>
                  <ListGroup>
                    {/* Gross Pay */}
                    <ListGroupItem style={{ border: "none" }}>
                      <Row className="align-items-center">
                        <Col xs="1">
                          <div
                            style={{
                              backgroundColor: "#000",
                              width: "4px",
                              height: "24px",
                            }}
                          />
                        </Col>
                        <Col xs="6">Gross Pay</Col>
                        <Col xs="4" className="text-right">
                          ₹*****
                        </Col>
                      </Row>
                    </ListGroupItem>

                    {/* Deduction */}
                    <ListGroupItem style={{ border: "none" }}>
                      <Row className="align-items-center">
                        <Col xs="1">
                          <div
                            style={{
                              backgroundColor: "#d1e7dd",
                              width: "4px",
                              height: "24px",
                            }}
                          />
                        </Col>
                        <Col xs="6">Deduction</Col>
                        <Col xs="4" className="text-right">
                          ₹*****
                        </Col>
                      </Row>
                    </ListGroupItem>

                    {/* Net Pay */}
                    <ListGroupItem style={{ border: "none" }}>
                      <Row className="align-items-center">
                        <Col xs="1">
                          <div
                            style={{
                              backgroundColor: "#007bff",
                              width: "4px",
                              height: "24px",
                            }}
                          />
                        </Col>
                        <Col xs="6">Net Pay</Col>
                        <Col xs="4" className="text-right">
                          ₹*****
                        </Col>
                      </Row>
                    </ListGroupItem>
                  </ListGroup>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <Link
                    to="/download"
                    className="cardtitle"
                    style={{
                      color: "#6f78db",
                      fontWeight: "normal",
                    }}
                  >
                    Download
                  </Link>
                  <Link
                    to="/salary"
                    className="cardtitle"
                    style={{
                      color: "#6f78db",
                      fontWeight: "normal",
                    }}
                  >
                    Show Salary
                  </Link>
                </div>
              </CardBody>
            </Card>
          </Col>

          {/* Quick Access Card */}
          <Col md="4">
            <Card className="custom-card" style={{ marginTop: "-2.4rem" }}>
              <CardBody>
                <CardTitle tag="h5" className="cardtitle">
                  Quick Access
                </CardTitle>

                <CardText
                  className="mb-2 text-muted"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      textAlign: "left",
                      fontSize: "13px",
                      fontWeight: "bold",
                      lineHeight: "2",
                    }}
                  >
                    Reimbursement Payslip <br />
                    IT Statement
                    <br />
                    YTD Reports
                    <br />
                    Loan Statement
                    <br />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "200px",
                      bottom: "0px",
                      right: "0px",
                      backgroundColor: "#fdf2e3",
                      padding: "15px",
                      borderRadius: "10px",
                      textAlign: "left",
                      fontSize: "12px",
                    }}
                  >
                    <span>
                      Use quick access to view important salary details.
                    </span>
                  </div>
                </CardText>
              </CardBody>
            </Card>
          </Col>

          {/* POI Card */}
          <Col md="4">
            <Card className="custom-card" style={{ marginTop: "-15.2rem" }}>
              <CardBody>
                <CardTitle tag="h5" className="cardtitle">
                  POI
                </CardTitle>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={require("../images/home-POI.jpg")}
                    alt="Review"
                    className="img-fluid card-img"
                    style={{ width: "45px", height: "55px", margin: 0 }}
                  />
                  <CardText className="mb-2 text-muted">
                    Hold on! You can submit your Proof of Investment(POI) once
                    released.
                  </CardText>
                </div>
              </CardBody>
            </Card>
          </Col>

          {/* Track Card */}
          <Col md="4">
            <Card className="custom-card" style={{ marginTop: "-14.6rem" }}>
              <CardBody>
                <CardTitle tag="h5" className="cardtitle">
                  Track
                </CardTitle>
                <img
                  src={require("../images/home-track.jpg")}
                  alt="Review"
                  className="img-fluid card-img"
                  style={{ width: "200px", height: "auto" }}
                />
                <CardSubtitle className="mb-2 text-muted">
                  All good! You've nothing to track.
                </CardSubtitle>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
