import React from 'react';
import reactDom from 'react-dom';
import RecipeContentMainInstructions from './RecipeContentMainInstructions';

const RecipeContentMain = ({recipeData}) => {


	// const recipeContentMainData = {
	// 	name: 'Gigantes Simmered in a Garlicky Tomato Sauce (Fassoulia)',
	// 	authorName: 'Lisa Turner',
	// 	authorPictureURL: 'https://picsum.photos/200',
	// 	recipeImage: 'https://picsum.photos/600/200',
	// 	about: "The recipe Hummus and Za'atar is ready in around 45 minutes and is definitely an outstanding gluten free and vegan option for lovers of middl eastern food. For $1.61 per serving, you get a marinade that serves 4. One serving contains 778 calories, 34g of protein, and 31g of fat. This recipe from foodandspice.blogspot.com has 35 fans. If you have sea salt, garlic, juice of lemon, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe deserves a spoonacular score of 99%. This score is excellent. Similar recipes include Chopped Hummus Dip with Za'atar, Hummus Deviled Eggs with Za’atar, and Za'atar Bread Rolls (Manaiesh Bi Za'atar).",
	// 	likes: 56,
	// 	dislikes: 4
	// }

	return (
		<div className="recipe-main">
			<div className="recipe-data-cont">
				<div className="recipe-heading">
					{recipeData.title}
				</div>
				<div className="recipe-subheading-cont">
					<div className="recipe-author">
						{/* <img src={recipeContentMainData.authorPictureURL} alt="author pic" className="recipe-author-picture" /> */}
						<div className="recipe-author-name">
							{recipeData.sourceName}
						</div>
					</div>
					<div className="recipe-fav-btn-cont">
						<button role="button" aria-label="Favourite button" title="fav" type="button" className="recipe-fav-btn">
							Fav
						</button>
					</div>
				</div>
				<div className="recipe-main-cont">
					<div className="recipe-image-main-cont">
						<img role="img" aria-label="Recipe image" src={recipeData.image} alt="recipe main image" className="recipe-image-main" />
					</div>
					<div className="recipe-about-cont">
						<div className="recipe-about-heading">
							About the Dish
						</div>
						<div className="recipe-about-text" dangerouslySetInnerHTML={ {__html: recipeData.summary}}>
							
							
						</div>
					</div>
				</div>
			</div>
			<RecipeContentMainInstructions recipeData={recipeData}/>
			<div className="recipe-like-dislike-cont">
				<div className="like-cont">
					<button role="button" aria-label="like" title="like" type="button" className="recipe-like"><i className="fas fa-thumbs-up"></i></button>
					<div className="like-text">{recipeData.aggregateLikes}</div>
				</div>
				<div className="dislike-cont">
					<button role="button" aria-label="dislike" title="dislike" type="button" className="recipe-dislike"><i className="fas fa-thumbs-down"></i></button>
					{/* <div className="dislike-text">{recipeContentMainData.dislikes}</div> */}
				</div>
			</div>
		</div>
	)
}

export default RecipeContentMain
