import React from 'react';
import {Link} from 'react-router-dom';
import Input from '../../composable-components/Input';
import { useHistory}  from 'react-router-dom';

const Login = () => {
    const history=useHistory();
    return (
      <div className="login">
        <h1 role="heading" aria-label="Log in heading">Log in</h1>
        <div className="login-inputs-cont">
          <div className="login-inputs-1">
            <Input type={"email"} placeholder={"Email"} />
            <Input type={"password"} placeholder={"Password"} />
            <Link to={{ pathname: "/forgot" }}>Forgot your password?</Link>
          </div>
          <div className="login-inputs-2">
            <button title="login" role="button" aria-label="login"
							className="login-inputs-login-btn"
              type="button"
              onClick={() => {
                history.push("/home");
              }}
            >
              Log in
            </button>
            <button
            role="button"
            aria-label="Register"
            title="register"
							className="login-inputs-register-btn"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    );
}

export default Login
