import RecipeCard from "../RecipeCard";
import maneesh from '../../../assets/team-members/maneesh.png';
import editicon from '../../../assets/icons/editicon.svg';
import favrecipe from '../../../assets/illustrations/homepage-features/favouriterecipe-not-found.svg';
import favlist from '../../../assets/illustrations/shoppinglist-not-found.svg';
import useFetch from "../../../custom_hooks/useFetch";

const ProfileCard = () => {
	let profileData =	{
		name: "Maneesh Thoutireddy",
		email: "maneesh@mylangara.ca",
		profilePictureURL: maneesh
	};

  const favRecipesURL = "http://localhost:5000/recipes/random";
  let favRecipesData = useFetch(favRecipesURL, {});

	let shoppingListData = [];

	const addRecipeDeleteOverlay = (id) => {
		document.querySelector(`#${id}`).classList.add('active')
	}

	const removeRecipeDeleteOverlay = (id) => {
		document.querySelector(`#${id}`).classList.remove('active')
	}

	return (
		<div className="profile-cont">
			<div className="max-width-cont">
				<div className="profile-card">
					<div className="profile-image-cont">
						<img src={profileData.profilePictureURL} alt="profile image" />
						<button role="button" aria-label="profile image" title="edit image" type="button" className="edit-profile-image-btn">
							Edit Image
						</button>
					</div>
					<div className="profile-data-cont">
						<div className="profile-data">
							<div className="name">
								{profileData.name}
							</div>
							<div className="email-cont">
								<div className="label">Email: </div>
								<div className="text">{profileData.email}</div>
							</div>
						</div>
						<div className="profile-edit-btn-cont">
							<button className="profile-edit-btn">
								<img src={editicon} alt="edit icon" />
							</button>
						</div>
					</div>
				</div>
				<div className="favorite-recipes-cont">
					<div className="heading">
						<h2>Favorite Recipes</h2>
						<div className="favorite-recipes-edit-cont">
							<button className="favorite-recipes-edit-btn" type="button">
								Edit
							</button>
						</div>
					</div>
					{
						!favRecipesData.loading && (
							typeof favRecipesData.response !== "undefined" ? (
								<div className="favorite-recipes-listing-cont">
									{
										favRecipesData.response.recipes.map((data, index) => {
											return (
												<div
													className="recipe-card-cont"
													key={index + '-recipe-cont'}
													onMouseEnter={() => (addRecipeDeleteOverlay(`remove-favorite-recipe-${index}`))}
													onMouseLeave={() => (removeRecipeDeleteOverlay(`remove-favorite-recipe-${index}`))}
												>
													<RecipeCard
														key={index}
														recipeData={data}
													/>
													<div id={`remove-favorite-recipe-${index}`} className="recipe-card-overlay">
														<div className="text">
															Remove
														</div>
													</div>
												</div>
											);
										})
									}
								</div>
							) :
							(
								<div className="no-favorite-recipes-cont">
									<img src={favrecipe} alt="Favorite recipe illustration" />
									<button type="button">
										Search more recipes
									</button>
								</div>
							)
						)
					}
				</div>
				<div className="shopping-list-cont">
					<div className="heading">
						<h2>Your Shopping List</h2>
					</div>
					{
						!shoppingListData.loading && (
							typeof shoppingListData.response !== "undefined" ? (
								<div className="shopping-list-listing-cont">
									{
										// html code for shopping list cards
									}
								</div>
							) :
							(
								<div className="no-shopping-list-cont">
									<img src={favlist} alt="Favorite shopping list" />
									<button type="button">
										Search your shopping list
									</button>
								</div>
							)
						)
					}
				</div>
			</div>
		</div>
	)
}

export default ProfileCard;
