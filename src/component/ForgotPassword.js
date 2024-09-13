import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Forgot() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const backLoginBuffer = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 3000);
  };

  return (
    <div className="login-container">
      {isLoading ? (
        <div className="loading-screen">
          <p>Just a moment, we're getting things ready for you...</p>
        </div>
      ) : (
        <div>
          <img
            className="img-container"
            src={require("../images/header-logo.jpg")}
            alt="logo"
          />
          <div className="login-box">
            <div className="logo">
              <img src={require("../images/login-logo.jpg")} alt="logo" />
            </div>
            <h2>
              <b>Forgot password? That's okay! Let's change it 😊</b>
            </h2>
            <form>
              <div className="input-group">
                <label htmlFor="login-id">Login ID</label>
                <input
                  type="text"
                  id="login-id"
                  placeholder="Enter your Login ID"
                />
              </div>
              <button type="submit">
                <b>Continue</b>
              </button>

              <div className="forgot-password">
                <div
                  onClick={backLoginBuffer}
                  style={{
                    cursor: "pointer",
                    color: "#3688df",
                    textDecoration: "underline",
                  }}
                >
                  <b>Back to login</b>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Forgot;
