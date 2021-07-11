import React from "react";
import RecipeCard from "./RecipeCard";
import Button from "../composable-components/Button";
import ShoppingCard from "./ShoppingCard";

const ShoppingListRecipe = () => {


    return (
      <div>
        <div className="recipes">
          <h3 role="heading">Recipes you selected</h3>
          {[
            {
              vegetarian: true,
              vegan: false,
              glutenFree: false,
              dairyFree: false,
              veryHealthy: false,
              cheap: false,
              veryPopular: false,
              sustainable: false,
              weightWatcherSmartPoints: 27,
              gaps: "no",
              lowFodmap: false,
              aggregateLikes: 22,
              spoonacularScore: 15,
              healthScore: 1,
              creditsText:
                "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
              license: "CC BY 3.0",
              sourceName: "Foodista",
              pricePerServing: 67.09,
              extendedIngredients: [
                {
                  id: 9003,
                  aisle: "Produce",
                  image: "apple.jpg",
                  consistency: "solid",
                  name: "apples",
                  nameClean: "apple",
                  original: "2 large apples, peeled and diced",
                  originalString: "2 large apples, peeled and diced",
                  originalName: "apples, peeled and diced",
                  amount: 2,
                  unit: "large",
                  meta: ["diced", "peeled"],
                  metaInformation: ["diced", "peeled"],
                  measures: {
                    us: {
                      amount: 2,
                      unitShort: "large",
                      unitLong: "larges",
                    },
                    metric: {
                      amount: 2,
                      unitShort: "large",
                      unitLong: "larges",
                    },
                  },
                },
                {
                  id: 19334,
                  aisle: "Baking",
                  image: "light-brown-sugar.jpg",
                  consistency: "solid",
                  name: "brown sugar",
                  nameClean: "golden brown sugar",
                  original: "1 tablespoon brown sugar",
                  originalString: "1 tablespoon brown sugar",
                  originalName: "brown sugar",
                  amount: 1,
                  unit: "tablespoon",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 1,
                      unitShort: "Tbsp",
                      unitLong: "Tbsp",
                    },
                    metric: {
                      amount: 1,
                      unitShort: "Tbsp",
                      unitLong: "Tbsp",
                    },
                  },
                },
                {
                  id: 1017,
                  aisle: "Cheese",
                  image: "cream-cheese.jpg",
                  consistency: "solid",
                  name: "cream cheese",
                  nameClean: "cream cheese",
                  original: "4 ounces cream cheese, very cold and cubed",
                  originalString: "4 ounces cream cheese, very cold and cubed",
                  originalName: "cream cheese, very cold and cubed",
                  amount: 4,
                  unit: "ounces",
                  meta: ["very cold", "cubed"],
                  metaInformation: ["very cold", "cubed"],
                  measures: {
                    us: {
                      amount: 4,
                      unitShort: "oz",
                      unitLong: "ounces",
                    },
                    metric: {
                      amount: 113.398,
                      unitShort: "g",
                      unitLong: "grams",
                    },
                  },
                },
                {
                  id: 1125,
                  aisle: "Milk, Eggs, Other Dairy",
                  image: "egg-yolk.jpg",
                  consistency: "solid",
                  name: "egg yolk",
                  nameClean: "egg yolk",
                  original: "1 egg yolk",
                  originalString: "1 egg yolk",
                  originalName: "egg yolk",
                  amount: 1,
                  unit: "",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 1,
                      unitShort: "",
                      unitLong: "",
                    },
                    metric: {
                      amount: 1,
                      unitShort: "",
                      unitLong: "",
                    },
                  },
                },
                {
                  id: 18338,
                  aisle: "Refrigerated;Frozen",
                  image: "filo-dough.png",
                  consistency: "solid",
                  name: "filo dough",
                  nameClean: "filo pastry",
                  original: "Dough",
                  originalString: "Dough",
                  originalName: "Dough",
                  amount: 16,
                  unit: "servings",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 16,
                      unitShort: "servings",
                      unitLong: "servings",
                    },
                    metric: {
                      amount: 16,
                      unitShort: "servings",
                      unitLong: "servings",
                    },
                  },
                },
                {
                  id: 20081,
                  aisle: "Baking",
                  image: "flour.png",
                  consistency: "solid",
                  name: "flour",
                  nameClean: "wheat flour",
                  original: "cups flour",
                  originalString: "cups flour",
                  originalName: "flour",
                  amount: 1,
                  unit: "cups",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 1,
                      unitShort: "cup",
                      unitLong: "cup",
                    },
                    metric: {
                      amount: 236.588,
                      unitShort: "ml",
                      unitLong: "milliliters",
                    },
                  },
                },
                {
                  id: 2001,
                  aisle: "Spices and Seasonings",
                  image: "allspice-ground.jpg",
                  consistency: "solid",
                  name: "ground allspice",
                  nameClean: "allspice",
                  original: "1/4 teaspoon ground allspice",
                  originalString: "1/4 teaspoon ground allspice",
                  originalName: "ground allspice",
                  amount: 0.25,
                  unit: "teaspoon",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 0.25,
                      unitShort: "tsps",
                      unitLong: "teaspoons",
                    },
                    metric: {
                      amount: 0.25,
                      unitShort: "tsps",
                      unitLong: "teaspoons",
                    },
                  },
                },
                {
                  id: 2006,
                  aisle: "Spices and Seasonings",
                  image: "cardamom.jpg",
                  consistency: "solid",
                  name: "ground cardamom",
                  nameClean: "cardamom",
                  original: "1/8 teaspoon ground cardamom",
                  originalString: "1/8 teaspoon ground cardamom",
                  originalName: "ground cardamom",
                  amount: 0.125,
                  unit: "teaspoon",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 0.125,
                      unitShort: "tsps",
                      unitLong: "teaspoons",
                    },
                    metric: {
                      amount: 0.125,
                      unitShort: "tsps",
                      unitLong: "teaspoons",
                    },
                  },
                },
                {
                  id: 1012010,
                  aisle: "Spices and Seasonings",
                  image: "cinnamon.jpg",
                  consistency: "solid",
                  name: "ground cinnamon",
                  nameClean: "ground cinnamon",
                  original: "1/2 teaspoon ground cinnamon",
                  originalString: "1/2 teaspoon ground cinnamon",
                  originalName: "ground cinnamon",
                  amount: 0.5,
                  unit: "teaspoon",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 0.5,
                      unitShort: "tsps",
                      unitLong: "teaspoons",
                    },
                    metric: {
                      amount: 0.5,
                      unitShort: "tsps",
                      unitLong: "teaspoons",
                    },
                  },
                },
                {
                  id: 2021,
                  aisle: "Spices and Seasonings",
                  image: "ginger.png",
                  consistency: "solid",
                  name: "ground ginger",
                  nameClean: "ginger powder",
                  original: "1/2 teaspoon ground ginger",
                  originalString: "1/2 teaspoon ground ginger",
                  originalName: "ground ginger",
                  amount: 0.5,
                  unit: "teaspoon",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 0.5,
                      unitShort: "tsps",
                      unitLong: "teaspoons",
                    },
                    metric: {
                      amount: 0.5,
                      unitShort: "tsps",
                      unitLong: "teaspoons",
                    },
                  },
                },
                {
                  id: 9152,
                  aisle: "Produce",
                  image: "lemon-juice.jpg",
                  consistency: "liquid",
                  name: "juice of lemon",
                  nameClean: "lemon juice",
                  original: "Juice of 1/2 a lemon",
                  originalString: "Juice of 1/2 a lemon",
                  originalName: "Juice a lemon",
                  amount: 0.5,
                  unit: "",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 0.5,
                      unitShort: "",
                      unitLong: "",
                    },
                    metric: {
                      amount: 0.5,
                      unitShort: "",
                      unitLong: "",
                    },
                  },
                },
                {
                  id: 19911,
                  aisle: "Cereal",
                  image: "maple-syrup.png",
                  consistency: "liquid",
                  name: "maple syrup",
                  nameClean: "maple syrup",
                  original: "2 tablespoons maple syrup",
                  originalString: "2 tablespoons maple syrup",
                  originalName: "maple syrup",
                  amount: 2,
                  unit: "tablespoons",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 2,
                      unitShort: "Tbsps",
                      unitLong: "Tbsps",
                    },
                    metric: {
                      amount: 2,
                      unitShort: "Tbsps",
                      unitLong: "Tbsps",
                    },
                  },
                },
                {
                  id: 1077,
                  aisle: "Milk, Eggs, Other Dairy",
                  image: "milk.png",
                  consistency: "liquid",
                  name: "milk",
                  nameClean: "milk",
                  original: "2 tablespoons milk",
                  originalString: "2 tablespoons milk",
                  originalName: "milk",
                  amount: 2,
                  unit: "tablespoons",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 2,
                      unitShort: "Tbsps",
                      unitLong: "Tbsps",
                    },
                    metric: {
                      amount: 2,
                      unitShort: "Tbsps",
                      unitLong: "Tbsps",
                    },
                  },
                },
                {
                  id: 19336,
                  aisle: "Baking",
                  image: "powdered-sugar.jpg",
                  consistency: "solid",
                  name: "powdered sugar",
                  nameClean: "powdered sugar",
                  original: "1/8 cup powdered sugar",
                  originalString: "1/8 cup powdered sugar",
                  originalName: "powdered sugar",
                  amount: 0.125,
                  unit: "cup",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 0.125,
                      unitShort: "cups",
                      unitLong: "cups",
                    },
                    metric: {
                      amount: 29.574,
                      unitShort: "ml",
                      unitLong: "milliliters",
                    },
                  },
                },
                {
                  id: 19335,
                  aisle: "Baking",
                  image: "sugar-in-bowl.png",
                  consistency: "solid",
                  name: "sugar",
                  nameClean: "sugar",
                  original: "7 c.s sugar",
                  originalString: "7 c.s sugar",
                  originalName: "s sugar",
                  amount: 7,
                  unit: "c",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 7,
                      unitShort: "cups",
                      unitLong: "cups",
                    },
                    metric: {
                      amount: 1.656,
                      unitShort: "l",
                      unitLong: "liters",
                    },
                  },
                },
                {
                  id: 1145,
                  aisle: "Milk, Eggs, Other Dairy",
                  image: "butter-sliced.jpg",
                  consistency: "solid",
                  name: "unsalted butter",
                  nameClean: "unsalted butter",
                  original: "1/2 cup unsalted butter, very cold and cubed",
                  originalString:
                    "1/2 cup unsalted butter, very cold and cubed",
                  originalName: "unsalted butter, very cold and cubed",
                  amount: 0.5,
                  unit: "cup",
                  meta: ["unsalted", "very cold", "cubed"],
                  metaInformation: ["unsalted", "very cold", "cubed"],
                  measures: {
                    us: {
                      amount: 0.5,
                      unitShort: "cups",
                      unitLong: "cups",
                    },
                    metric: {
                      amount: 118.294,
                      unitShort: "ml",
                      unitLong: "milliliters",
                    },
                  },
                },
                {
                  id: null,
                  aisle: "?",
                  image: null,
                  consistency: null,
                  name: "frangelico",
                  nameClean: null,
                  original: "1 teaspoon Frangelico (or vanilla or rum)",
                  originalString: "1 teaspoon Frangelico (or vanilla or rum)",
                  originalName: "Frangelico (or vanilla or rum)",
                  amount: 1,
                  unit: "teaspoon",
                  meta: ["(or vanilla or rum)"],
                  metaInformation: ["(or vanilla or rum)"],
                  measures: {
                    us: {
                      amount: 1,
                      unitShort: "tsp",
                      unitLong: "teaspoon",
                    },
                    metric: {
                      amount: 1,
                      unitShort: "tsp",
                      unitLong: "teaspoon",
                    },
                  },
                },
              ],
              id: 632552,
              title: "Apple Hand Pies",
              readyInMinutes: 45,
              servings: 16,
              sourceUrl:
                "http://www.foodista.com/recipe/TQVW7MTF/apple-hand-pies",
              image: "https://spoonacular.com/recipeImages/632552-556x370.jpg",
              imageType: "jpg",
              summary:
                'One serving contains <b>530 calories</b>, <b>3g of protein</b>, and <b>10g of fat</b>. For <b>65 cents per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. A couple people made this recipe, and 21 would say it hit the spot. A mixture of frangelico, maple syrup, butter, and a handful of other ingredients are all it takes to make this recipe so delicious. It is a good option if you\'re following a <b>vegetarian</b> diet. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 16%</b>. This score is rather bad. Try <a href="https://spoonacular.com/recipes/apple-hand-pies-706227">Apple Hand Pies</a>, <a href="https://spoonacular.com/recipes/apple-hand-pies-473724">Apple Hand Pies</a>, and <a href="https://spoonacular.com/recipes/apple-hand-pies-617355">Apple Hand Pies</a> for similar recipes.',
              cuisines: [],
              dishTypes: [
                "antipasti",
                "starter",
                "snack",
                "appetizer",
                "antipasto",
                "hor d'oeuvre",
              ],
              diets: ["lacto ovo vegetarian"],
              occasions: [],
              instructions:
                "<ol><li>Start dough by whisking dry ingredients in a medium sized bowl. Add butter and incorporate with a pastry blender until coarse crumbs develop. Add cream cheese and incorporate well.</li><li>Plop in egg yolk and stir with a fork until dough comes together into a ball.</li><li>Turn dough out onto a floured surface and roll into a uniform ball. Slightly press flat with the palm of your hand and wrap in plastic wrap. Chill at least one hour.</li><li>Once dough has chilled, set it on a floured surface and roll it out to about 10 x 12. Cut into sixteen even squares. Lay the dough squares on a parchment paper covered baking sheet and set in the freezer to chill.</li><li>In a separate bowl, toss the apples with the lemon juice, maple syrup, spices and brown sugar. Make sure to cover all of the apple pieces.</li><li>Take dough out of freezer. Drop about 1 tablespoon of filling into the center of each piece of dough. Fold one pointed edge towards its opposite corner to form a triangle.  Crimp edges with a fork along the seams. Repeat with all of the dough.</li><li>Brush a little milk over the top of each turnover and sprinkle with extra sugar if desired. (Pop back into the freezer for a quick chill if the dough is soft.). Bake in a preheated oven at 400 degrees for 20 minutes or until browned.</li></ol>",
              analyzedInstructions: [
                {
                  name: "",
                  steps: [
                    {
                      number: 1,
                      step: "Start dough by whisking dry ingredients in a medium sized bowl.",
                      ingredients: [
                        {
                          id: 0,
                          name: "dough",
                          localizedName: "dough",
                          image: "pizza-dough",
                        },
                      ],
                      equipment: [
                        {
                          id: 404661,
                          name: "whisk",
                          localizedName: "whisk",
                          image: "whisk.png",
                        },
                        {
                          id: 404783,
                          name: "bowl",
                          localizedName: "bowl",
                          image: "bowl.jpg",
                        },
                      ],
                    },
                    {
                      number: 2,
                      step: "Add butter and incorporate with a pastry blender until coarse crumbs develop.",
                      ingredients: [
                        {
                          id: 1001,
                          name: "butter",
                          localizedName: "butter",
                          image: "butter-sliced.jpg",
                        },
                      ],
                      equipment: [
                        {
                          id: 404726,
                          name: "blender",
                          localizedName: "blender",
                          image: "blender.png",
                        },
                      ],
                    },
                    {
                      number: 3,
                      step: "Add cream cheese and incorporate well.Plop in egg yolk and stir with a fork until dough comes together into a ball.Turn dough out onto a floured surface and roll into a uniform ball. Slightly press flat with the palm of your hand and wrap in plastic wrap. Chill at least one hour.Once dough has chilled, set it on a floured surface and roll it out to about 10 x 1",
                      ingredients: [
                        {
                          id: 1017,
                          name: "cream cheese",
                          localizedName: "cream cheese",
                          image: "cream-cheese.jpg",
                        },
                        {
                          id: 1125,
                          name: "egg yolk",
                          localizedName: "egg yolk",
                          image: "egg-yolk.jpg",
                        },
                        {
                          id: 0,
                          name: "dough",
                          localizedName: "dough",
                          image: "pizza-dough",
                        },
                        {
                          id: 0,
                          name: "roll",
                          localizedName: "roll",
                          image: "dinner-yeast-rolls.jpg",
                        },
                        {
                          id: 10018364,
                          name: "wrap",
                          localizedName: "wrap",
                          image: "flour-tortilla.jpg",
                        },
                      ],
                      equipment: [
                        {
                          id: 404730,
                          name: "plastic wrap",
                          localizedName: "plastic wrap",
                          image: "plastic-wrap.jpg",
                        },
                      ],
                      length: {
                        number: 60,
                        unit: "minutes",
                      },
                    },
                    {
                      number: 4,
                      step: "Cut into sixteen even squares.",
                      ingredients: [],
                      equipment: [],
                    },
                    {
                      number: 5,
                      step: "Lay the dough squares on a parchment paper covered baking sheet and set in the freezer to chill.In a separate bowl, toss the apples with the lemon juice, maple syrup, spices and brown sugar. Make sure to cover all of the apple pieces.Take dough out of freezer. Drop about 1 tablespoon of filling into the center of each piece of dough. Fold one pointed edge towards its opposite corner to form a triangle.  Crimp edges with a fork along the seams. Repeat with all of the dough.",
                      ingredients: [
                        {
                          id: 19334,
                          name: "brown sugar",
                          localizedName: "brown sugar",
                          image: "dark-brown-sugar.png",
                        },
                        {
                          id: 9152,
                          name: "lemon juice",
                          localizedName: "lemon juice",
                          image: "lemon-juice.jpg",
                        },
                        {
                          id: 19911,
                          name: "maple syrup",
                          localizedName: "maple syrup",
                          image: "maple-syrup.png",
                        },
                        {
                          id: 9003,
                          name: "apple",
                          localizedName: "apple",
                          image: "apple.jpg",
                        },
                        {
                          id: 2035,
                          name: "spices",
                          localizedName: "spices",
                          image: "spices.png",
                        },
                        {
                          id: 0,
                          name: "dough",
                          localizedName: "dough",
                          image: "pizza-dough",
                        },
                      ],
                      equipment: [
                        {
                          id: 404770,
                          name: "baking paper",
                          localizedName: "baking paper",
                          image: "baking-paper.jpg",
                        },
                        {
                          id: 404727,
                          name: "baking sheet",
                          localizedName: "baking sheet",
                          image: "baking-sheet.jpg",
                        },
                        {
                          id: 404783,
                          name: "bowl",
                          localizedName: "bowl",
                          image: "bowl.jpg",
                        },
                      ],
                    },
                    {
                      number: 6,
                      step: "Brush a little milk over the top of each turnover and sprinkle with extra sugar if desired. (Pop back into the freezer for a quick chill if the dough is soft.).",
                      ingredients: [
                        {
                          id: 0,
                          name: "dough",
                          localizedName: "dough",
                          image: "pizza-dough",
                        },
                        {
                          id: 19335,
                          name: "sugar",
                          localizedName: "sugar",
                          image: "sugar-in-bowl.png",
                        },
                        {
                          id: 1077,
                          name: "milk",
                          localizedName: "milk",
                          image: "milk.png",
                        },
                        {
                          id: 0,
                          name: "pop",
                          localizedName: "soft drink",
                          image: "",
                        },
                      ],
                      equipment: [],
                    },
                    {
                      number: 7,
                      step: "Bake in a preheated oven at 400 degrees for 20 minutes or until browned.",
                      ingredients: [],
                      equipment: [
                        {
                          id: 404784,
                          name: "oven",
                          localizedName: "oven",
                          image: "oven.jpg",
                        },
                      ],
                      length: {
                        number: 20,
                        unit: "minutes",
                      },
                    },
                  ],
                },
              ],
              originalId: null,
              spoonacularSourceUrl:
                "https://spoonacular.com/apple-hand-pies-632552",
            },
            {
              vegetarian: false,
              vegan: false,
              glutenFree: false,
              dairyFree: false,
              veryHealthy: false,
              cheap: false,
              veryPopular: false,
              sustainable: false,
              weightWatcherSmartPoints: 12,
              gaps: "no",
              lowFodmap: false,
              aggregateLikes: 6,
              spoonacularScore: 36,
              healthScore: 4,
              creditsText:
                "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
              license: "CC BY 3.0",
              sourceName: "Foodista",
              pricePerServing: 61.31,
              extendedIngredients: [
                {
                  id: 18371,
                  aisle: "Baking",
                  image: "white-powder.jpg",
                  consistency: "solid",
                  name: "baking powder",
                  nameClean: "low sodium baking powder",
                  original: "1 teaspoon baking powder",
                  originalString: "1 teaspoon baking powder",
                  originalName: "baking powder",
                  amount: 1,
                  unit: "teaspoon",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 1,
                      unitShort: "tsp",
                      unitLong: "teaspoon",
                    },
                    metric: {
                      amount: 1,
                      unitShort: "tsp",
                      unitLong: "teaspoon",
                    },
                  },
                },
                {
                  id: 18372,
                  aisle: "Baking",
                  image: "white-powder.jpg",
                  consistency: "solid",
                  name: "baking soda",
                  nameClean: "baking soda",
                  original: "1 teaspoon baking soda",
                  originalString: "1 teaspoon baking soda",
                  originalName: "baking soda",
                  amount: 1,
                  unit: "teaspoon",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 1,
                      unitShort: "tsp",
                      unitLong: "teaspoon",
                    },
                    metric: {
                      amount: 1,
                      unitShort: "tsp",
                      unitLong: "teaspoon",
                    },
                  },
                },
                {
                  id: 10020129,
                  aisle: "Baking",
                  image: "flour.png",
                  consistency: "solid",
                  name: "cake flour",
                  nameClean: "cake flour",
                  original: "2 1/4 cups cake flour",
                  originalString: "2 1/4 cups cake flour",
                  originalName: "cake flour",
                  amount: 2.25,
                  unit: "cups",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 2.25,
                      unitShort: "cups",
                      unitLong: "cups",
                    },
                    metric: {
                      amount: 532.323,
                      unitShort: "ml",
                      unitLong: "milliliters",
                    },
                  },
                },
                {
                  id: 19350,
                  aisle: "Baking",
                  image: "corn-syrup.png",
                  consistency: "solid",
                  name: "corn syrup",
                  nameClean: "corn syrup",
                  original: "1 tablespoon corn syrup",
                  originalString: "1 tablespoon corn syrup",
                  originalName: "corn syrup",
                  amount: 1,
                  unit: "tablespoon",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 1,
                      unitShort: "Tbsp",
                      unitLong: "Tbsp",
                    },
                    metric: {
                      amount: 1,
                      unitShort: "Tbsp",
                      unitLong: "Tbsp",
                    },
                  },
                },
                {
                  id: 20027,
                  aisle: "Baking",
                  image: "white-powder.jpg",
                  consistency: "solid",
                  name: "cornstarch",
                  nameClean: "corn starch",
                  original: "2/3 cup cornstarch",
                  originalString: "2/3 cup cornstarch",
                  originalName: "cornstarch",
                  amount: 0.6666666666666666,
                  unit: "cup",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 0.667,
                      unitShort: "cups",
                      unitLong: "cups",
                    },
                    metric: {
                      amount: 157.725,
                      unitShort: "ml",
                      unitLong: "milliliters",
                    },
                  },
                },
                {
                  id: 1123,
                  aisle: "Milk, Eggs, Other Dairy",
                  image: "egg.png",
                  consistency: "solid",
                  name: "eggs",
                  nameClean: "egg",
                  original: "3 eggs",
                  originalString: "3 eggs",
                  originalName: "eggs",
                  amount: 3,
                  unit: "",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 3,
                      unitShort: "",
                      unitLong: "",
                    },
                    metric: {
                      amount: 3,
                      unitShort: "",
                      unitLong: "",
                    },
                  },
                },
                {
                  id: 1077,
                  aisle: "Milk, Eggs, Other Dairy",
                  image: "milk.png",
                  consistency: "liquid",
                  name: "milk",
                  nameClean: "milk",
                  original: "1 cup milk",
                  originalString: "1 cup milk",
                  originalName: "milk",
                  amount: 1,
                  unit: "cup",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 1,
                      unitShort: "cup",
                      unitLong: "cup",
                    },
                    metric: {
                      amount: 236.588,
                      unitShort: "ml",
                      unitLong: "milliliters",
                    },
                  },
                },
                {
                  id: 2047,
                  aisle: "Spices and Seasonings",
                  image: "salt.jpg",
                  consistency: "solid",
                  name: "salt",
                  nameClean: "salt",
                  original: "1/2 teaspoon salt",
                  originalString: "1/2 teaspoon salt",
                  originalName: "salt",
                  amount: 0.5,
                  unit: "teaspoon",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 0.5,
                      unitShort: "tsps",
                      unitLong: "teaspoons",
                    },
                    metric: {
                      amount: 0.5,
                      unitShort: "tsps",
                      unitLong: "teaspoons",
                    },
                  },
                },
                {
                  id: 19335,
                  aisle: "Baking",
                  image: "sugar-in-bowl.png",
                  consistency: "solid",
                  name: "sugar",
                  nameClean: "sugar",
                  original: "1/4 cup sugar",
                  originalString: "1/4 cup sugar",
                  originalName: "sugar",
                  amount: 0.25,
                  unit: "cup",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 0.25,
                      unitShort: "cups",
                      unitLong: "cups",
                    },
                    metric: {
                      amount: 59.147,
                      unitShort: "ml",
                      unitLong: "milliliters",
                    },
                  },
                },
                {
                  id: 1145,
                  aisle: "Milk, Eggs, Other Dairy",
                  image: "butter-sliced.jpg",
                  consistency: "solid",
                  name: "unsalted butter",
                  nameClean: "unsalted butter",
                  original: "6 tablespoons unsalted butter, cut into cubes",
                  originalString:
                    "6 tablespoons unsalted butter, cut into cubes",
                  originalName: "unsalted butter, cut into cubes",
                  amount: 6,
                  unit: "tablespoons",
                  meta: ["unsalted", "cut into cubes"],
                  metaInformation: ["unsalted", "cut into cubes"],
                  measures: {
                    us: {
                      amount: 6,
                      unitShort: "Tbsps",
                      unitLong: "Tbsps",
                    },
                    metric: {
                      amount: 6,
                      unitShort: "Tbsps",
                      unitLong: "Tbsps",
                    },
                  },
                },
                {
                  id: 19165,
                  aisle: "Baking",
                  image: "cocoa-powder.png",
                  consistency: "solid",
                  name: "unsweetened cocoa powder",
                  nameClean: "hersheys cocoa",
                  original: "1 1/2 cups unsweetened cocoa powder",
                  originalString: "1 1/2 cups unsweetened cocoa powder",
                  originalName: "unsweetened cocoa powder",
                  amount: 1.5,
                  unit: "cups",
                  meta: ["unsweetened"],
                  metaInformation: ["unsweetened"],
                  measures: {
                    us: {
                      amount: 1.5,
                      unitShort: "cups",
                      unitLong: "cups",
                    },
                    metric: {
                      amount: 354.882,
                      unitShort: "ml",
                      unitLong: "milliliters",
                    },
                  },
                },
                {
                  id: 2050,
                  aisle: "Baking",
                  image: "vanilla-extract.jpg",
                  consistency: "liquid",
                  name: "vanilla extract",
                  nameClean: "vanilla extract",
                  original: "1/2 teaspoon vanilla extract",
                  originalString: "1/2 teaspoon vanilla extract",
                  originalName: "vanilla extract",
                  amount: 0.5,
                  unit: "teaspoon",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 0.5,
                      unitShort: "tsps",
                      unitLong: "teaspoons",
                    },
                    metric: {
                      amount: 0.5,
                      unitShort: "tsps",
                      unitLong: "teaspoons",
                    },
                  },
                },
                {
                  id: 4615,
                  aisle: "Oil, Vinegar, Salad Dressing;Baking",
                  image: "shortening.jpg",
                  consistency: "solid",
                  name: "vegetable shortening",
                  nameClean: "shortening",
                  original: "1/4 cup vegetable shortening",
                  originalString: "1/4 cup vegetable shortening",
                  originalName: "vegetable shortening",
                  amount: 0.25,
                  unit: "cup",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 0.25,
                      unitShort: "cups",
                      unitLong: "cups",
                    },
                    metric: {
                      amount: 59.147,
                      unitShort: "ml",
                      unitLong: "milliliters",
                    },
                  },
                },
                {
                  id: 14412,
                  aisle: "Beverages",
                  image: "water.png",
                  consistency: "liquid",
                  name: "water",
                  nameClean: "water",
                  original: "2 cups of water",
                  originalString: "2 cups of water",
                  originalName: "water",
                  amount: 2,
                  unit: "cups",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 2,
                      unitShort: "cups",
                      unitLong: "cups",
                    },
                    metric: {
                      amount: 473.176,
                      unitShort: "ml",
                      unitLong: "milliliters",
                    },
                  },
                },
              ],
              id: 636271,
              title: "Brooklyn Blackout Cake",
              readyInMinutes: 45,
              servings: 10,
              sourceUrl:
                "http://www.foodista.com/recipe/RTL8NYCC/brooklyn-blackout-cake",
              image: "https://spoonacular.com/recipeImages/636271-556x370.jpg",
              imageType: "jpg",
              summary:
                'Brooklyn Blackout Cake might be just the dessert you are searching for. This recipe serves 10 and costs 61 cents per serving. One serving contains <b>329 calories</b>, <b>8g of protein</b>, and <b>16g of fat</b>. 6 people have tried and liked this recipe. A mixture of baking powder, cornstarch, vanillan extract, and a handful of other ingredients are all it takes to make this recipe so tasty. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 38%</b>. This score is not so spectacular. Try <a href="https://spoonacular.com/recipes/the-new-brooklyn-blackout-cake-597262">The New Brooklyn Blackout Cake</a>, <a href="https://spoonacular.com/recipes/brooklyn-blackout-cake-recipe-157830">Brooklyn Blackout Cake Recipe</a>, and <a href="https://spoonacular.com/recipes/brooklyn-blackout-cakelets-553680">Brooklyn Blackout Cakelets</a> for similar recipes.',
              cuisines: [],
              dishTypes: ["side dish"],
              diets: [],
              occasions: [],
              instructions:
                "<ol><li>Preheat the oven to 375 degrees.</li><li>Butter and flour 2 (9-inch) cake pans. Cut 2 circles of parchment paper or waxed paper to fit the bottoms of the pans, then press them in.</li><li>In a mixer, cream the butter and shortening together. Add the sugar and mix until light and fluffy.</li><li>Add the eggs one by one, mixing after each addition.</li><li>Add the vanilla, cocoa, baking powder, baking soda, and salt and mix.</li><li>Then add, alternating, about 1/3 of the cake flour, then about 1/3 of the milk until finished.</li><li>Pour into the prepared pans and bake for 30 to 35 minutes or until a tester inserted into the center comes out clean,</li><li>Let cool in the pan for 15 minutes, then turn out onto wire racks and let cool completely, to room temperature.</li><li>Using a long serrated knife, cut the cake layers in half horizontally. Reserving 3 halves for the cake, put the remaining half in a food processor, breaking it up with your hands. Pulse into fine crumbs.</li><li>Filling: Pour 2 1/2 cups of the water, the sugar, corn syrup and cocoa powder into a large non-reactive saucepan and bring to a boil over medium-high heat, whisking occasionally.</li><li>Meanwhile, in a small bowl, whisk the remaining 1/2 cup of water and the cornstarch.</li><li>Whisk into the cocoa mixture in the saucepan and return the mixture to a boil, whisking constantly until very thick, 3 to 4 minutes.</li><li>Remove from the heat and stir in the butter and vanilla.</li><li>Pour into a bowl. Cover with plastic wrap, lightly pressing the plastic against the surface to prevent a skin from forming. Chill until firm, about 45 minutes.</li><li>To finish the cake, place a cake layer on a cake plate or serving platter (reserving the most even layer for the top) and spread with cooled custard. Top with another layer of cake, then custard, then the final layer of cake. Cover the top and sides of the cake with the remaining custard. Coat the cake with the cake crumbs. Chill until ready to serve, at least 2 hours.</li></ol>",
              analyzedInstructions: [
                {
                  name: "",
                  steps: [
                    {
                      number: 1,
                      step: "Preheat the oven to 375 degrees.Butter and flour 2 (9-inch) cake pans.",
                      ingredients: [
                        {
                          id: 1001,
                          name: "butter",
                          localizedName: "butter",
                          image: "butter-sliced.jpg",
                        },
                        {
                          id: 20081,
                          name: "all purpose flour",
                          localizedName: "all purpose flour",
                          image: "flour.png",
                        },
                      ],
                      equipment: [
                        {
                          id: 404784,
                          name: "oven",
                          localizedName: "oven",
                          image: "oven.jpg",
                        },
                      ],
                    },
                    {
                      number: 2,
                      step: "Cut 2 circles of parchment paper or waxed paper to fit the bottoms of the pans, then press them in.In a mixer, cream the butter and shortening together.",
                      ingredients: [
                        {
                          id: 4615,
                          name: "shortening",
                          localizedName: "shortening",
                          image: "shortening.jpg",
                        },
                        {
                          id: 1001,
                          name: "butter",
                          localizedName: "butter",
                          image: "butter-sliced.jpg",
                        },
                        {
                          id: 1053,
                          name: "cream",
                          localizedName: "cream",
                          image: "fluid-cream.jpg",
                        },
                      ],
                      equipment: [
                        {
                          id: 404770,
                          name: "baking paper",
                          localizedName: "baking paper",
                          image: "baking-paper.jpg",
                        },
                        {
                          id: 404726,
                          name: "blender",
                          localizedName: "blender",
                          image: "blender.png",
                        },
                      ],
                    },
                    {
                      number: 3,
                      step: "Add the sugar and mix until light and fluffy.",
                      ingredients: [
                        {
                          id: 19335,
                          name: "sugar",
                          localizedName: "sugar",
                          image: "sugar-in-bowl.png",
                        },
                      ],
                      equipment: [],
                    },
                    {
                      number: 4,
                      step: "Add the eggs one by one, mixing after each addition.",
                      ingredients: [
                        {
                          id: 1123,
                          name: "egg",
                          localizedName: "egg",
                          image: "egg.png",
                        },
                      ],
                      equipment: [],
                    },
                    {
                      number: 5,
                      step: "Add the vanilla, cocoa, baking powder, baking soda, and salt and mix.Then add, alternating, about 1/3 of the cake flour, then about 1/3 of the milk until finished.",
                      ingredients: [
                        {
                          id: 18369,
                          name: "baking powder",
                          localizedName: "baking powder",
                          image: "white-powder.jpg",
                        },
                        {
                          id: 18372,
                          name: "baking soda",
                          localizedName: "baking soda",
                          image: "white-powder.jpg",
                        },
                        {
                          id: 10020129,
                          name: "cake flour",
                          localizedName: "cake flour",
                          image: "flour.png",
                        },
                        {
                          id: 1052050,
                          name: "vanilla",
                          localizedName: "vanilla",
                          image: "vanilla.jpg",
                        },
                        {
                          id: 19165,
                          name: "cocoa powder",
                          localizedName: "cocoa powder",
                          image: "cocoa-powder.png",
                        },
                        {
                          id: 1077,
                          name: "milk",
                          localizedName: "milk",
                          image: "milk.png",
                        },
                        {
                          id: 2047,
                          name: "salt",
                          localizedName: "salt",
                          image: "salt.jpg",
                        },
                      ],
                      equipment: [],
                    },
                    {
                      number: 6,
                      step: "Pour into the prepared pans and bake for 30 to 35 minutes or until a tester inserted into the center comes out clean,",
                      ingredients: [],
                      equipment: [
                        {
                          id: 404784,
                          name: "oven",
                          localizedName: "oven",
                          image: "oven.jpg",
                        },
                      ],
                      length: {
                        number: 30,
                        unit: "minutes",
                      },
                    },
                  ],
                },
                {
                  name: "Let cool in the pan for 15 minutes, then turn out onto wire racks and let cool completely, to room temperature.Using a long serrated knife, cut the cake layers in half horizontally. Reserving 3 halves for the cake, put the remaining half in a food processor, breaking it up with your hands. Pulse into fine crumbs.Filling",
                  steps: [
                    {
                      number: 1,
                      step: "Pour 2 1/2 cups of the water, the sugar, corn syrup and cocoa powder into a large non-reactive saucepan and bring to a boil over medium-high heat, whisking occasionally.Meanwhile, in a small bowl, whisk the remaining 1/2 cup of water and the cornstarch.",
                      ingredients: [
                        {
                          id: 19165,
                          name: "cocoa powder",
                          localizedName: "cocoa powder",
                          image: "cocoa-powder.png",
                        },
                        {
                          id: 19350,
                          name: "corn syrup",
                          localizedName: "corn syrup",
                          image: "corn-syrup.png",
                        },
                        {
                          id: 20027,
                          name: "corn starch",
                          localizedName: "corn starch",
                          image: "white-powder.jpg",
                        },
                        {
                          id: 19335,
                          name: "sugar",
                          localizedName: "sugar",
                          image: "sugar-in-bowl.png",
                        },
                        {
                          id: 14412,
                          name: "water",
                          localizedName: "water",
                          image: "water.png",
                        },
                      ],
                      equipment: [
                        {
                          id: 404661,
                          name: "whisk",
                          localizedName: "whisk",
                          image: "whisk.png",
                        },
                        {
                          id: 404669,
                          name: "sauce pan",
                          localizedName: "sauce pan",
                          image: "sauce-pan.jpg",
                        },
                        {
                          id: 404783,
                          name: "bowl",
                          localizedName: "bowl",
                          image: "bowl.jpg",
                        },
                      ],
                    },
                    {
                      number: 2,
                      step: "Whisk into the cocoa mixture in the saucepan and return the mixture to a boil, whisking constantly until very thick, 3 to 4 minutes.",
                      ingredients: [
                        {
                          id: 19165,
                          name: "cocoa powder",
                          localizedName: "cocoa powder",
                          image: "cocoa-powder.png",
                        },
                      ],
                      equipment: [
                        {
                          id: 404661,
                          name: "whisk",
                          localizedName: "whisk",
                          image: "whisk.png",
                        },
                        {
                          id: 404669,
                          name: "sauce pan",
                          localizedName: "sauce pan",
                          image: "sauce-pan.jpg",
                        },
                      ],
                      length: {
                        number: 3,
                        unit: "minutes",
                      },
                    },
                    {
                      number: 3,
                      step: "Remove from the heat and stir in the butter and vanilla.",
                      ingredients: [
                        {
                          id: 1052050,
                          name: "vanilla",
                          localizedName: "vanilla",
                          image: "vanilla.jpg",
                        },
                        {
                          id: 1001,
                          name: "butter",
                          localizedName: "butter",
                          image: "butter-sliced.jpg",
                        },
                      ],
                      equipment: [],
                    },
                    {
                      number: 4,
                      step: "Pour into a bowl. Cover with plastic wrap, lightly pressing the plastic against the surface to prevent a skin from forming. Chill until firm, about 45 minutes.To finish the cake, place a cake layer on a cake plate or serving platter (reserving the most even layer for the top) and spread with cooled custard. Top with another layer of cake, then custard, then the final layer of cake. Cover the top and sides of the cake with the remaining custard. Coat the cake with the cake crumbs. Chill until ready to serve, at least 2 hours.",
                      ingredients: [
                        {
                          id: 19170,
                          name: "custard",
                          localizedName: "custard",
                          image: "custard.png",
                        },
                        {
                          id: 0,
                          name: "spread",
                          localizedName: "spread",
                          image: "",
                        },
                        {
                          id: 10018364,
                          name: "wrap",
                          localizedName: "wrap",
                          image: "flour-tortilla.jpg",
                        },
                      ],
                      equipment: [
                        {
                          id: 404730,
                          name: "plastic wrap",
                          localizedName: "plastic wrap",
                          image: "plastic-wrap.jpg",
                        },
                        {
                          id: 404783,
                          name: "bowl",
                          localizedName: "bowl",
                          image: "bowl.jpg",
                        },
                      ],
                      length: {
                        number: 165,
                        unit: "minutes",
                      },
                    },
                  ],
                },
              ],
              originalId: null,
              spoonacularSourceUrl:
                "https://spoonacular.com/brooklyn-blackout-cake-636271",
            },
            {
              vegetarian: false,
              vegan: false,
              glutenFree: false,
              dairyFree: false,
              veryHealthy: false,
              cheap: false,
              veryPopular: false,
              sustainable: false,
              weightWatcherSmartPoints: 17,
              gaps: "no",
              lowFodmap: false,
              aggregateLikes: 10,
              spoonacularScore: 36,
              healthScore: 5,
              creditsText:
                "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
              license: "CC BY 3.0",
              sourceName: "Foodista",
              pricePerServing: 121.07,
              extendedIngredients: [
                {
                  id: 19078,
                  aisle: "Baking",
                  image: "baking-chocolate.jpg",
                  consistency: "solid",
                  name: "baking chocolate",
                  nameClean: "unsweetened baking chocolate",
                  original: "180g baking chocolate, chop to pieces",
                  originalString: "180g baking chocolate, chop to pieces",
                  originalName: "baking chocolate, chop to pieces",
                  amount: 180,
                  unit: "g",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 6.349,
                      unitShort: "oz",
                      unitLong: "ounces",
                    },
                    metric: {
                      amount: 180,
                      unitShort: "g",
                      unitLong: "grams",
                    },
                  },
                },
                {
                  id: 19334,
                  aisle: "Baking",
                  image: "light-brown-sugar.jpg",
                  consistency: "solid",
                  name: "brown sugar",
                  nameClean: "golden brown sugar",
                  original: "Brown sugar (40g)",
                  originalString: "Brown sugar (40g)",
                  originalName: "Brown sugar",
                  amount: 40,
                  unit: "g",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 1.411,
                      unitShort: "oz",
                      unitLong: "ounces",
                    },
                    metric: {
                      amount: 40,
                      unitShort: "g",
                      unitLong: "grams",
                    },
                  },
                },
                {
                  id: 1001,
                  aisle: "Milk, Eggs, Other Dairy",
                  image: "butter-sliced.jpg",
                  consistency: "solid",
                  name: "butter",
                  nameClean: "butter",
                  original: "120g Butter",
                  originalString: "120g Butter",
                  originalName: "Butter",
                  amount: 120,
                  unit: "g",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 4.233,
                      unitShort: "oz",
                      unitLong: "ounces",
                    },
                    metric: {
                      amount: 120,
                      unitShort: "g",
                      unitLong: "grams",
                    },
                  },
                },
                {
                  id: 1012010,
                  aisle: "Spices and Seasonings",
                  image: "cinnamon.jpg",
                  consistency: "solid",
                  name: "cinnamon powder",
                  nameClean: "ground cinnamon",
                  original: "1/2 tsp Cinnamon powder",
                  originalString: "1/2 tsp Cinnamon powder",
                  originalName: "Cinnamon powder",
                  amount: 0.5,
                  unit: "tsp",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 0.5,
                      unitShort: "tsps",
                      unitLong: "teaspoons",
                    },
                    metric: {
                      amount: 0.5,
                      unitShort: "tsps",
                      unitLong: "teaspoons",
                    },
                  },
                },
                {
                  id: 1123,
                  aisle: "Milk, Eggs, Other Dairy",
                  image: "egg.png",
                  consistency: "solid",
                  name: "eggs",
                  nameClean: "egg",
                  original: "2 Eggs",
                  originalString: "2 Eggs",
                  originalName: "Eggs",
                  amount: 2,
                  unit: "",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 2,
                      unitShort: "",
                      unitLong: "",
                    },
                    metric: {
                      amount: 2,
                      unitShort: "",
                      unitLong: "",
                    },
                  },
                },
                {
                  id: 1069003,
                  aisle: "Produce",
                  image: "grannysmith-apple.png",
                  consistency: "solid",
                  name: "green apple",
                  nameClean: "green apple",
                  original:
                    "1 Green apple (shredded), remove the apple skin and chop to large cubes",
                  originalString:
                    "1 Green apple (shredded), remove the apple skin and chop to large cubes",
                  originalName:
                    "Green apple (shredded), remove the apple skin and chop to large cubes",
                  amount: 1,
                  unit: "large",
                  meta: ["shredded", "green", "()"],
                  metaInformation: ["shredded", "green", "()"],
                  measures: {
                    us: {
                      amount: 1,
                      unitShort: "large",
                      unitLong: "large",
                    },
                    metric: {
                      amount: 1,
                      unitShort: "large",
                      unitLong: "large",
                    },
                  },
                },
                {
                  id: 20129,
                  aisle: "Baking",
                  image: "flour.png",
                  consistency: "solid",
                  name: "self rising flour",
                  nameClean: "self rising flour",
                  original: "70g Self rising flour",
                  originalString: "70g Self rising flour",
                  originalName: "Self rising flour",
                  amount: 70,
                  unit: "g",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 2.469,
                      unitShort: "oz",
                      unitLong: "ounces",
                    },
                    metric: {
                      amount: 70,
                      unitShort: "g",
                      unitLong: "grams",
                    },
                  },
                },
                {
                  id: 19903,
                  aisle: "Sweet Snacks",
                  image: "dark-chocolate-pieces.jpg",
                  consistency: "solid",
                  name: "semi-sweet chocolate",
                  nameClean: "semisweet chocolate",
                  original: "150g Semi-sweet chocolate",
                  originalString: "150g Semi-sweet chocolate",
                  originalName: "Semi-sweet chocolate",
                  amount: 150,
                  unit: "g",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 5.291,
                      unitShort: "oz",
                      unitLong: "ounces",
                    },
                    metric: {
                      amount: 150,
                      unitShort: "g",
                      unitLong: "grams",
                    },
                  },
                },
                {
                  id: 2050,
                  aisle: "Baking",
                  image: "vanilla-extract.jpg",
                  consistency: "liquid",
                  name: "vanilla extract",
                  nameClean: "vanilla extract",
                  original: "1 tsp Vanilla extract",
                  originalString: "1 tsp Vanilla extract",
                  originalName: "Vanilla extract",
                  amount: 1,
                  unit: "tsp",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 1,
                      unitShort: "tsp",
                      unitLong: "teaspoon",
                    },
                    metric: {
                      amount: 1,
                      unitShort: "tsp",
                      unitLong: "teaspoon",
                    },
                  },
                },
                {
                  id: 12155,
                  aisle: "Nuts;Baking",
                  image: "walnuts.jpg",
                  consistency: "solid",
                  name: "walnut",
                  nameClean: "walnuts",
                  original: "60g Walnut, toasted and break into half",
                  originalString: "60g Walnut, toasted and break into half",
                  originalName: "Walnut, toasted and break into half",
                  amount: 60,
                  unit: "g",
                  meta: ["toasted"],
                  metaInformation: ["toasted"],
                  measures: {
                    us: {
                      amount: 2.116,
                      unitShort: "oz",
                      unitLong: "ounces",
                    },
                    metric: {
                      amount: 60,
                      unitShort: "g",
                      unitLong: "grams",
                    },
                  },
                },
                {
                  id: 1001053,
                  aisle: "Milk, Eggs, Other Dairy",
                  image: "fluid-cream.jpg",
                  consistency: "liquid",
                  name: "whipping cream",
                  nameClean: "whipping cream",
                  original: "100g Whipping cream",
                  originalString: "100g Whipping cream",
                  originalName: "Whipping cream",
                  amount: 100,
                  unit: "g",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 3.527,
                      unitShort: "oz",
                      unitLong: "ounces",
                    },
                    metric: {
                      amount: 100,
                      unitShort: "g",
                      unitLong: "grams",
                    },
                  },
                },
              ],
              id: 632611,
              title: "Apple Walnut Brownies",
              readyInMinutes: 75,
              servings: 10,
              sourceUrl:
                "http://www.foodista.com/recipe/N6KNP37Q/apple-walnut-brownies",
              image: "https://spoonacular.com/recipeImages/632611-556x370.jpg",
              imageType: "jpg",
              summary:
                'The recipe Apple Walnut Brownies could satisfy your American craving in about <b>1 hour and 15 minutes</b>. For <b>$1.19 per serving</b>, you get a dessert that serves 10. One serving contains <b>401 calories</b>, <b>6g of protein</b>, and <b>33g of fat</b>. This recipe from Foodista has 10 fans. A mixture of self rising flour, semi-sweet chocolate, butter, and a handful of other ingredients are all it takes to make this recipe so scrumptious. All things considered, we decided this recipe <b>deserves a spoonacular score of 39%</b>. This score is not so spectacular. Similar recipes include <a href="https://spoonacular.com/recipes/walnut-brownies-454785">Walnut Brownies</a>, <a href="https://spoonacular.com/recipes/walnut-oat-brownies-416333">Walnut Oat Brownies</a>, and <a href="https://spoonacular.com/recipes/walnut-brownies-408642">Walnut Brownies</a>.',
              cuisines: ["American"],
              dishTypes: ["side dish"],
              diets: [],
              occasions: [],
              instructions:
                "<ol><li>Preheat oven to 160C/320F. Line a rectangle cake pan.</li><li>Combine butter and chopped baking chocolate over low heat until melted. Remove from heat and set aside to cool.</li><li>Place eggs. brown sugar, and vanilla extract in a mixing bowl and beat till fluffy and add in the melted butter chocolate mixture, stir till well combined.</li><li>Add self rising flour, cinnamon, walnuts, and green apple, mix well and pour into prepared cake pan.</li><li>Bake in preheated oven for 40 to 45 minutes and leave cake to cool. Best to chill for at least one hour for easy spreading of the ganache cream.</li><li>To make the chocolate ganache: bring the cream to just a boil over medium-high heat.</li><li>Add in the semi-sweet chocolate pieces and blend well till chocolate melts. </li><li>Whisk until creamy.</li><li>Let cool and spread onto cake.</li></ol>",
              analyzedInstructions: [
                {
                  name: "",
                  steps: [
                    {
                      number: 1,
                      step: "Preheat oven to 160C/320F. Line a rectangle cake pan.",
                      ingredients: [],
                      equipment: [
                        {
                          id: 404747,
                          name: "cake form",
                          localizedName: "cake form",
                          image: "cake-pan.png",
                        },
                        {
                          id: 404784,
                          name: "oven",
                          localizedName: "oven",
                          image: "oven.jpg",
                          temperature: {
                            number: 160,
                            unit: "Celsius",
                          },
                        },
                      ],
                    },
                    {
                      number: 2,
                      step: "Combine butter and chopped baking chocolate over low heat until melted.",
                      ingredients: [
                        {
                          id: 19078,
                          name: "unsweetened baking chocolate",
                          localizedName: "unsweetened baking chocolate",
                          image: "baking-chocolate.jpg",
                        },
                        {
                          id: 1001,
                          name: "butter",
                          localizedName: "butter",
                          image: "butter-sliced.jpg",
                        },
                      ],
                      equipment: [],
                    },
                    {
                      number: 3,
                      step: "Remove from heat and set aside to cool.",
                      ingredients: [],
                      equipment: [],
                    },
                    {
                      number: 4,
                      step: "Place eggs. brown sugar, and vanilla extract in a mixing bowl and beat till fluffy and add in the melted butter chocolate mixture, stir till well combined.",
                      ingredients: [
                        {
                          id: 2050,
                          name: "vanilla extract",
                          localizedName: "vanilla extract",
                          image: "vanilla-extract.jpg",
                        },
                        {
                          id: 19334,
                          name: "brown sugar",
                          localizedName: "brown sugar",
                          image: "dark-brown-sugar.png",
                        },
                        {
                          id: 19081,
                          name: "chocolate",
                          localizedName: "chocolate",
                          image: "milk-chocolate.jpg",
                        },
                        {
                          id: 1001,
                          name: "butter",
                          localizedName: "butter",
                          image: "butter-sliced.jpg",
                        },
                        {
                          id: 1123,
                          name: "egg",
                          localizedName: "egg",
                          image: "egg.png",
                        },
                      ],
                      equipment: [
                        {
                          id: 405907,
                          name: "mixing bowl",
                          localizedName: "mixing bowl",
                          image: "mixing-bowl.jpg",
                        },
                      ],
                    },
                    {
                      number: 5,
                      step: "Add self rising flour, cinnamon, walnuts, and green apple, mix well and pour into prepared cake pan.",
                      ingredients: [
                        {
                          id: 20129,
                          name: "self rising flour",
                          localizedName: "self rising flour",
                          image: "flour.png",
                        },
                        {
                          id: 1069003,
                          name: "green apple",
                          localizedName: "green apple",
                          image: "grannysmith-apple.png",
                        },
                        {
                          id: 2010,
                          name: "cinnamon",
                          localizedName: "cinnamon",
                          image: "cinnamon.jpg",
                        },
                        {
                          id: 12155,
                          name: "walnuts",
                          localizedName: "walnuts",
                          image: "walnuts.jpg",
                        },
                      ],
                      equipment: [
                        {
                          id: 404747,
                          name: "cake form",
                          localizedName: "cake form",
                          image: "cake-pan.png",
                        },
                      ],
                    },
                    {
                      number: 6,
                      step: "Bake in preheated oven for 40 to 45 minutes and leave cake to cool. Best to chill for at least one hour for easy spreading of the ganache cream.To make the chocolate ganache: bring the cream to just a boil over medium-high heat.",
                      ingredients: [
                        {
                          id: 19081,
                          name: "chocolate",
                          localizedName: "chocolate",
                          image: "milk-chocolate.jpg",
                        },
                        {
                          id: 1053,
                          name: "cream",
                          localizedName: "cream",
                          image: "fluid-cream.jpg",
                        },
                      ],
                      equipment: [
                        {
                          id: 404784,
                          name: "oven",
                          localizedName: "oven",
                          image: "oven.jpg",
                        },
                      ],
                      length: {
                        number: 100,
                        unit: "minutes",
                      },
                    },
                    {
                      number: 7,
                      step: "Add in the semi-sweet chocolate pieces and blend well till chocolate melts.",
                      ingredients: [
                        {
                          id: 19903,
                          name: "semisweet chocolate",
                          localizedName: "semisweet chocolate",
                          image: "dark-chocolate-pieces.jpg",
                        },
                        {
                          id: 19081,
                          name: "chocolate",
                          localizedName: "chocolate",
                          image: "milk-chocolate.jpg",
                        },
                      ],
                      equipment: [],
                    },
                    {
                      number: 8,
                      step: "Whisk until creamy.",
                      ingredients: [],
                      equipment: [
                        {
                          id: 404661,
                          name: "whisk",
                          localizedName: "whisk",
                          image: "whisk.png",
                        },
                      ],
                    },
                    {
                      number: 9,
                      step: "Let cool and spread onto cake.",
                      ingredients: [
                        {
                          id: 0,
                          name: "spread",
                          localizedName: "spread",
                          image: "",
                        },
                      ],
                      equipment: [],
                    },
                  ],
                },
              ],
              originalId: null,
              spoonacularSourceUrl:
                "https://spoonacular.com/apple-walnut-brownies-632611",
            },
            {
              vegetarian: true,
              vegan: false,
              glutenFree: false,
              dairyFree: false,
              veryHealthy: false,
              cheap: false,
              veryPopular: false,
              sustainable: false,
              weightWatcherSmartPoints: 14,
              gaps: "no",
              lowFodmap: false,
              aggregateLikes: 47,
              spoonacularScore: 51,
              healthScore: 7,
              creditsText:
                "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
              license: "CC BY 3.0",
              sourceName: "Foodista",
              pricePerServing: 42.9,
              extendedIngredients: [
                {
                  id: 14412,
                  aisle: "Beverages",
                  image: "water.png",
                  consistency: "liquid",
                  name: "ice water",
                  nameClean: "water",
                  original: "1/2 c. ice water",
                  originalString: "1/2 c. ice water",
                  originalName: "ice water",
                  amount: 0.5,
                  unit: "c",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 0.5,
                      unitShort: "cups",
                      unitLong: "cups",
                    },
                    metric: {
                      amount: 118.294,
                      unitShort: "ml",
                      unitLong: "milliliters",
                    },
                  },
                },
                {
                  id: 1011256,
                  aisle: "Milk, Eggs, Other Dairy",
                  image: "plain-yogurt.jpg",
                  consistency: "liquid",
                  name: "nonfat greek yogurt",
                  nameClean: "fat free greek yogurt",
                  original: "1/3 c. nonfat greek yogurt",
                  originalString: "1/3 c. nonfat greek yogurt",
                  originalName: "nonfat greek yogurt",
                  amount: 0.3333333333333333,
                  unit: "c",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 0.333,
                      unitShort: "cups",
                      unitLong: "cups",
                    },
                    metric: {
                      amount: 78.863,
                      unitShort: "ml",
                      unitLong: "milliliters",
                    },
                  },
                },
                {
                  id: 4582,
                  aisle: "Oil, Vinegar, Salad Dressing",
                  image: "vegetable-oil.jpg",
                  consistency: "liquid",
                  name: "canola oil",
                  nameClean: "cooking oil",
                  original: "1/4 c. canola oil, plus 1 t. for cooking the naan",
                  originalString:
                    "1/4 c. canola oil, plus 1 t. for cooking the naan",
                  originalName: "canola oil, plus 1 t. for cooking the naan",
                  amount: 0.25,
                  unit: "c",
                  meta: ["for cooking the naan"],
                  metaInformation: ["for cooking the naan"],
                  measures: {
                    us: {
                      amount: 0.25,
                      unitShort: "cups",
                      unitLong: "cups",
                    },
                    metric: {
                      amount: 59.147,
                      unitShort: "ml",
                      unitLong: "milliliters",
                    },
                  },
                },
                {
                  id: 1125,
                  aisle: "Milk, Eggs, Other Dairy",
                  image: "egg-yolk.jpg",
                  consistency: "solid",
                  name: "egg yolk",
                  nameClean: "egg yolk",
                  original: "1 large egg yolk",
                  originalString: "1 large egg yolk",
                  originalName: "egg yolk",
                  amount: 1,
                  unit: "large",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 1,
                      unitShort: "large",
                      unitLong: "large",
                    },
                    metric: {
                      amount: 1,
                      unitShort: "large",
                      unitLong: "large",
                    },
                  },
                },
                {
                  id: 20081,
                  aisle: "Baking",
                  image: "flour.png",
                  consistency: "solid",
                  name: "flour",
                  nameClean: "wheat flour",
                  original: "2 1/4 c. flour",
                  originalString: "2 1/4 c. flour",
                  originalName: "flour",
                  amount: 2.25,
                  unit: "c",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 2.25,
                      unitShort: "cups",
                      unitLong: "cups",
                    },
                    metric: {
                      amount: 532.323,
                      unitShort: "ml",
                      unitLong: "milliliters",
                    },
                  },
                },
                {
                  id: 19335,
                  aisle: "Baking",
                  image: "sugar-in-bowl.png",
                  consistency: "solid",
                  name: "sugar",
                  nameClean: "sugar",
                  original: "1 1/4 t. sugar",
                  originalString: "1 1/4 t. sugar",
                  originalName: "sugar",
                  amount: 1.25,
                  unit: "t",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 1.25,
                      unitShort: "tsps",
                      unitLong: "teaspoons",
                    },
                    metric: {
                      amount: 1.25,
                      unitShort: "tsps",
                      unitLong: "teaspoons",
                    },
                  },
                },
                {
                  id: 18375,
                  aisle: "Baking",
                  image: "yeast-granules.jpg",
                  consistency: "solid",
                  name: "yeast",
                  nameClean: "dry yeast",
                  original: "1/2 t. instant or rapid-rise yeast",
                  originalString: "1/2 t. instant or rapid-rise yeast",
                  originalName: "instant or rapid-rise yeast",
                  amount: 0.5,
                  unit: "t",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 0.5,
                      unitShort: "tsps",
                      unitLong: "teaspoons",
                    },
                    metric: {
                      amount: 0.5,
                      unitShort: "tsps",
                      unitLong: "teaspoons",
                    },
                  },
                },
                {
                  id: 2047,
                  aisle: "Spices and Seasonings",
                  image: "salt.jpg",
                  consistency: "solid",
                  name: "salt",
                  nameClean: "salt",
                  original: "3/4 t. salt",
                  originalString: "3/4 t. salt",
                  originalName: "salt",
                  amount: 0.75,
                  unit: "t",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 0.75,
                      unitShort: "tsps",
                      unitLong: "teaspoons",
                    },
                    metric: {
                      amount: 0.75,
                      unitShort: "tsps",
                      unitLong: "teaspoons",
                    },
                  },
                },
                {
                  id: 1001,
                  aisle: "Milk, Eggs, Other Dairy",
                  image: "butter-sliced.jpg",
                  consistency: "solid",
                  name: "butter",
                  nameClean: "butter",
                  original: "2 T. butter",
                  originalString: "2 T. butter",
                  originalName: "butter",
                  amount: 2,
                  unit: "T",
                  meta: [],
                  metaInformation: [],
                  measures: {
                    us: {
                      amount: 2,
                      unitShort: "Tbsps",
                      unitLong: "Tbsps",
                    },
                    metric: {
                      amount: 2,
                      unitShort: "Tbsps",
                      unitLong: "Tbsps",
                    },
                  },
                },
                {
                  id: 11215,
                  aisle: "Produce",
                  image: "garlic.png",
                  consistency: "solid",
                  name: "garlic",
                  nameClean: "garlic",
                  original: "1 clove garlic, minced",
                  originalString: "1 clove garlic, minced",
                  originalName: "garlic, minced",
                  amount: 1,
                  unit: "clove",
                  meta: ["minced"],
                  metaInformation: ["minced"],
                  measures: {
                    us: {
                      amount: 1,
                      unitShort: "clove",
                      unitLong: "clove",
                    },
                    metric: {
                      amount: 1,
                      unitShort: "clove",
                      unitLong: "clove",
                    },
                  },
                },
              ],
              id: 644376,
              title: "Garlic-Butter Naan",
              readyInMinutes: 45,
              servings: 4,
              sourceUrl:
                "https://www.foodista.com/recipe/6BPCGSNT/garlic-butter-naan",
              image: "https://spoonacular.com/recipeImages/644376-556x370.jpg",
              imageType: "jpg",
              summary:
                'Garlic-Butter Naan is a <b>lacto ovo vegetarian</b> hor d\'oeuvre. This recipe makes 4 servings with <b>464 calories</b>, <b>10g of protein</b>, and <b>22g of fat</b> each. For <b>43 cents per serving</b>, this recipe <b>covers 13%</b> of your daily requirements of vitamins and minerals. This recipe from Foodista requires sugar, nonfat greek yogurt, butter, and garlic. 47 people have made this recipe and would make it again. This recipe is typical of Indian cuisine. From preparation to the plate, this recipe takes about <b>about 45 minutes</b>. With a spoonacular <b>score of 50%</b>, this dish is solid. <a href="https://spoonacular.com/recipes/garlic-naan-how-to-make-garlic-naan-on-stove-top-and-oven-488711">garlic naan , how to make garlic naan on stove top and oven</a>, <a href="https://spoonacular.com/recipes/garlic-naan-903025">Garlic Naan</a>, and <a href="https://spoonacular.com/recipes/garlic-naan-510212">Garlic Naan</a> are very similar to this recipe.',
              cuisines: ["Indian", "Asian"],
              dishTypes: [
                "fingerfood",
                "antipasti",
                "bread",
                "starter",
                "snack",
                "appetizer",
                "antipasto",
                "hor d'oeuvre",
              ],
              diets: ["lacto ovo vegetarian"],
              occasions: [],
              instructions:
                "1. In a small bowl, mix together water, yogurt, 1/4 c. oil and egg yolk. In the workbowl of a food processor, pulse together flour, sugar and yeast to combine. With the motor running, slowly add the liquid ingredients to the flour. Process until combined. Let mixture rest for 10 minutes.\n2. Add salt and process another 30-60 seconds. It will form a sticky dough that should clear the sides of the food processor workbowl.\n3. Scrape dough out onto a floured worksurface and knead just until smooth, about a minute. Form into a ball and place in a lightly oiled bowl (large). Cover tightly with plastic wrap and refrigerate 16-24 hours.\n4.After the dough has rested, turn out onto a lightly floured work surface and divide dough into 4 pieces and shape each piece into a ball. Cover lightly with plastic wrap and let rest 15-20 minutes.\n5. Meanwhile melt the butter in a small saucepan, then add the garlic. Set aside.\n6. Roll the first piece of dough out into a 9 inch round. Using a fork, poke the dough all over, 20-25 times. Lightly mist the top side with water.\n6. Heat the remaining oil in a large nonstick skillet over medium heat until the oil begins to shimmer. Wipe the oil out of the skillet with paper towels, then add the rolled out dough, sprayed side down and spray the other side lightly. Cover skillet and cook until spotty brown underneath, 2-4 minutes (poke any large bubbles that form). Flip naan, cook, covered, another 2-3 minutes until browned. Flip again, brush with butter, then transfer to a plate and cover with foil. While rolling out and cooking the remaining naan.",
              analyzedInstructions: [
                {
                  name: "",
                  steps: [
                    {
                      number: 1,
                      step: "In a small bowl, mix together water, yogurt, 1/4 c. oil and egg yolk. In the workbowl of a food processor, pulse together flour, sugar and yeast to combine. With the motor running, slowly add the liquid ingredients to the flour. Process until combined.",
                      ingredients: [
                        {
                          id: 1125,
                          name: "egg yolk",
                          localizedName: "egg yolk",
                          image: "egg-yolk.jpg",
                        },
                        {
                          id: 1116,
                          name: "yogurt",
                          localizedName: "yogurt",
                          image: "plain-yogurt.jpg",
                        },
                        {
                          id: 20081,
                          name: "all purpose flour",
                          localizedName: "all purpose flour",
                          image: "flour.png",
                        },
                        {
                          id: 19335,
                          name: "sugar",
                          localizedName: "sugar",
                          image: "sugar-in-bowl.png",
                        },
                        {
                          id: 14412,
                          name: "water",
                          localizedName: "water",
                          image: "water.png",
                        },
                        {
                          id: 18375,
                          name: "yeast",
                          localizedName: "yeast",
                          image: "yeast-granules.jpg",
                        },
                        {
                          id: 4582,
                          name: "cooking oil",
                          localizedName: "cooking oil",
                          image: "vegetable-oil.jpg",
                        },
                      ],
                      equipment: [
                        {
                          id: 404771,
                          name: "food processor",
                          localizedName: "food processor",
                          image: "food-processor.png",
                        },
                        {
                          id: 404783,
                          name: "bowl",
                          localizedName: "bowl",
                          image: "bowl.jpg",
                        },
                      ],
                    },
                    {
                      number: 2,
                      step: "Let mixture rest for 10 minutes.",
                      ingredients: [],
                      equipment: [],
                      length: {
                        number: 10,
                        unit: "minutes",
                      },
                    },
                    {
                      number: 3,
                      step: "Add salt and process another 30-60 seconds. It will form a sticky dough that should clear the sides of the food processor workbowl.",
                      ingredients: [
                        {
                          id: 0,
                          name: "dough",
                          localizedName: "dough",
                          image: "pizza-dough",
                        },
                        {
                          id: 2047,
                          name: "salt",
                          localizedName: "salt",
                          image: "salt.jpg",
                        },
                      ],
                      equipment: [
                        {
                          id: 404771,
                          name: "food processor",
                          localizedName: "food processor",
                          image: "food-processor.png",
                        },
                      ],
                    },
                    {
                      number: 4,
                      step: "Scrape dough out onto a floured worksurface and knead just until smooth, about a minute. Form into a ball and place in a lightly oiled bowl (large). Cover tightly with plastic wrap and refrigerate 16-24 hours.",
                      ingredients: [
                        {
                          id: 0,
                          name: "dough",
                          localizedName: "dough",
                          image: "pizza-dough",
                        },
                        {
                          id: 10018364,
                          name: "wrap",
                          localizedName: "wrap",
                          image: "flour-tortilla.jpg",
                        },
                      ],
                      equipment: [
                        {
                          id: 404730,
                          name: "plastic wrap",
                          localizedName: "plastic wrap",
                          image: "plastic-wrap.jpg",
                        },
                        {
                          id: 404783,
                          name: "bowl",
                          localizedName: "bowl",
                          image: "bowl.jpg",
                        },
                      ],
                      length: {
                        number: 1440,
                        unit: "minutes",
                      },
                    },
                    {
                      number: 5,
                      step: "After the dough has rested, turn out onto a lightly floured work surface and divide dough into 4 pieces and shape each piece into a ball. Cover lightly with plastic wrap and let rest 15-20 minutes.",
                      ingredients: [
                        {
                          id: 0,
                          name: "dough",
                          localizedName: "dough",
                          image: "pizza-dough",
                        },
                        {
                          id: 10018364,
                          name: "wrap",
                          localizedName: "wrap",
                          image: "flour-tortilla.jpg",
                        },
                      ],
                      equipment: [
                        {
                          id: 404730,
                          name: "plastic wrap",
                          localizedName: "plastic wrap",
                          image: "plastic-wrap.jpg",
                        },
                      ],
                      length: {
                        number: 20,
                        unit: "minutes",
                      },
                    },
                    {
                      number: 6,
                      step: "Meanwhile melt the butter in a small saucepan, then add the garlic. Set aside.",
                      ingredients: [
                        {
                          id: 1001,
                          name: "butter",
                          localizedName: "butter",
                          image: "butter-sliced.jpg",
                        },
                        {
                          id: 11215,
                          name: "garlic",
                          localizedName: "garlic",
                          image: "garlic.png",
                        },
                      ],
                      equipment: [
                        {
                          id: 404669,
                          name: "sauce pan",
                          localizedName: "sauce pan",
                          image: "sauce-pan.jpg",
                        },
                      ],
                    },
                    {
                      number: 7,
                      step: "Roll the first piece of dough out into a 9 inch round. Using a fork, poke the dough all over, 20-25 times. Lightly mist the top side with water.",
                      ingredients: [
                        {
                          id: 0,
                          name: "dough",
                          localizedName: "dough",
                          image: "pizza-dough",
                        },
                        {
                          id: 14412,
                          name: "water",
                          localizedName: "water",
                          image: "water.png",
                        },
                        {
                          id: 0,
                          name: "roll",
                          localizedName: "roll",
                          image: "dinner-yeast-rolls.jpg",
                        },
                      ],
                      equipment: [],
                    },
                    {
                      number: 8,
                      step: "Heat the remaining oil in a large nonstick skillet over medium heat until the oil begins to shimmer. Wipe the oil out of the skillet with paper towels, then add the rolled out dough, sprayed side down and spray the other side lightly. Cover skillet and cook until spotty brown underneath, 2-4 minutes (poke any large bubbles that form). Flip naan, cook, covered, another 2-3 minutes until browned. Flip again, brush with butter, then transfer to a plate and cover with foil. While rolling out and cooking the remaining naan.",
                      ingredients: [
                        {
                          id: 1001,
                          name: "butter",
                          localizedName: "butter",
                          image: "butter-sliced.jpg",
                        },
                        {
                          id: 0,
                          name: "dough",
                          localizedName: "dough",
                          image: "pizza-dough",
                        },
                        {
                          id: 93723,
                          name: "naan",
                          localizedName: "naan",
                          image: "naan.png",
                        },
                        {
                          id: 4582,
                          name: "cooking oil",
                          localizedName: "cooking oil",
                          image: "vegetable-oil.jpg",
                        },
                      ],
                      equipment: [
                        {
                          id: 405895,
                          name: "paper towels",
                          localizedName: "paper towels",
                          image: "paper-towels.jpg",
                        },
                        {
                          id: 404645,
                          name: "frying pan",
                          localizedName: "frying pan",
                          image: "pan.png",
                        },
                        {
                          id: 404765,
                          name: "aluminum foil",
                          localizedName: "aluminum foil",
                          image: "aluminum-foil.png",
                        },
                      ],
                      length: {
                        number: 7,
                        unit: "minutes",
                      },
                    },
                  ],
                },
              ],
              originalId: null,
              spoonacularSourceUrl:
                "https://spoonacular.com/garlic-butter-naan-644376",
            },
            
          ].map((data, i) => (
            <RecipeCard key={data.title.toString()} recipeData={data} />
          ))}
        </div>

        <div className="shoppingList">
          <h3 role="heading">Your Shopping List</h3>
          <Button text="Clear All Lists" />

          <ShoppingCard
            recipeClassName="shopping_cardlist"
            recipes={[
              {
                src: "https://picsum.photos/100/100?random=4",
                title: "pasta",
                cooking_time: "45 minutes",
                category: "vegetables",
                alt: "image",
              },
              {
                src: "https://picsum.photos/100/100?random=6",
                title: "chicken Pizza",
                cooking_time: "120 minutes",
                category: "Non-veg",
                alt: "image",
              },
              {
                src: "https://picsum.photos/100/100?random=8",
                title: "chicken Biryani",
                cooking_time: "100 minutes",
                category: "veg",
                alt: "image",
              },
              {
                src: "https://picsum.photos/100/100?random=5",
                title: "Italian Pasta",
                cooking_time: "45 minutes",
                category: "vegetables",
                alt: "image",
              }
            ]}
          ></ShoppingCard>

          <br></br>

          <Button text="Record the List" />
        </div>

        <div className="groceryshop">
          <h3 role="heading">Find the nearby grocery shop</h3>

          <input type="text" placeholder="Enter postal code here" />
          <Button text="Search nearby Shop" />

          <div className="mapcontainer">container for Map</div>
        </div>
      </div>
    );
}

