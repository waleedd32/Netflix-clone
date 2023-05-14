import React from "react";
import "./PlanScreen.css";
import { useHistory } from "react-router-dom";

function PlanScreen() {
  const history = useHistory();

  return (
    <div className="planScreen">
      <div className="planScreen__plan">
        <div className="planScreen__info">
          <h5>Premium</h5>
          <h6>4k+HDR</h6>
        </div>
        <button onClick={() => history.push("/")}>Subscribe</button>
      </div>
    </div>
  );
}

export default PlanScreen;
