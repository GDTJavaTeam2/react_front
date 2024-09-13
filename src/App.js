import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./component/Home";
// import Property from "./component/Property";
// import Reservation from "./component/Reservation";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Forgot from "./component/ForgotPassword";
// import Footer from "./component/Footer-index";
// import Sidebar from "./component/Sidebar";
import Home from "./component/Home";
import SwipeCard from "./component/SwipeCard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Sidebar /> */}
        {/* <Header /> */}
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/swipe" element={<SwipeCard />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
