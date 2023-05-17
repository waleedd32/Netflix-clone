import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setEmail, signInOrRegister } from "../features/userSlice";
import { auth } from "../firebase";

function RegisterScreen({ email }) {
  const dispatch = useDispatch();
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

  console.log("email", email);

  //   const emailRef = useRef(null);
  //   const passwordRef = useRef(null);

  const signInScreen = (e) => {
    e.preventDefault();
    dispatch(signInOrRegister("signIn"));
    dispatch(setEmail(""));
  };
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        // emailRef.current.value,
        // passwordRef.current.value
        emailInputValue,
        passwordInputValue
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <form>
      <h1>Register</h1>
      <input
        //   ref={emailRef}
        onChange={(e) => setEmailInputValue(e.target.value)}
        placeholder="Email"
        type="email"
        value={emailInputValue ? emailInputValue : email}
      />
      <input
        //   ref={passwordRef}
        onChange={(e) => setPasswordInputValue(e.target.value)}
        value={passwordInputValue}
        placeholder="Password"
        type="password"
      />
      <button type="submit" onClick={register}>
        Register
      </button>
      <h4>
        <span className="signupScreen__gray">Already have an account? </span>
        <span className="signupScreen__link" onClick={signInScreen}>
          Sign In now.
        </span>
      </h4>
    </form>
  );
}

export default RegisterScreen;
