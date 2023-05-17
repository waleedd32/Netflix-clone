import React, { useRef } from "react";

function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <form>
      {" "}
      <input ref={emailRef} placeholder="Email" type="email" />
      <input ref={passwordRef} placeholder="Password" type="password" />
      <button type="submit" onClick={signIn}>
        Sign In
      </button>
    </form>
  );
}

export default SignInScreen;
