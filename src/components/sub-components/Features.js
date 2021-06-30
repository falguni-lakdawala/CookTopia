import React from "react";
import FeatureCard from "./FeatureCard";
import searchRecipesImage from "../../assets/illustrations/features-search-recipe.svg";
import nutritionInformationImage from "../../assets/illustrations/features-nutrition-information.svg";
import featuresShoppingListImage from "../../assets/illustrations/features-shopping-list.svg";

const Features = ({ features }) => {
	const featuresData = [
		{
			src: searchRecipesImage,
			title: "Find your favorite recipes",
			description: "",
			buttonText: "Search Recipes",
			type: 1
		},
		{
			src: nutritionInformationImage,
			title: "Nutrition discovery",
			description: "",
			buttonText: "Nutrition Information",
			type: 2
		},
		{
			src: featuresShoppingListImage,
			title: "Create your shopping list",
			description: "",
			buttonText: "Shopping List",
			type: 1
		},
	];
  return (
    <div className="features-cont">
			<div className="heading">
				<h3>Features</h3>
			</div>
			<div className="features-listing">
				{
					featuresData.map((data, index) => {
						return (
							<FeatureCard
								key={ index }
								featuresData={ data }
							/>
						)
					})
				}
			</div>
    </div>
  );
};

export default Features;
