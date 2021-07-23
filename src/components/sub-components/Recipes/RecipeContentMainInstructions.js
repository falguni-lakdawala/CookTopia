import recipeLikeIcon from "../../../assets/icons/recipe-like.svg";
import recipeDislikeIcon from "../../../assets/icons/recipe-dislike.svg";
import MyResponsivePie from "../Visualization/MyResponsiveChart";
import { useEffect } from "react";
import RecipeContentMain from "./RecipeContentMain";

const RecipeContentMainInstructions = ({ recipeData, scrollstat }) => {
  const nutritionData = recipeData.nutrition.nutrients;
  // Functions for handling dislike and like
  useEffect(() => {
    if (scrollstat) {
      document.querySelector(".dummy").scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [document.querySelector(".dummy")]);

  const user = JSON.parse(window.sessionStorage.getItem("user"));

  const handlelike = () => {
    if (user) {
      const res = fetch("http://44.238.74.165:3000/recipe/updaterecipelike", {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          recipeID: recipeData.id,
          userID: user.uid,
        }),
      })
        .then((r) => r.json())
        .then((d) => alert("Succesfully added to your favorites!"))
        .catch((e) => console.log(e));
    } else {
      console.log("Not logged in");
      alert("Not logged in");
    }
  };

  const handledislike = () => {
    if (user) {
      const res = fetch(
        "http://44.238.74.165:3000/recipe/updaterecipedislike",
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ recipeID: recipeData.id, userID: user.uid }),
        }
      )
        .then((r) => r.json())
        .then((d) => alert("Added to your dislike list"))
        .catch((e) => console.log(e));
    } else {
      console.log("Not logged in");
    }
  };

  const filterednutritionData = nutritionData.filter(
    (data) =>
      data.name === "Carbohydrates" ||
      data.name === "Sugar" ||
      data.name === "Calcium" ||
      data.name === "Folate" ||
      data.name === "Vitamin C"
  );
  const data = {
    data: [
      {
        id: "Carbohydrates",
        label: "Carbohydrates",
        value: nutritionData[0].amount,
        color: "hsl(129, 70%, 50%)",
        unit: nutritionData[0].unit,
      },
      {
        id: "Sugar",
        label: "Sugar",
        value: nutritionData[1].amount,
        color: "hsl(221, 70%, 50%)",
        unit: nutritionData[1].unit,
      },
      {
        id: "Calcium",
        label: "Calcium",
        value: nutritionData[2].amount,
        color: "hsl(1, 70%, 50%)",
        unit: nutritionData[2].unit,
      },
      {
        id: "Folate",
        label: "Folate",
        value: nutritionData[3].amount,
        color: "hsl(251, 70%, 50%)",
        unit: nutritionData[3].unit,
      },
      {
        id: "Vitamin C",
        label: "Vitamin C",
        value: nutritionData[4].amount,
        color: "hsl(299, 70%, 50%)",
        unit: nutritionData[4].unit,
      },
    ],
  };

  return (
    <>
      <div className="recipe-instructions-cont">
        <div className="instructions-graph-cont">
          <div className="instructions-cont-graph">
            <div className="dummy">
              <MyResponsivePie data={data.data} />
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
            {recipeData.analyzedInstructions.length >= 1 ? (
              recipeData.analyzedInstructions[0].steps.map((data, index) => (
                <li key={data.toString() + index}>
                  {/* <div className="instructions-text-heading">{data.heading}</div> */}
                  <div className="instructions-text-text">{data.step}</div>
                </li>
              ))
            ) : (
              <div className="instructions-text-text">
                <p>No instructions found for this recipe.</p>
              </div>
            )}
          </ol>
        </div>
      </div>
      <div className="recipe-like-dislike-cont">
        <div className="like-cont">
          <button
            onClick={() => handlelike()}
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
            onClick={() => handledislike()}
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
};

export default RecipeContentMainInstructions;
