
import React from 'react'
import Images from '../composable-components/Images'

const Recipecard = ({recipes, recipeClassName, showCategory = true, showTime = true }) => {
return(
    <div className={recipeClassName}>
    {
        recipes.map(data=>{
            return(
                <div key={data.src}>
<Images src={data.src} alt={data.alt} />
<h4>{data.title}</h4>
{showCategory == true ? <p>{data.category}</p> : '' }  
{showTime == true ?  <p>{data.cooking_time}</p>  : ''} 

</div>
            )
        })
    }
    </div>
)

}

Recipecard.defaultProps = {
    showCategory: true,
    showTime : true,
  }

export default Recipecard