export default ShoppingListRecipe;
  return (
    <div>
      <div className="recipes">
        <h3 role="heading">Recipes you selected</h3>
        <RecipeCard
          recipeData={[
            {
              image: "https://picsum.photos/100/100?random=4",
              title: "pasta",
              cooking_time: "45 minutes",
              category: "vegetables",
              alt: "image",
            },
            {
              image: "https://picsum.photos/100/100?random=6",
              title: "chicken Pizza",
              cooking_time: "120 minutes",
              category: "Non-veg",
              alt: "image",
            },
            {
              image: "https://picsum.photos/100/100?random=8",
              title: "chicken Biryani",
              cooking_time: "100 minutes",
              category: "veg",
              alt: "image",
            },
            {
              image: "https://picsum.photos/100/100?random=5",
              title: "Italian Pasta",
              cooking_time: "45 minutes",
              category: "vegetables",
              alt: "image",
            }
          ]}
        />
      </div>
      <div className="shoppingList">
        <h3 role="heading">Your Shopping List</h3>
        <Button text="Clear All Lists" />

        <ShoppingCard
          recipeClassName="shopping_cardlist"
          recipes={[
            {
              src: "https://picsum.photos/100/100?random=4",
              title: "pasta",
              cooking_time: "45 minutes",
              category: "vegetables",
              alt: "image",
            },
            {
              src: "https://picsum.photos/100/100?random=6",
              title: "chicken Pizza",
              cooking_time: "120 minutes",
              category: "Non-veg",
              alt: "image",
            },
            {
              src: "https://picsum.photos/100/100?random=8",
              title: "chicken Biryani",
              cooking_time: "100 minutes",
              category: "veg",
              alt: "image",
            },
            {
              src: "https://picsum.photos/100/100?random=5",
              title: "Italian Pasta",
              cooking_time: "45 minutes",
              category: "vegetables",
              alt: "image",
            },
          ]}
        ></ShoppingCard>
        <br></br>
        <Button text="Record the List" />
      </div>
      <div className="groceryshop">
        <h3 role="heading">Find the nearby grocery shop</h3>
        <input type="text" placeholder="Enter postal code here" />
        <Button text="Search nearby Shop" />
        <div className="mapcontainer">container for Map</div>
      </div>
    </div>
  );
};

export default ShoppingListRecipe;

