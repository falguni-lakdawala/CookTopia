import React from "react";

const Checkbox = ({ className, defaultChecked,name}) => {
	const toggleCheckbox = (e) => {
		const target = e.target.parentElement.previousSibling.children[0].children[0];
		target.classList.toggle("active");
	};

	return (
		<div className="custom-checkbox">
			<div className="custom-design-cont">
				<div className="outer-circle">
					<div className="inner-circle active"></div>
				</div>
			</div>
			<div className="checkbox-cont">
				<input
					role="checkbox"
					aria-label="Checkbox"
					type="checkbox"
					className={className}
					defaultChecked={defaultChecked}
					onClick={(e) => toggleCheckbox(e)}
				/>
			</div>
		</div>
	);
};

Checkbox.defaultProps = {
	defaultChecked: true,
};

export default Checkbox;
