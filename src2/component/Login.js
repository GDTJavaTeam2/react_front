import React, { useState, useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Footer from "./Footer-index";
import { login } from "../service/UserService";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import GlobalContext from "./GlobalContex";

function Login() {

  const {setUser} = useContext(GlobalContext)
  const [loginFailed, setLoginFailed] = useState(false);
  let navigate = useNavigate();
  let credentials = {
      username : '',
      password : ''
  }
  const submitForm = (e) => {
      e.preventDefault();
      login(credentials).then(
          (response) => {
              setUser(response.data.user)
              localStorage.setItem('token', response.data.token);
              navigate('/home');
              setLoginFailed(false);
          },
          (error) => {
            setLoginFailed(true);
          }
      )
  }
  
  return (
    <div>
      <div className="login-container">
        <img
          className="img-container"
          src={require("../images/header-logo.jpg")}
          alt="logo"
        />
        <div className="login-box">
          <div className="logo">
            <img src={require("../images/login-logo.jpg")} alt="logo" />
          </div>
          {loginFailed && (
        <Card className="mt-3" style={{ textAlign: 'left', backgroundColor: '#FFFBE6', border: 'none'  }}>
          <Card.Body>
            <Card.Title>Whoops!</Card.Title>
            <Card.Text>
            Seems that either username or password isn't right.
            We could help you reset your password.
            </Card.Text>
          </Card.Body>
            </Card>
          )}
          <form onSubmit={submitForm}>
            <div className="input-group">
              <label htmlFor="login-id">Login ID</label>
              <input
                type="text"
                id="login-id"
                name="login-id"
                placeholder="Employee No"
                onChange={(e) => {
                  credentials.username = e.target.value;
                }}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={(e) => {
                  credentials.password = e.target.value;
                }}
              />
            </div>
            <div className="forgot-password">
              <Link to="/forgot">
                <b>Forgot password?</b>
              </Link>
            </div>
            <button type="submit">
              <b>Log in</b>
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
