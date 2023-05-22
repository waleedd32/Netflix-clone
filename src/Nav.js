import React, { useState, useEffect } from "react";
import "./Nav.css";
import jebordoq from "./logo/jebordoq.png";
import { useHistory } from "react-router-dom";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push("/")}
          className="nav__logo"
          src={jebordoq}
          alt="Jebordoq Logo"
        />
        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
          alt="Jebordoq Logo"
        />
      </div>
    </div>
  );
}

export default Nav;
