import React from "react";

const FeatureCard = ({ featuresData }) => {
	return (
		<div>
			{
				featuresData.type == 1 ?
				<div>
					<div className="features-listing-text-cont">
						<div className="title" aria-label="Feature title">{featuresData.title}</div>
						<div className="desciption" aria-label="Feature description">{featuresData.description}</div>
						<div className="btn-cont">
							<button title="feature" type="button" role="button" aria-label="Feature button">{featuresData.buttonText}</button>
						</div>
					</div>
					<div className="features-listing-image">
						<img src={featuresData.src} alt={featuresData.title} aria-label ="Feature image" role="img" loading='lazy'/>
					</div>
				</div>
				:
				(
					<div>
						<div className="features-listing-image">
							<img src={featuresData.src} alt={featuresData.title} loading='lazy'/>
						</div>
						<div className="features-listing-text-cont">
							<div className="title" aria-label="Feature Title">{featuresData.title}</div>
							<div className="desciption" aria-label="feature description">{featuresData.description}</div>
							<div className="btn-cont">
								<button title="features" type="button" role="button" aria-label="features button">{featuresData.buttonText}</button>
							</div>
						</div>
					</div>
				)
			}
		</div>
	);
};

export default FeatureCard;
