import "./SwipeCard.css";
import { Row, Col } from "reactstrap";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SwipeCard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const location = useLocation();
  const swipeStartTime = location.state.swipeStartTime;
  const shiftData = location.state.shiftData;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const swipeData = {
    date: currentTime.toLocaleDateString(),
    shiftTime: shiftData.startTime + " to " + shiftData.endTime,
    shiftType: shiftData.shiftType,
    swipeTime: swipeStartTime,
    doorAddress: "-",
  };

  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    navigate("/home");
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="swipe-card-container">
      <div className="swipe-card">
        <div className="swipe-header">
          <h5>
            <b>Swipes</b>
          </h5>
          <div className="close-button" onClick={handleClose}>
            &times;
          </div>
        </div>
        <div className="swipe-info">
          <Row>
            <Col className="text-left" xs={4}>
              <b>Date</b> {swipeData.date}
            </Col>
            <Col className="text-center" xs={6}>
              <b>Shift Time</b> {swipeData.shiftTime}
            </Col>
            <Col className="text-right" xs={2}>
              <b>Shift Type</b> {swipeData.shiftType}
            </Col>
          </Row>
        </div>

        <table className="swipe-table">
          <thead>
            <tr>
              <th>Swipe Time</th>
              <th>Door/Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{swipeData.swipeTime}</td>
              <td>{swipeData.doorAddress}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SwipeCard;
