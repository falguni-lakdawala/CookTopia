import recipeLikeIcon from '../../../assets/icons/recipe-like.svg';
import recipeDislikeIcon from '../../../assets/icons/recipe-dislike.svg';
import MyResponsivePie from '../Visuaization/MyResponsiveChart';


const RecipeContentMainInstructions = ({ recipeData }) => {
	console.log(recipeData)
	const nutritionData = recipeData.nutrition.nutrients
	console.log(nutritionData)


	const data = {
    data: [
      {
        id: "Carbohydrates",
        label: "Carbohydrates",
        value: nutritionData[4].amount,
        color: "hsl(129, 70%, 50%)",
      },
      {
        id: "Sugar",
        label: "Sugar",
        value: nutritionData[5].amount,
        color: "hsl(221, 70%, 50%)",
      },
      {
        id: "Calcium",
        label: "Calcium",
        value: nutritionData[21].amount,
        color: "hsl(1, 70%, 50%)",
      },
      {
        id: "Folate",
        label: "Folate",
        value: nutritionData[13].amount,
        color: "hsl(251, 70%, 50%)",
      },
      {
        id: "Vitamin C",
        label: "Vitamin C",
        value: nutritionData[9].amount,
        color: "hsl(299, 70%, 50%)",
      },
    ],
  };

	return (
    <>
      <div className="recipe-instructions-cont">
        <div className="instructions-graph-cont">
          <div className="instructions-cont-graph">
            <div className="dummy">

<MyResponsivePie data={data.data}/>

			</div>
          </div>
        </div>
        <div className="instructions-total-calories-cont">
          <div className="instructions-total-calories-box">
            <div className="label">Total Calories</div>
            <div className="instructions-total-calories-text">
              {nutritionData[0].amount + " " + nutritionData[0].unit}
            </div>
          </div>
        </div>
        <div className="recipe-instructions-text-cont">
          <ol>
            {recipeData.analyzedInstructions[0].steps.map((data, index) => (
              <li key={data.toString()+index}>
                {/* <div className="instructions-text-heading">{data.heading}</div> */}
                <div className="instructions-text-text">{data.step}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="recipe-like-dislike-cont">
        <div className="like-cont">
          <button
            role="button"
            aria-label="like"
            title="like"
            type="button"
            className="recipe-like"
          >
            <img src={recipeLikeIcon} alt="recipe like button" />
          </button>
          <div className="like-text">{recipeData.aggregateLikes}</div>
        </div>
        <div className="dislike-cont">
          <button
            role="button"
            aria-label="dislike"
            title="dislike"
            type="button"
            className="recipe-dislike"
          >
            <img src={recipeDislikeIcon} alt="recipe like button" />
          </button>
          <div className="dislike-text">
            {/* {recipeData.aggregateDislikes} */}5
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeContentMainInstructions
