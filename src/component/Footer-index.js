import React from "react";

function Footer() {
  return (
    <div
      style={{
        fontSize: "12px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        color: "#6c757d",
      }}
    >
      <p>
        © Greytip Software Pvt.Ltd |{" "}
        <a
          // style={{ color: "#6c757d" }}
          href="https://centillionzit.greythr.com/v2/static-content/privacy-policy"
        >
          Privacy Policy
        </a>
        |{" "}
        <a
          // style={{ color: "#6c757d" }}
          href="https://centillionzit.greythr.com/v2/static-content/terms-of-use"
        >
          Terms of Service
        </a>
      </p>
    </div>
  );
}

export default Footer;
