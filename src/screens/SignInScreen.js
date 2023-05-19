import React, { useRef } from "react";

function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <form>
      <h1>Sign In</h1>
      <input ref={emailRef} placeholder="Email" type="email" />
      <input ref={passwordRef} placeholder="Password" type="password" />
      <button type="submit">Sign In</button>
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
