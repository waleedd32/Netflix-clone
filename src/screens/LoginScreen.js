import React, { useRef, useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";
import jebordoq from "../logo/jebordoq.png";
import { signInOrRegister, setEmail } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

function LoginScreen() {
  const email = useSelector((state) => state.user.email);
  const [signIn, setSignIn] = useState(false);

  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();

    setSignIn(true);
    dispatch(signInOrRegister("register"));
  };

  const signInScreen = () => {
    setSignIn(true);
    dispatch(signInOrRegister("signIn"));
  };

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img className="loginScreen__logo" src={jebordoq} alt="" />
        <button onClick={signInScreen} className="loginScreen__button">
          Sign in
        </button>
        <div className="loginScreen__gradient" />
        <div
          className={`loginScreen__body ${
            signIn && "loginScreen__body__signIn"
          }`}
        >
          {signIn ? (
            <SignupScreen email={email} />
          ) : (
            <>
              <h1>Access endless movies, TV shows, and more..</h1>
              <h2>Stream anywhere. Cancel anytime.</h2>
              <h3>
                Ready to watch? Sign up or restart membership with your email.
              </h3>
              <div className="loginScreen__form">
                <form>
                  <div className="loginScreen__input__button">
                    <input
                      onChange={(e) => dispatch(setEmail(e.target.value))}
                      placeholder="Email Address"
                      type="email"
                    />
                    <button
                      type="submit"
                      onClick={register}
                      className="loginScreen__getStarted"
                    >
                      GET STARTED
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
