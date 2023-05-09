import React, { useRef, useState } from "react";

function RegisterScreen({ email }) {
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

  console.log("email", email);

  //   const emailRef = useRef(null);
  //   const passwordRef = useRef(null);

  const signInScreen = (e) => {
    e.preventDefault();
  };
  const register = (e) => {
    e.preventDefault();
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
    </form>
  );
}

export default RegisterScreen;
