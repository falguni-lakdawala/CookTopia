import React from 'react';
import RecipeContentDetails from './RecipeContentDetails';
import RecipeContentMain from './RecipeContentMain';
import { useLocation } from 'react-router';
import useFetch from '../../../custom_hooks/useFetch';

const RecipeContent = () => {

	const location=useLocation()

	 const url = `http://localhost:5000/recipe/${location.state.id}`;
     const res = useFetch(url, {});
	 console.log(res.response)

    //  const recipeData = res.response;
	
	return (
		<>
		{!(res.loading) &&
		<div className="recipe_content_component">
			<RecipeContentDetails recipeData={res.response}/>
			<RecipeContentMain recipeData={res.response}/>
		</div>
}
		</>
	)
}


RecipeContent.defaultProps={
	id:1
}

export default RecipeContent;


