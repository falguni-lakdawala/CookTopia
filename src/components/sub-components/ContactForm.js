import Input from "../composable-components/Input";

const ContactForm = ({ input_number }) => {
  return (
    <div className="homepage-contact-form">
			<div className="max-width-cont">
				<div className="heading">
					<h3 role="heading">Contact Us</h3>
				</div>
				<div className="subheading">
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
				</div>
				<div className="form">
					<div className="input-group">
						{input_number.map((input) => (
							<Input
								key={input.toString()}
								style={input[1].style}
								title={input[1].title}
								placeholder={input[1].placeholder}
							/>
						))}
						<textarea role="textbox" aria-label="Enter your feedback" placeholder="Share your feedback"></textarea>
					</div>
					<button role="button" aria-label="submit contact form" title="submit" type="submit">Submit</button>
				</div>
			</div>
    </div>
  );
};

export default ContactForm;
