import React from 'react'
import {Link} from 'react-router-dom'
import Button from '../composable-components/Button'
import Input from '../composable-components/Input'
import { useHistory}  from 'react-router-dom'

const Login = () => {
    const history=useHistory();
    return (
      <div className="login">
        <h1>Login</h1>
        <div className="logininputs">
          <div className="logininputs1">
            <Input type={"email"} placeholder={"Enter your email"} />
            <Input type={"password"} placeholder={"Enter your password"} />
            <Link to={{ pathname: "/forgot" }}>forgot password</Link>
          </div>
          <div className="logininputs2">
            <button
              type="button"
              onClick={() => {
                history.push("/home");
              }}
            >
              Login
            </button>
            <Button text={"Signup"} />
          </div>
        </div>
      </div>
    );
}

export default Login
