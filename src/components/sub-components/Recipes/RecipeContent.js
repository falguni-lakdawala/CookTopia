import React from 'react';
import RecipeContentDetails from './RecipeContentDetails';
import RecipeContentMain from './RecipeContentMain';
import RecipeContentMainInstructions from './RecipeContentMainInstructions';
import { useLocation } from 'react-router';
import useFetch from '../../../custom_hooks/useFetch';

const RecipeContent = () => {
	const location = useLocation()
	const url = `http://localhost:5000/recipe/${location.state.id}`;
	const res = useFetch(url, {});

	return (
		<>
			{!(res.loading) &&
				<div className="recipe_content">
					<div className="max-width-cont">
						<RecipeContentDetails recipeData={res.response} />
						<RecipeContentMain recipeData={res.response} />
						<RecipeContentMainInstructions recipeData={res.response}/>
					</div>
				</div>
			}
		</>
	)
}


RecipeContent.defaultProps = {
	id: 1
}

export default RecipeContent;


