import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect} = useAuth0();
  return (
    <div className="loginpage">
      <header>
        <div className="logo">
          <h3>TastyBits</h3>
        </div>
      </header>
      <div className="main">
        <h3>Welcome</h3>
        <div className="logincard">
          <div className="signup">
            <h4>New User</h4>
            <button
              onClick={() =>
                loginWithRedirect({ screen_hint: "signup" } )
              }
            >
              Sign up
            </button>
          </div>
          <div className="login">
            <h4>Already have an account</h4>
            <button onClick={() => loginWithRedirect()}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
