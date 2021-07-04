import React from "react";

const FeatureCard = ({ featuresData }) => {
	return (
		<div>
			{
				featuresData.type == 1 ?
				<div>
					<div className="features-listing-text-cont">
						<div className="title">{featuresData.title}</div>
						<div className="desciption">{featuresData.description}</div>
						<div className="btn-cont">
							<button type="button">{featuresData.buttonText}</button>
						</div>
					</div>
					<div className="features-listing-image">
						<img src={featuresData.src} alt={featuresData.title} />
					</div>
				</div>
				:
				(
					<div>
						<div className="features-listing-image">
							<img src={featuresData.src} alt={featuresData.title} />
						</div>
						<div className="features-listing-text-cont">
							<div className="title">{featuresData.title}</div>
							<div className="desciption">{featuresData.description}</div>
							<div className="btn-cont">
								<button type="button">{featuresData.buttonText}</button>
							</div>
						</div>
					</div>
				)
			}
		</div>
	);
};

export default FeatureCard;
