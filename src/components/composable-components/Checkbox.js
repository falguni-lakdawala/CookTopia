import { useRef } from "react";

const Checkbox = ({ className, defaultChecked }) => {
	const ref = useRef();
	const toggleCheckbox = () => {
	}

	return (
		<div className="custom-checkbox">
			<div className="custom-design-cont">
				<div className="outer-circle">
					<div className="inner-circle"></div>
				</div>
			</div>
			<div className="checkbox-cont">
				<input
					role="checkbox"
					aria-label="Checkbox"
					type="checkbox"
					className={className}
					defaultChecked={defaultChecked}
					onClick={toggleCheckbox}
					ref={ref}
				/>
			</div>
		</div>
	)
}

export default Checkbox;
