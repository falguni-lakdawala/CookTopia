import sinaeProfilePicture from "../../../assets/team-members/sinae.png";
import maneeshProfilePicture from "../../../assets/team-members/maneesh.png";
import rohitProfilePicture from "../../../assets/team-members/rohit.png";
import abhijeetProfilePicture from "../../../assets/team-members/abhijeet.png";
import miaProfilePicture from "../../../assets/team-members/mia.png";
import falguniProfilePicture from "../../../assets/team-members/falguni.png";
import linkedInIconBlack from "../../../assets/icons/linkedin-icon-black.png";



function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}


const Team = ({ team }) => {
	const teamData = [
		{
			name: 'Sinae',
			src: sinaeProfilePicture,
			role: 'Designer',
			description: 'She has an excellent UX research ability, which helps her to visually communicate with users and coworkers.',
			linkedInURL: 'https://www.linkedin.com/in/sinae-bak/'
		},
		{
			name: 'Maneesh',
			src: maneeshProfilePicture,
			role: 'Developer',
			description: 'He is a software developer who loves to work on Android and Kotlin But these days also into weaving web.',
			linkedInURL: 'https://www.linkedin.com/in/maneesh43/'
		},
		{
			name: 'Rohit',
			src: rohitProfilePicture,
			role: 'Designer',
			description: 'He has ability of thinking out of the box. And can work excellent in both UI and UX.',
			linkedInURL: 'https://www.linkedin.com/in/rohit-lathwal/'
		},
		{
			name: 'Abhijeet',
			src: abhijeetProfilePicture,
			role: 'Developer',
			description: 'He builds engaging experiences for audiences and believes in creating pixel-perfect and performant products.',
			linkedInURL: 'https://www.linkedin.com/in/abjt14/'
		},
		{
			name: 'Mia',
			src: miaProfilePicture,
			role: 'Designer',
			description: 'She has empathy ability to understand what users\' frustrations and pain points are and create solutions to improve users\' lives.',
			linkedInURL: 'https://www.linkedin.com/in/chun-mei-lin/'
		},
		{
			name: 'Falguni',
			src: falguniProfilePicture,
			role: 'Developer',
			description: 'She is passionate about creating truly beautiful, efficient digital product to make memorable experience with technology.',
			linkedInURL: 'https://www.linkedin.com/in/falguni-lakdawala/'
		}
	];
	shuffle(teamData)
	return (
		<div className="team-page-cont">
			<div className="max-width-cont">
				<div className="heading">
					<h1 role="heading" >Meet the Team</h1>
				</div>
				<div className="subheading">
					CookTopia is a recipe platforms that helps young cooking novices by providing a variety of recipes, nutrition data, and nearby grocery shops, so home cooks could enjoy well-being life based on well-balanced diet. This service is created by 3 developers and 3 designers.
				</div>
				<div className="team-members-cont">
					{
						teamData.map((data, index) => {
							return (
								<div className="member-cont" key={index + data.name}>
									<div className="image-cont">
										<img role="img" src={ data.src } alt={ `${data.name} picture` } />
									</div>
									<div className="text-details-cont">
										<div className="name">{ data.name }</div>
										<div className="role">{ data.role }</div>
										<div className="description">
											{ data.description }
										</div>
										<div className="linkedin-link">
											<a role="link" href={ data.linkedInURL }>
												<img role="img" src={ linkedInIconBlack } alt="linkedin for the profile" />
											</a>
										</div>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		</div>
	)
}

export default Team;
