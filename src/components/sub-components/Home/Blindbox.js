import blindboxHeroImage from "../../../assets/blindbox/blindbox-hero-image.svg";
import { Link } from "react-router-dom";

const Blindbox = ({ style }) => {
	return (
		<div className="blindbox-hero-cont">
			<div className="max-width-cont">
				<div className="blindbox-hero-text">
					Cooktopia provides a variety of recipes, <br />
					nutrition data, and nearby grocery shops. <br />
					<br />
					Anyone could enjoy well-being life <br />
					based on well-balanced diet at home.
				</div>
				<div className="blindbox-hero-image-btn">
					<div className="blindbox-hero-image-cont">
						<img
							src={blindboxHeroImage}
							alt="hero image"
							role="img"
							aria-label="box image"
						/>
					</div>
					<div className="blindbox-hero-btn-cont">
						<Link to="/recipes">
							<button
								title="browse recipes"
								type="button"
								className="blindbox-hero-btn"
								role="button"
								aria-label="button"
							>
								Browse Recipes
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blindbox;
