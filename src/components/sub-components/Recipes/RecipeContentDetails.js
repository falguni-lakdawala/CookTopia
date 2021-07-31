import Checkbox from "../../composable-components/Checkbox";
import Modal from "../../composable-components/Modal";

const RecipeContentDetails = ({ recipeData }) => {
  const user = JSON.parse(window.sessionStorage.getItem("user"));
  const addtoCart = (data) => {
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

      fetch("http://44.238.74.165:3000/recipecart/addrecipecart", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(addrecipedata),
      })
        .then((r) => r.json())
        .then(() =>
          document
            .querySelector("#add-to-shopping-list-success-modal")
            .classList.add("active")
        )
        .catch(() => alert("Failed to add to shopping list"));
    } else {
      const dataexist = window.sessionStorage.getItem("guestshoppingdata");
      const ingredient = [];
      data.extendedIngredients.forEach((a) =>
        ingredient.push({
          ingredientName: a.originalString,
          quantity: a.amount,
          unitofMeasure: a.unit,
        })
      );
      if (dataexist) {
        const newData = JSON.parse(dataexist);
        const res = newData.some((m) => m.id === data.id);
        if (!res) {
          newData.push({
            recipeName: data.title,
            imageURL: data.image,
            ingredients: ingredient,
            uniqueID:data.id
          });
          window.sessionStorage.setItem(
            "guestshoppingdata",
            JSON.stringify(newData)
          );
          document
            .querySelector("#add-to-shopping-list-success-modal")
            .classList.add("active");
        }
      } else {
        window.sessionStorage.setItem(
          "guestshoppingdata",
          JSON.stringify([
            {
              recipeName: data.title,
              imageURL: data.image,
              ingredients: ingredient,
              uniqueID:data.id
            },
          ])
        );
        document
          .querySelector("#add-to-shopping-list-success-modal")
          .classList.add("active");
      }
    }
  };
// console.log(recipeData)
  return (
    <>
      {recipeData && (
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
                  {/* <input
                    role="checkbox"
                    aria-label="Checkbox"
                    type="checkbox"
                    className="ingredient-checkbox"
                    defaultChecked
                  /> */}
                  <Checkbox className={`ingredient-checkbox-${index}`} />
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
          <Modal
            id={"add-to-shopping-list-success-modal"}
            message={"Your Ingredients have been saved successfully."}
          />
        </div>
      )}
    </>
  );
};
export default RecipeContentDetails;
