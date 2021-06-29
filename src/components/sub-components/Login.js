import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../composable-components/Button';
import Input from '../composable-components/Input';
import { useHistory}  from 'react-router-dom';

const Login = () => {
    const history=useHistory();
    return (
      <div className="login">
        <h1>Log in</h1>
        <div className="login-inputs-cont">
          <div className="login-inputs-1">
            <Input type={"email"} placeholder={"Email"} />
            <Input type={"password"} placeholder={"Password"} />
            <Link to={{ pathname: "/forgot" }}>Forgot your password?</Link>
          </div>
          <div className="login-inputs-2">
            <button
							className="login-inputs-login-btn"
              type="button"
              onClick={() => {
                history.push("/home");
              }}
            >
              Log in
            </button>
            <button
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
