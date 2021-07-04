import React from "react";
import Images from "../../composable-components/Images";
import Input from "../../composable-components/Input";

const Signup = () => {
  return (
    <div className="signup">
      <h1 role="heading" aria-label="Sign up heading">Sign up</h1>
      {/* <div className="image_wrapper">
        <Images src={"https://picsum.photos/200"} alt={"profile_image"} />
        <div className="imagecover">
          <p>Add image</p>
        </div>
      </div> */}
			<div className="profile-image-cont">
				<img role="img" aria-label="Profile" src={"https://picsum.photos/200"} alt={"profile_image"} />
				<button role="button" aria-label="profile image" title="add image" type="button" className="add-profile-image-btn">
					Add Image
				</button>
			</div>
			<div className="signup-inputs-cont">
				<div className="signup-inputs-1">
					<Input type={"text"} placeholder={"Enter your username"} />
					<Input type={"email"} placeholder={"Enter your email"} />
					<Input type={"password"} placeholder={"Enter your password "} />
				</div>
				<div className="signup-inputs-2">
					<button role="button" aria-label="sign up" title="sign up" className="signup-inputs-signup-btn" type="button">Signup</button>
				</div>
			</div>
    </div>
  );
};

export default Signup;
