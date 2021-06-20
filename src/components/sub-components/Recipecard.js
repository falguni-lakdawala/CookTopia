
import React from 'react'
import Images from '../composable-components/Images'

const Recipecard = ({recipes}) => {
return(
    <div className="recipe_individual">
    {
        recipes.map(data=>{
            return(
                <div key={data.src}>
<Images src={data.src} alt={data.alt} />
<h4>{data.title}</h4>
<p>{data.category}</p>
<p>{data.cooking_time}</p>

</div>
            )
        })
    }
    </div>
)

}

export default Recipecard
