import { useHistory } from "react-router";
import dotenv from 'dotenv'

const RecipeCard = ({ recipeData }) => {
console.log(process.env.REACT_APP_M)
const history=useHistory();
  return (
    <div key={recipeData.title}>
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
          { <p>{(recipeData.vegetarian?"Vegetarian":"Non-vegetarian")}</p>}
          {<p>{recipeData.readyInMinutes?recipeData.readyInMinutes:0} mins</p>}
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
RecipeData:{'readyInMinutes':0,'vegetarian':'unknown'}
};

export default RecipeCard;
