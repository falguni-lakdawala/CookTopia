import React from 'react';
import RecipeContentDetails from './RecipeContentDetails';
import RecipeContentMain from './RecipeContentMain';

const RecipeContent = () => {
	return (
		<div className="recipe_content_component">
			<RecipeContentDetails />
			<RecipeContentMain />
		</div>
	)
}

export default RecipeContent
