import { useHistory } from "react-router-dom";

const RecipeCard = ({ recipeData }) => {
  const history = useHistory();
  return (
    <div
      key={recipeData.title}
      onClick={() => {
        history.push({
          pathname: "/recipecontent",
          state: { id: recipeData.id },
        });
      }}
      title={recipeData.title}
    >
      <div className="recipes-otd-img-cont">
        <img src={recipeData.image} alt={recipeData.alt} loading="lazy" />
      </div>
      <div className="recipes-otd-name-cont">
        <h4 role="heading">
          {/* {
						recipeData.title.length <= 22 ?
						recipeData.title :
						(recipeData.title.substring(0, 19) + '...')
					} */}
          {recipeData.title}
        </h4>
      </div>
      <div className="recipes-otd-details-cont">
        <div className="recipes-otd-category-cooking-time-cont">
          {<p>{recipeData.vegetarian ? "Vegetarian" : "Non-vegetarian"}</p>}
          {
            <p>
              {recipeData.readyInMinutes ? recipeData.readyInMinutes : 0} mins
            </p>
          }
        </div>
        <div className="recipes-otd-likes-dislikes-cont">
          <div className="recipes-otd-likes-cont">
            <i className="far fa-thumbs-up"></i>
            <div className="recipes-otds-likes">
              {recipeData.aggregateLikes}
            </div>
          </div>
          <div className="recipes-otd-dislikes-cont">
            <i className="far fa-thumbs-down"></i>
            <div className="recipes-otd-likes">2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

RecipeCard.defaultProps = {};

export default RecipeCard;
