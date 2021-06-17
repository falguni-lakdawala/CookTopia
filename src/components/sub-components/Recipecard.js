

import React from 'react'
import Images from '../composable-components/Images'
const Recipecard = ({recipe_name,categories,cooking_time}) => {
    return (
        <div className="recipe_card">
            <Images src="https://picsum.photos/seed/picsum/200/300" alt=""/>
        </div>
    )
}

export default Recipecard
