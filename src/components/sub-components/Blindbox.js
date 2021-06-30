import Button from '../composable-components/Button';
import blindboxHeroImage from '../../assets/blindbox/blindbox-hero-image.svg';

const Blindbox = ({ style }) => {
	return (
		<div className="blindbox-hero-cont">
			<div className="blindbox-hero-text">
				Cooktopia provides a variety of recipes,<br />
				nutrition data, and nearby grocery shops.<br /><br />
				Anyone could enjoy well-being life<br />
				based on well-balanced diet at home.
			</div>
			<div className="blindbox-hero-image-btn">
				<div className="blindbox-hero-image-cont">
					<img src={blindboxHeroImage} alt="blindbox hero image" />
				</div>
				<div className="blindbox-hero-btn-cont">
					<button type="button" className="blindbox-hero-btn">
						Challenge Box
					</button>
				</div>
			</div>
		</div>
	)
}

export default Blindbox
