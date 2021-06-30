import React from "react";
import Images from "../composable-components/Images";
import Input from "../composable-components/Input";

const Signup = () => {
  return (
    <div className="signup">
      <h2>Sign up</h2>

      <div className="image_wrapper">
        <Images src={"https://picsum.photos/200"} alt={"profile_image"} />

        <div className="imagecover">
          <p>Add image</p>
        </div>
      </div>

      <div className="inputs">
          
        <Input type={"text"} placeholder={"Enter your username"} />
        <Input type={"email"} placeholder={"Enter your email"} />
        <Input type={"password"} placeholder={"Enter your password "} />

        <button type="text">Signup</button>
      </div>
    </div>
  );
};

export default Signup;
