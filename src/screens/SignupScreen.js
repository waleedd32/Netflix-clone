import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInOrRegister } from "../features/userSlice";
import { auth } from "../firebase";
import RegisterScreen from "./RegisterScreen";
import SignInScreen from "./SignInScreen";
import "./SignupScreen.css";

function SignupScreen({ email }) {
  // const [showSignIn, setShowSignIn] = useState(true);
  const showSignIn = useSelector((state) => state.user.showSignIn);

  return (
    <div className="signupScreen">
      {showSignIn === "signIn" && <SignInScreen />}
      {showSignIn === "register" && <RegisterScreen email={email} />}
    </div>
  );
}

export default SignupScreen;
