import React, { useRef } from "react";

export default function Login() {
  let userRef = useRef();
  let passwordRef = useRef();

  const submitLogin = (e) => {
    if (
      userRef.current.value !== "dviryadai" ||
      passwordRef.current.value !== "zzx991zx"
    ) {
      alert("Username or Password are incorrect");
      e.preventDefault();
      return false;
    }
  };

  const visibility = () => {
    if (passwordRef.current.type === "password") {
      passwordRef.current.type = "text";
    } else {
      passwordRef.current.type = "password";
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form action="/profile" onSubmit={(e) => submitLogin(e)}>
        <input placeholder="UserName" ref={userRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="button" onClick={visibility}>
          visibility
        </button>
        <button>Login</button>
      </form>
    </div>
  );
}
