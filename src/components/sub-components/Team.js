import sinaeProfilePicture from "../../assets/team-members/sinae.png";
import maneeshProfilePicture from "../../assets/team-members/maneesh.png";
import rohitProfilePicture from "../../assets/team-members/rohit.png";
import abhijeetProfilePicture from "../../assets/team-members/abhijeet.png";
import miaProfilePicture from "../../assets/team-members/mia.png";
import falguniProfilePicture from "../../assets/team-members/falguni.png";
import linkedInIconBlack from "../../assets/icons/linkedin-icon-black.png";



function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}


const Team = ({ team }) => {
	const teamData = [
		{
			name: 'Sinae',
			src: sinaeProfilePicture,
			role: 'Designer',
			description: 'She has an excellent UX research ability, which helps her to visually communicate with users and coworkers.*',
			linkedInURL: 'https://www.linkedin.com/in/sinae-bak/'
		},
		{
			name: 'Maneesh',
			src: maneeshProfilePicture,
			role: 'Developer',
			description: 'She has an excellent UX research ability, which helps her to visually communicate with users and coworkers.*',
			linkedInURL: 'https://www.linkedin.com/in/maneesh-reddy-thoutireddy-05829015a'
		},
		{
			name: 'Rohit',
			src: rohitProfilePicture,
			role: 'Designer',
			description: 'She has an excellent UX research ability, which helps her to visually communicate with users and coworkers.*',
			linkedInURL: 'https://www.linkedin.com/in/rohit-lathwal-9791a8175/'
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
			description: 'She has an excellent UX research ability, which helps her to visually communicate with users and coworkers.*',
			linkedInURL: 'https://www.linkedin.com/in/chun-mei-lin/'
		},
		{
			name: 'Falguni',
			src: falguniProfilePicture,
			role: 'Developer',
			description: 'She has an excellent UX research ability, which helps her to visually communicate with users and coworkers.*',
			linkedInURL: 'https://www.linkedin.com/in/falguni-lakdawala/'
		}
	];
	shuffle(teamData)
	return (
		<div className="team-page-cont">
			<div className="max-width-cont">
				<div className="heading">
					<h1>Meet the Team</h1>
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
										<img src={ data.src } alt={ `${data.name} picture` } />
									</div>
									<div className="text-details-cont">
										<div className="name">{ data.name }</div>
										<div className="role">{ data.role }</div>
										<div className="description">
											{ data.description }
										</div>
										<div className="linkedin-link">
											<a href={ data.linkedInURL }>
												<img src={ linkedInIconBlack } alt="linkedin for the profile" />
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
