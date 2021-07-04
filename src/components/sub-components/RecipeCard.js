import { useHistory } from "react-router";

const RecipeCard = ({ recipeData }) => {

  console.log(recipeData)
const history=useHistory();
  return (
    <div key={recipeData.title}>
      {console.log(recipeData)}
      <div className="recipes-otd-img-cont">
        <img onClick ={()=>{
          
          history.push({
            pathname:'/recipecontent',
            state:{id:recipeData.id}
          })


          } } src={recipeData.image} alt={recipeData.alt} />
      </div>
      <div className="recipes-otd-name-cont">
        <h4 role="heading">{recipeData.title}</h4>
      </div>
      <div className="recipes-otd-details-cont">
        <div className="recipes-otd-category-cooking-time-cont">
          { <p>{recipeData.vegetarian?"Vegetarian":"Non-Vegetarian"}</p>}
          {<p>{recipeData.readyInMinutes} mins</p>}
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

RecipeCard.defaultProps = {
  showCategory: true,
  showTime: true,
};

export default RecipeCard;
