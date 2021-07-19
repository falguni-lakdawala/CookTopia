const ShoppingCard = ({ recipes }) => {
	return (
		<div className="recipeClassName">
			{ recipes.map((data, index) => {
				return (
					<div
						key={index + data.recipeName}
						className="shopping-list-listing"
					>
						<div className="img-and-remove-list-cont">
							<div className="img-title-cont">
								<img src={data.imageURL} alt='RecipeImage'  loading='lazy'/>
								<div className="title">{data.recipeName}</div>
							</div>
							<div className="remove-list-cont">
								<button type="button" className="remove-list-btn">
									remove list
								</button>
							</div>
						</div>
						<div className="ingredients-cont">
					
							{(data.ingredients).map((dataInner, index) => {
								return (
									<div
										key={index + dataInner.ingredientName}
										className="ingredient-cont"
									>
										<div className="checkbox">
											<input
												type="checkbox"
												// defaultChecked={dataInner.selected}
											/>
										</div>
										<div className="text">{dataInner.ingredientName}</div>
									</div>
								);
							})}
						</div>
					</div>
				);
			})} 
		</div>
	);
};

export default ShoppingCard;
