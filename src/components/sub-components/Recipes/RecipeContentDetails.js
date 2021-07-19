import Checkbox from "../../composable-components/Checkbox";
import Modal from "../../composable-components/Modal";

const RecipeContentDetails = ({ recipeData }) => {
  const addtoCart = (data) => {
    const user = JSON.parse(window.sessionStorage.getItem("user"));
    if (user) {
      const ingredients = [];
      data.extendedIngredients.forEach((i) =>
        ingredients.push({
          id: i.id,
          ingredientName: i.name,
          quantity: i.amount,
          unitofMeasure: i.unit,
        })
      );
      const addrecipedata = {
        userID: user.uid,
        recipeID: data.id,
        recipeName: data.title,
        imageURL: data.image,
        ingredients: ingredients,
      };

      console.log(data);

      const res = fetch("http://44.238.74.165:3000/recipecart/addrecipecart", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(addrecipedata),
      })
        .then((r) => r.json())
        .then((d) => document.querySelector('#add-to-shopping-list-success-modal').classList.add('active'))
        .catch((e) => alert("Failed to add to shopping list"));
    } else {
      console.log("Usser does not");
    }
  };

  return (
    <>
      <div className="recipe-details">
        <div className="cook-time-cont">
          <div className="label">Cook Time:</div>
          <div className="text">{recipeData.readyInMinutes} mins</div>
        </div>
        <div className="portion-cont">
          <div className="label">Portion:</div>
          <div className="text">{recipeData.servings} servings</div>
        </div>
        <div className="ingredients-cont">
          <div className="label">Ingredients:</div>
          <div className="ingredients-listings-cont">
            {recipeData.extendedIngredients.map((data, index) => (
              <div key={index} className="ingredient-listing">
                <Checkbox
                  role="checkbox"
                  ariaLabel="Checkbox"
                  type="checkbox"
                  className={"ingredient-checkbox"}
                  defaultChecked={true}
                />
                <div className="ingredient-text">{data.originalString}</div>
              </div>
            ))}
          </div>
          <div className="add-to-shopping-list-btn-cont">
            <button
              role="button"
              aria-label="shopping list"
              title="add"
              type="button"
              className="add-to-shopping-list-btn"
              onClick={() => addtoCart(recipeData)}
            >
              Add to Shopping List
            </button>
          </div>
        </div>
      </div>
      <Modal
        id={"add-to-shopping-list-success-modal"}
        message={"Your Ingredients have been saved successfully."}
      />
    </>
  );
};

export default RecipeContentDetails;
