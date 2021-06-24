
import React from 'react'
import Images from '../composable-components/Images'

const ShoppingCard = ({recipes, recipeClassName, ingredientList }) => {
return(
    <div className={recipeClassName}>
    {
        recipes.map(data=>{
            return(
                <div className="shopping_card" key={data.src}>
                    <div>
                        <Images src={data.src} alt={data.alt} />
                        <h4>{data.title}</h4>
                        <label>Reset List</label>
                    </div>
                    

                    <div className="ingredientlist">
                        <div>
                            <input type="checkbox" id="apple" name="apple" value="Apple" />
                            <label htmlFor="apple"> Apple</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <label>5 Pcs</label><br />
                        </div>
                        <div>
                            <input type="checkbox" id="sugar" name="sugar" value="Sugar" />
                            <label htmlFor="sugar"> Sugar</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <label>11 g</label><br />
                        </div>
                        
                        <div>
                            <input type="checkbox" id="raddish" name="raddish" value="Raddish" />
                            <label htmlFor="raddish"> Raddish</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <label>2 Pcs</label><br />
                        </div>
                        
                        <div>
                            <input type="checkbox" id="tomato" name="tomato" value="Tomato" />
                            <label htmlFor="tomato"> Tomato</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <label>3 Pcs</label>
                        </div>

                        <div>
                            <input type="checkbox" id="apple" name="apple" value="Apple" />
                            <label htmlFor="apple"> Apple</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <label>5 Pcs</label><br />
                        </div>
                        <div>
                            <input type="checkbox" id="sugar" name="sugar" value="Sugar" />
                            <label htmlFor="sugar"> Sugar</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <label>11 g</label><br />
                        </div>
                        
                        <div>
                            <input type="checkbox" id="raddish" name="raddish" value="Raddish" />
                            <label htmlFor="raddish"> Raddish</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <label>2 Pcs</label><br />
                        </div>
                        
                        <div>
                            <input type="checkbox" id="tomato" name="tomato" value="Tomato" />
                            <label htmlFor="tomato"> Tomato</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <label>3 Pcs</label>
                        </div>
                        
                    </div> 
                        <a className="more_ingredient" href="#">More Ingredients</a>
                </div>
            )
        })
    }
    </div>
)

}

export default ShoppingCard
