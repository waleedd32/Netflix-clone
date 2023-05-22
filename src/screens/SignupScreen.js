import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInOrRegister } from "../features/userSlice";
import { auth } from "../firebase";

function SignupScreen({ email }) {
  // const [showSignIn, setShowSignIn] = useState(true);
  const showSignIn = useSelector((state) => state.user.showSignIn);

  return (
    <div className="signupScreen">
      {showSignIn === "signIn" && <div>SignInScreen</div>}
      {showSignIn === "register" && <div>RegisterScreen</div>}
    </div>
  );
}

export default SignupScreen;
