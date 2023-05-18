import React from "react";
import { auth } from "../firebase";
import Nav from "../Nav";
import PlanScreen from "./PlanScreen";
import "./ProfileScreen.css";

function ProfileScreen() {
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            //   onClick={() => history.push("/profile")}
            //   className="nav__avatar"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
            alt="Jebordoq Logo"
          />
          <div className="profileScreen__details">
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <PlanScreen />
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
