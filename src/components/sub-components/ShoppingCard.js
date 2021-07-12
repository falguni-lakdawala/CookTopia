const ShoppingCard = ({ recipes, recipeClassName, ingredientList }) => {
	return (
		<div className={recipeClassName}>
			{recipes.map((data, index) => {
				return (
					<div
						key={index + data.title}
						className="shopping-list-listing"
					>
						<div className="img-and-remove-list-cont">
							<div className="img-title-cont">
								<img src={data.src} alt={data.alt} />
								<div className="title">{data.title}</div>
							</div>
							<div className="remove-list-cont">
								<button type="button" className="remove-list-btn">
									remove list
								</button>
							</div>
						</div>
						<div className="ingredients-cont">
							{data.ingredients.map((dataInner, index) => {
								return (
									<div
										key={index + dataInner.text}
										className="ingredient-cont"
									>
										<div className="checkbox">
											<input
												type="checkbox"
												defaultChecked={dataInner.selected}
											/>
										</div>
										<div className="text">{dataInner.text}</div>
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
