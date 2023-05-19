import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setEmail, signInOrRegister } from "../features/userSlice";
import { auth } from "../firebase";

function SignInScreen() {
  const dispatch = useDispatch();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = (e) => {
    e.preventDefault();
    dispatch(setEmail(""));

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <form>
      <h1>Sign In</h1>
      <input ref={emailRef} placeholder="Email" type="email" />
      <input ref={passwordRef} placeholder="Password" type="password" />
      <button type="submit" onClick={signIn}>
        Sign In
      </button>
      <h4>
        <span className="signupScreen__gray">New to Jebordoq? </span>
        <span
          className="signupScreen__link"
          onClick={() => dispatch(signInOrRegister("register"))}
        >
          {" "}
          Sign Up now.{" "}
        </span>
      </h4>
    </form>
  );
}

export default SignInScreen;
