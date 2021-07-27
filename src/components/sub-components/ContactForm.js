import { useState, useRef } from "react";
import { sendForm } from "emailjs-com";
import Modal from "../composable-components/Modal";

const ContactForm = ({ input_number }) => {
  const [data, setData] = useState({});
  const ref = useRef();

  // Form data handler
  const handleData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  // Form submit handler
  const serviceid = process.env.REACT_APP_serviceid;
  const templateid = process.env.REACT_APP_templateid;
  const userid = process.env.REACT_APP_userid;
  const handleSubmit = (e) => {
    e.preventDefault();
    sendForm([serviceid], [templateid], ref.current, [userid]).then(
      function (response) {
        document
          .querySelector("#contact-form-success-modal")
          .classList.add("active");
      },
      function (error) {
        alert("Failed to send email");
      }
    );
  };

  return (
    <div className="homepage-contact-form">
      <div className="max-width-cont">
        <div className="heading">
          <h3 role="heading">Contact Us</h3>
        </div>
        <div className="subheading">
          <p>
            Feel free to contact us any time.
            <br />
            We will get back to you as soon as we can!
          </p>
        </div>
        <div className="form">
          <form ref={ref} onSubmit={(e) => handleSubmit(e)}>
            <div className="input-group">
              {input_number.map((input, i) => (
                <input
                  name={input[1].name}
                  key={input.toString + i}
                  onChange={(e) => handleData(e)}
                  title={input[1].title}
                  placeholder={input[1].placeholder}
                  required
                  type={input[1].type}
                  required
                />
              ))}
              <textarea
                name="feedback"
                onChange={(e) => handleData(e)}
                role="textbox"
                aria-label="Enter your feedback"
                placeholder="Share your feedback"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              role="button"
              aria-label="submit contact form"
              title="submit"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Modal
        id={"contact-form-success-modal"}
        message={"Thank you for the feedback!"}
      />
    </div>
  );
};

export default ContactForm;
