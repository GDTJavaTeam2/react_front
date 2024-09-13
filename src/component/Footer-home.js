import React from "react";

function Footer() {
  return (
    //
    <div
      style={{
        width: "100vw",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "10px 0",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "12px", color: "#6c757d" }}>
        {/* <p> */}
        v6.3.0-prod-566 |{" "}
        <a
          style={{ color: "#6c757d" }}
          href="https://centillionzit.greythr.com/v2/static-content/privacy-policy"
        >
          Privacy Policy
        </a>{" "}
        |{" "}
        <a
          style={{ color: "#6c757d" }}
          href="https://centillionzit.greythr.com/v2/static-content/terms-of-use"
        >
          Terms of Service
        </a>
        {/* </p> */}
      </div>
    </div>
  );
}

export default Footer;
