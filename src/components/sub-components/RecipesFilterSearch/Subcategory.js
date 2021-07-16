import React, { useState, useRef } from "react";

import RecipeCard from "../RecipeCard";
import SelectedSub from "./SelectedSub";

const Subcategory = ({ subcategory, categorytype }) => {
  const [filteredrecipes, setfilteredRecipes] = useState([
    {
      vegetarian: false,
      vegan: false,
      glutenFree: true,
      dairyFree: false,
      veryHealthy: false,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      weightWatcherSmartPoints: 13,
      gaps: "no",
      lowFodmap: false,
      aggregateLikes: 13,
      spoonacularScore: 14,
      healthScore: 1,
      creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      license: "CC BY 3.0",
      sourceName: "Foodista",
      pricePerServing: 83.05,
      extendedIngredients: [
        {
          id: 19081,
          aisle: "Sweet Snacks",
          image: "milk-chocolate.jpg",
          consistency: "solid",
          name: "chocolate",
          nameClean: "milk chocolate",
          original:
            "2 ounces 60–70% dark chocolate, ground finely (see Kitchen Tip #2)",
          originalString:
            "2 ounces 60–70% dark chocolate, ground finely (see Kitchen Tip #2)",
          originalName:
            "60–70% dark chocolate, ground finely (see Kitchen Tip #2)",
          amount: 2,
          unit: "ounces",
          meta: ["dark", "finely", "(see Kitchen Tip #2)"],
          metaInformation: ["dark", "finely", "(see Kitchen Tip #2)"],
          measures: {
            us: {
              amount: 2,
              unitShort: "oz",
              unitLong: "ounces",
            },
            metric: {
              amount: 56.699,
              unitShort: "g",
              unitLong: "grams",
            },
          },
        },
        {
          id: 18373,
          aisle: "Spices and Seasonings;Baking",
          image: "white-powder.jpg",
          consistency: "solid",
          name: "cream of tartar",
          nameClean: "cream of tartar",
          original: "¼ teaspoon cream of tartar",
          originalString: "¼ teaspoon cream of tartar",
          originalName: "cream of tartar",
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
          id: 10019165,
          aisle: "Baking",
          image: "dutch-process-cocoa-powder.png",
          consistency: "solid",
          name: "dutch process cocoa powder",
          nameClean: "unsweetened dutch processed cocoa powder",
          original: "2 tablespoons Dutch process cocoa powder",
          originalString: "2 tablespoons Dutch process cocoa powder",
          originalName: "Dutch process cocoa powder",
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
          id: 1124,
          aisle: "Milk, Eggs, Other Dairy",
          image: "egg-white.jpg",
          consistency: "solid",
          name: "egg whites",
          nameClean: "egg whites",
          original: "4 large egg whites, room temperature",
          originalString: "4 large egg whites, room temperature",
          originalName: "egg whites, room temperature",
          amount: 4,
          unit: "large",
          meta: ["room temperature"],
          metaInformation: ["room temperature"],
          measures: {
            us: {
              amount: 4,
              unitShort: "large",
              unitLong: "larges",
            },
            metric: {
              amount: 4,
              unitShort: "large",
              unitLong: "larges",
            },
          },
        },
        {
          id: 9431,
          aisle: "Produce",
          image: "mixed-fresh-fruit.jpg",
          consistency: "solid",
          name: "fruit",
          nameClean: "mixed fruit",
          original: "2 cups assorted fresh winter fruit",
          originalString: "2 cups assorted fresh winter fruit",
          originalName: "assorted fresh winter fruit",
          amount: 2,
          unit: "cups",
          meta: ["fresh", "assorted"],
          metaInformation: ["fresh", "assorted"],
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
        {
          id: 19335,
          aisle: "Baking",
          image: "sugar-in-bowl.png",
          consistency: "solid",
          name: "granulated sugar",
          nameClean: "sugar",
          original: "1 cup granulated sugar",
          originalString: "1 cup granulated sugar",
          originalName: "granulated sugar",
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
          id: 1053,
          aisle: "Milk, Eggs, Other Dairy",
          image: "fluid-cream.jpg",
          consistency: "liquid",
          name: "heavy cream",
          nameClean: "cream",
          original: "2 cups heavy cream, chilled",
          originalString: "2 cups heavy cream, chilled",
          originalName: "heavy cream, chilled",
          amount: 2,
          unit: "cups",
          meta: ["chilled"],
          metaInformation: ["chilled"],
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
        {
          id: 19335,
          aisle: "Baking",
          image: "sugar-in-bowl.png",
          consistency: "solid",
          name: "sugar",
          nameClean: "sugar",
          original: "6 tablespoons confectioner's sugar",
          originalString: "6 tablespoons confectioner's sugar",
          originalName: "confectioner's sugar",
          amount: 6,
          unit: "tablespoons",
          meta: [],
          metaInformation: [],
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
          id: 93696,
          aisle: "Ethnic Foods;Health Foods;Baking",
          image: "white-powder.jpg",
          consistency: "solid",
          name: "tapioca starch",
          nameClean: "tapioca starch",
          original: "1 teaspoon cornstarch or tapioca starch",
          originalString: "1 teaspoon cornstarch or tapioca starch",
          originalName: "cornstarch or tapioca starch",
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
          id: 93813,
          aisle: "Gourmet",
          image: "molasses.jpg",
          consistency: "solid",
          name: "vanilla bean paste",
          nameClean: "vanilla paste",
          original: "1 teaspoon vanilla bean paste",
          originalString: "1 teaspoon vanilla bean paste",
          originalName: "vanilla bean paste",
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
          id: 2050,
          aisle: "Baking",
          image: "vanilla-extract.jpg",
          consistency: "liquid",
          name: "vanilla extract",
          nameClean: "vanilla extract",
          original: "1 teaspoon vanilla extract",
          originalString: "1 teaspoon vanilla extract",
          originalName: "vanilla extract",
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
          id: 2053,
          aisle: "Oil, Vinegar, Salad Dressing",
          image: "vinegar-(white).jpg",
          consistency: "liquid",
          name: "white vinegar",
          nameClean: "distilled white vinegar",
          original: "1 teaspoon white vinegar",
          originalString: "1 teaspoon white vinegar",
          originalName: "white vinegar",
          amount: 1,
          unit: "teaspoon",
          meta: ["white"],
          metaInformation: ["white"],
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
      id: 639137,
      title: "Chocolate Pavlova with Winter Fruit",
      readyInMinutes: 150,
      servings: 12,
      sourceUrl:
        "http://www.foodista.com/recipe/D7DDT6F5/chocolate-pavlova-with-winter-fruit",
      image: "https://spoonacular.com/recipeImages/639137-556x370.jpg",
      imageType: "jpg",
      summary:
        'You can never have too many dessert recipes, so give Chocolate Pavlova with Winter Fruit a try. One serving contains <b>282 calories</b>, <b>2g of protein</b>, and <b>16g of fat</b>. This gluten free recipe serves 12 and costs <b>82 cents per serving</b>. <b>Winter</b> will be even more special with this recipe. A few people made this recipe, and 13 would say it hit the spot. If you have 70% chocolate, vinegar, granulated sugar, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly <b>2 hours and 30 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 15%</b>. This score is rather bad. Try <a href="https://spoonacular.com/recipes/chocolate-pavlova-with-winter-fruits-502299">Chocolate Pavlova with Winter Fruits</a>, <a href="https://spoonacular.com/recipes/spiced-winter-pavlova-65973">Spiced Winter Pavlova</a>, and <a href="https://spoonacular.com/recipes/exotic-fruit-pavlova-280778">Exotic Fruit Pavlova</a> for similar recipes.',
      cuisines: [],
      dishTypes: ["side dish"],
      diets: ["gluten free"],
      occasions: ["winter"],
      instructions:
        "<ol><li>To make the chocolate meringue: Preheat the oven to 225F convection or 250F conventional. Line a rimmed baking sheet with a Silpat or parchment paper.</li><li>In the bowl of a stand mixer fitted with a whisk attachment, whip the egg whites, vanilla bean paste, and cream of tartar until soft peaks begin to form.</li><li>Sift together the sugar, cocoa powder, and cornstarch. With the motor running at low speed, add the sugar mixture 1 tablespoon at a time to the egg whites. Add the vinegar and dark chocolate. Whip until fully incorporated and the egg whites hold a stiff peak (the whip attachment will have a sturdy egg white tail when removed).</li><li>Scoop the mixture onto the prepared baking sheet. Shape into a 9- to 10-inch circle with a slightly higher edge. Bake until the outside is dry and starting to crack slightly, 1 to 1 hours. Turn the heat off and leave the meringue in the oven to cool, about 1 hour.</li><li>To make the whipped cream: Add the cream, confectioners sugar, and vanilla to the bowl of a stand mixer fitted with a whisk attachment.</li><li>Whip until the cream holds soft peaks.</li><li>To assemble: Place the baked meringue onto a serving platter or cake stand. Spread the whipped cream in the center leaving a 2-inch gap around the edge.</li><li>Arrange the fruit on top and serve immediately.</li></ol>",
      analyzedInstructions: [
        {
          name: "",
          steps: [
            {
              number: 1,
              step: "To make the chocolate meringue: Preheat the oven to 225F convection or 250F conventional. Line a rimmed baking sheet with a Silpat or parchment paper.In the bowl of a stand mixer fitted with a whisk attachment, whip the egg whites, vanilla bean paste, and cream of tartar until soft peaks begin to form.Sift together the sugar, cocoa powder, and cornstarch. With the motor running at low speed, add the sugar mixture 1 tablespoon at a time to the egg whites.",
              ingredients: [
                {
                  id: 93813,
                  name: "vanilla paste",
                  localizedName: "vanilla paste",
                  image: "molasses.jpg",
                },
                {
                  id: 18373,
                  name: "cream of tartar",
                  localizedName: "cream of tartar",
                  image: "white-powder.jpg",
                },
                {
                  id: 19165,
                  name: "cocoa powder",
                  localizedName: "cocoa powder",
                  image: "cocoa-powder.png",
                },
                {
                  id: 20027,
                  name: "corn starch",
                  localizedName: "corn starch",
                  image: "white-powder.jpg",
                },
                {
                  id: 1124,
                  name: "egg whites",
                  localizedName: "egg whites",
                  image: "egg-white.jpg",
                },
                {
                  id: 19081,
                  name: "chocolate",
                  localizedName: "chocolate",
                  image: "milk-chocolate.jpg",
                },
                {
                  id: 19335,
                  name: "sugar",
                  localizedName: "sugar",
                  image: "sugar-in-bowl.png",
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
                  id: 404665,
                  name: "stand mixer",
                  localizedName: "stand mixer",
                  image: "stand-mixer.jpg",
                },
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
                {
                  id: 404784,
                  name: "oven",
                  localizedName: "oven",
                  image: "oven.jpg",
                  temperature: {
                    number: 225,
                    unit: "Fahrenheit",
                  },
                },
              ],
            },
            {
              number: 2,
              step: "Add the vinegar and dark chocolate. Whip until fully incorporated and the egg whites hold a stiff peak (the whip attachment will have a sturdy egg white tail when removed).Scoop the mixture onto the prepared baking sheet. Shape into a 9- to 10-inch circle with a slightly higher edge.",
              ingredients: [
                {
                  id: 19904,
                  name: "dark chocolate",
                  localizedName: "dark chocolate",
                  image: "dark-chocolate-pieces.jpg",
                },
                {
                  id: 1124,
                  name: "egg whites",
                  localizedName: "egg whites",
                  image: "egg-white.jpg",
                },
                {
                  id: 2053,
                  name: "vinegar",
                  localizedName: "vinegar",
                  image: "vinegar-(white).jpg",
                },
              ],
              equipment: [
                {
                  id: 404727,
                  name: "baking sheet",
                  localizedName: "baking sheet",
                  image: "baking-sheet.jpg",
                },
              ],
            },
          ],
        },
        {
          name: "Bake until the outside is dry and starting to crack slightly, 1 to 1 hours. Turn the heat off and leave the meringue in the oven to cool, about 1 hour.To make the whipped cream",
          steps: [],
        },
        {
          name: "Add the cream, confectioners sugar, and vanilla to the bowl of a stand mixer fitted with a whisk attachment.Whip until the cream holds soft peaks.To assemble",
          steps: [
            {
              number: 1,
              step: "Place the baked meringue onto a serving platter or cake stand.",
              ingredients: [],
              equipment: [],
            },
            {
              number: 2,
              step: "Spread the whipped cream in the center leaving a 2-inch gap around the edge.Arrange the fruit on top and serve immediately.",
              ingredients: [
                {
                  id: 1054,
                  name: "whipped cream",
                  localizedName: "whipped cream",
                  image: "whipped-cream.jpg",
                },
                {
                  id: 0,
                  name: "spread",
                  localizedName: "spread",
                  image: "",
                },
                {
                  id: 9431,
                  name: "fruit",
                  localizedName: "fruit",
                  image: "mixed-fresh-fruit.jpg",
                },
              ],
              equipment: [],
            },
          ],
        },
      ],
      originalId: null,
      spoonacularSourceUrl:
        "https://spoonacular.com/chocolate-pavlova-with-winter-fruit-639137",
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
      weightWatcherSmartPoints: 11,
      gaps: "no",
      lowFodmap: false,
      aggregateLikes: 6,
      spoonacularScore: 77,
      healthScore: 31,
      creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      license: "CC BY 3.0",
      sourceName: "Foodista",
      pricePerServing: 202.35,
      extendedIngredients: [
        {
          id: 20004,
          aisle: "Pasta and Rice;Ethnic Foods;Health Foods",
          image: "pearl-barley.png",
          consistency: "solid",
          name: "barley",
          nameClean: "barley",
          original: "1 cup barley",
          originalString: "1 cup barley",
          originalName: "barley",
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
          id: 1001,
          aisle: "Milk, Eggs, Other Dairy",
          image: "butter-sliced.jpg",
          consistency: "solid",
          name: "butter",
          nameClean: "butter",
          original: "2 teaspoons butter",
          originalString: "2 teaspoons butter",
          originalName: "butter",
          amount: 2,
          unit: "teaspoons",
          meta: [],
          metaInformation: [],
          measures: {
            us: {
              amount: 2,
              unitShort: "tsps",
              unitLong: "teaspoons",
            },
            metric: {
              amount: 2,
              unitShort: "tsps",
              unitLong: "teaspoons",
            },
          },
        },
        {
          id: 6172,
          aisle: "Canned and Jarred",
          image: "chicken-broth.png",
          consistency: "liquid",
          name: "chicken stock",
          nameClean: "chicken stock",
          original: "4 cups of chicken stock",
          originalString: "4 cups of chicken stock",
          originalName: "chicken stock",
          amount: 4,
          unit: "cups",
          meta: [],
          metaInformation: [],
          measures: {
            us: {
              amount: 4,
              unitShort: "cups",
              unitLong: "cups",
            },
            metric: {
              amount: 946.352,
              unitShort: "ml",
              unitLong: "milliliters",
            },
          },
        },
        {
          id: 1002014,
          aisle: "Spices and Seasonings",
          image: "ground-cumin.jpg",
          consistency: "solid",
          name: "cumin powder",
          nameClean: "cumin",
          original: "2 teaspoons cumin powder",
          originalString: "2 teaspoons cumin powder",
          originalName: "cumin powder",
          amount: 2,
          unit: "teaspoons",
          meta: [],
          metaInformation: [],
          measures: {
            us: {
              amount: 2,
              unitShort: "tsps",
              unitLong: "teaspoons",
            },
            metric: {
              amount: 2,
              unitShort: "tsps",
              unitLong: "teaspoons",
            },
          },
        },
        {
          id: 2042,
          aisle: "Spices and Seasonings",
          image: "thyme.jpg",
          consistency: "solid",
          name: "dried thyme",
          nameClean: "dried thyme",
          original: "1/2 teaspoon dried thyme",
          originalString: "1/2 teaspoon dried thyme",
          originalName: "dried thyme",
          amount: 0.5,
          unit: "teaspoon",
          meta: ["dried"],
          metaInformation: ["dried"],
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
          id: 2064,
          aisle: "Produce;Spices and Seasonings",
          image: "mint.jpg",
          consistency: "solid",
          name: "fresh mint",
          nameClean: "mint",
          original: "2 teaspoons fresh mint",
          originalString: "2 teaspoons fresh mint",
          originalName: "fresh mint",
          amount: 2,
          unit: "teaspoons",
          meta: ["fresh"],
          metaInformation: ["fresh"],
          measures: {
            us: {
              amount: 2,
              unitShort: "tsps",
              unitLong: "teaspoons",
            },
            metric: {
              amount: 2,
              unitShort: "tsps",
              unitLong: "teaspoons",
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
          original: "2 cloves to garlic, minced",
          originalString: "2 cloves to garlic, minced",
          originalName: "to garlic, minced",
          amount: 2,
          unit: "cloves",
          meta: ["minced"],
          metaInformation: ["minced"],
          measures: {
            us: {
              amount: 2,
              unitShort: "cloves",
              unitLong: "cloves",
            },
            metric: {
              amount: 2,
              unitShort: "cloves",
              unitLong: "cloves",
            },
          },
        },
        {
          id: 11216,
          aisle: "Produce;Ethnic Foods;Spices and Seasonings",
          image: "ginger.png",
          consistency: "solid",
          name: "ginger",
          nameClean: "ginger",
          original: "big chunk of ginger. minced",
          originalString: "big chunk of ginger. minced",
          originalName: "big chunk of ginger. minced",
          amount: 3,
          unit: "servings",
          meta: ["minced", "chunk"],
          metaInformation: ["minced", "chunk"],
          measures: {
            us: {
              amount: 3,
              unitShort: "servings",
              unitLong: "servings",
            },
            metric: {
              amount: 3,
              unitShort: "servings",
              unitLong: "servings",
            },
          },
        },
        {
          id: 11282,
          aisle: "Produce",
          image: "brown-onion.png",
          consistency: "solid",
          name: "onion",
          nameClean: "onion",
          original: "1 small onion, diced finely",
          originalString: "1 small onion, diced finely",
          originalName: "onion, diced finely",
          amount: 1,
          unit: "small",
          meta: ["diced", "finely"],
          metaInformation: ["diced", "finely"],
          measures: {
            us: {
              amount: 1,
              unitShort: "small",
              unitLong: "small",
            },
            metric: {
              amount: 1,
              unitShort: "small",
              unitLong: "small",
            },
          },
        },
        {
          id: 2027,
          aisle: "Produce;Spices and Seasonings",
          image: "oregano.jpg",
          consistency: "solid",
          name: "oregano",
          nameClean: "oregano",
          original: "1 teaspoon oregano",
          originalString: "1 teaspoon oregano",
          originalName: "oregano",
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
          id: 1022030,
          aisle: "Spices and Seasonings",
          image: "black-pepper.png",
          consistency: "solid",
          name: "peppercorns",
          nameClean: "black peppercorns",
          original: "1/2 teaspoon pink peppercorns",
          originalString: "1/2 teaspoon pink peppercorns",
          originalName: "pink peppercorns",
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
          id: 11424,
          aisle: "Baking",
          image: "pumpkin-puree.jpg",
          consistency: "solid",
          name: "pumpkin puree",
          nameClean: "canned pumpkin",
          original: "1 cup pumpkin puree",
          originalString: "1 cup pumpkin puree",
          originalName: "pumpkin puree",
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
          id: 1102047,
          aisle: "Spices and Seasonings",
          image: "salt-and-pepper.jpg",
          consistency: "solid",
          name: "salt and pepper",
          nameClean: "salt and pepper",
          original: "salt and pepper to taste",
          originalString: "salt and pepper to taste",
          originalName: "salt and pepper to taste",
          amount: 3,
          unit: "servings",
          meta: ["to taste"],
          metaInformation: ["to taste"],
          measures: {
            us: {
              amount: 3,
              unitShort: "servings",
              unitLong: "servings",
            },
            metric: {
              amount: 3,
              unitShort: "servings",
              unitLong: "servings",
            },
          },
        },
        {
          id: 1056,
          aisle: "Milk, Eggs, Other Dairy",
          image: "sour-cream.jpg",
          consistency: "solid",
          name: "sour cream",
          nameClean: "sour cream",
          original: "2 teaspoons sour cream",
          originalString: "2 teaspoons sour cream",
          originalName: "sour cream",
          amount: 2,
          unit: "teaspoons",
          meta: ["sour"],
          metaInformation: ["sour"],
          measures: {
            us: {
              amount: 2,
              unitShort: "tsps",
              unitLong: "teaspoons",
            },
            metric: {
              amount: 2,
              unitShort: "tsps",
              unitLong: "teaspoons",
            },
          },
        },
        {
          id: 6971,
          aisle: "Condiments",
          image: "dark-sauce.jpg",
          consistency: "liquid",
          name: "worcestershire sauce",
          nameClean: "worcestershire sauce",
          original: "1 teaspoon Worcestershire sauce",
          originalString: "1 teaspoon Worcestershire sauce",
          originalName: "Worcestershire sauce",
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
      ],
      id: 658632,
      title: "Roasted Pumpkin and Barley Risotto",
      readyInMinutes: 75,
      servings: 3,
      sourceUrl:
        "http://www.foodista.com/recipe/DBX24KMC/roasted-pumpkin-and-barley-risotto",
      image: "https://spoonacular.com/recipeImages/658632-556x370.jpg",
      imageType: "jpg",
      summary:
        'Roasted Pumpkin and Barley Risotto takes about <b>1 hour and 15 minutes</b> from beginning to end. This main course has <b>419 calories</b>, <b>18g of protein</b>, and <b>9g of fat</b> per serving. For <b>$2.05 per serving</b>, this recipe <b>covers 28%</b> of your daily requirements of vitamins and minerals. This recipe serves 3. A mixture of ginger, garlic, oregano, and a handful of other ingredients are all it takes to make this recipe so tasty. 7 people have made this recipe and would make it again. This recipe is typical of Mediterranean cuisine. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 82%</b>, which is excellent. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/barley-risotto-with-roasted-winter-vegetables-250205">Barley Risotto with Roasted Winter Vegetables</a>, <a href="https://spoonacular.com/recipes/barley-risotto-with-roasted-winter-vegetables-545512">Barley Risotto with Roasted Winter Vegetables</a>, and <a href="https://spoonacular.com/recipes/barley-risotto-with-roasted-winter-vegetables-942844">Barley Risotto with Roasted Winter Vegetables</a>.',
      cuisines: ["Mediterranean", "Italian", "European"],
      dishTypes: ["lunch", "main course", "main dish", "dinner"],
      diets: [],
      occasions: [],
      instructions:
        "<ol><li>Cut the pumpkin, clean out the innards and place cut face down in a baking dish with a 1/4 inch of water.</li><li>Bake in a 400 degree oven for 45 minutes until the insides are soft and cooked.</li><li>Scoop out the cooked flesh and puree with the tiniest bit of milk to make a smooth puree.</li><li>Saute the onions and garlic in butter until translucent.</li><li>Add in the barley and toast for a couple of minutes.</li><li>Season with salt, pepper, cumin, thyme and oregano.</li><li>Add two cups of stock and cook until the liquid is almost absorbed.</li><li>Stir in the pumpkin puree.</li><li>Add the rest of the stock in half cup measures and stirring until it is fully absorbed.</li><li>Slowly, the barley will become creamy as the starch releases.</li><li>When you are done with all the stock, remove from heat and stir in the sour cream.</li><li>Serve immediately garnished with mint leaves and a drop of pumkiny-sour cream.</li></ol>",
      analyzedInstructions: [
        {
          name: "",
          steps: [
            {
              number: 1,
              step: "Cut the pumpkin, clean out the innards and place cut face down in a baking dish with a 1/4 inch of water.",
              ingredients: [
                {
                  id: 11422,
                  name: "pumpkin",
                  localizedName: "pumpkin",
                  image: "pumpkin.png",
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
                  id: 404646,
                  name: "baking pan",
                  localizedName: "baking pan",
                  image: "roasting-pan.jpg",
                },
              ],
            },
            {
              number: 2,
              step: "Bake in a 400 degree oven for 45 minutes until the insides are soft and cooked.Scoop out the cooked flesh and puree with the tiniest bit of milk to make a smooth puree.",
              ingredients: [
                {
                  id: 1077,
                  name: "milk",
                  localizedName: "milk",
                  image: "milk.png",
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
                number: 45,
                unit: "minutes",
              },
            },
            {
              number: 3,
              step: "Saute the onions and garlic in butter until translucent.",
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
                {
                  id: 11282,
                  name: "onion",
                  localizedName: "onion",
                  image: "brown-onion.png",
                },
              ],
              equipment: [],
            },
            {
              number: 4,
              step: "Add in the barley and toast for a couple of minutes.Season with salt, pepper, cumin, thyme and oregano.",
              ingredients: [
                {
                  id: 2027,
                  name: "oregano",
                  localizedName: "oregano",
                  image: "oregano.jpg",
                },
                {
                  id: 20004,
                  name: "barley",
                  localizedName: "barley",
                  image: "pearl-barley.png",
                },
                {
                  id: 1002030,
                  name: "pepper",
                  localizedName: "pepper",
                  image: "pepper.jpg",
                },
                {
                  id: 1002014,
                  name: "cumin",
                  localizedName: "cumin",
                  image: "ground-cumin.jpg",
                },
                {
                  id: 2049,
                  name: "thyme",
                  localizedName: "thyme",
                  image: "thyme.jpg",
                },
                {
                  id: 18070,
                  name: "toast",
                  localizedName: "toast",
                  image: "toast",
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
              number: 5,
              step: "Add two cups of stock and cook until the liquid is almost absorbed.Stir in the pumpkin puree.",
              ingredients: [
                {
                  id: 11424,
                  name: "canned pumpkin",
                  localizedName: "canned pumpkin",
                  image: "pumpkin-puree.jpg",
                },
                {
                  id: 1006615,
                  name: "stock",
                  localizedName: "stock",
                  image: "chicken-broth.png",
                },
              ],
              equipment: [],
            },
            {
              number: 6,
              step: "Add the rest of the stock in half cup measures and stirring until it is fully absorbed.Slowly, the barley will become creamy as the starch releases.When you are done with all the stock, remove from heat and stir in the sour cream.",
              ingredients: [
                {
                  id: 1056,
                  name: "sour cream",
                  localizedName: "sour cream",
                  image: "sour-cream.jpg",
                },
                {
                  id: 20004,
                  name: "barley",
                  localizedName: "barley",
                  image: "pearl-barley.png",
                },
                {
                  id: 10020027,
                  name: "starch",
                  localizedName: "starch",
                  image: "",
                },
                {
                  id: 1006615,
                  name: "stock",
                  localizedName: "stock",
                  image: "chicken-broth.png",
                },
              ],
              equipment: [],
            },
            {
              number: 7,
              step: "Serve immediately garnished with mint leaves and a drop of pumkiny-sour cream.",
              ingredients: [
                {
                  id: 2064,
                  name: "mint",
                  localizedName: "mint",
                  image: "mint.jpg",
                },
                {
                  id: 1056,
                  name: "sour cream",
                  localizedName: "sour cream",
                  image: "sour-cream.jpg",
                },
              ],
              equipment: [],
            },
          ],
        },
      ],
      originalId: null,
      spoonacularSourceUrl:
        "https://spoonacular.com/roasted-pumpkin-and-barley-risotto-658632",
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
      weightWatcherSmartPoints: 22,
      gaps: "no",
      lowFodmap: false,
      aggregateLikes: 11,
      spoonacularScore: 78,
      healthScore: 25,
      creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      license: "CC BY 3.0",
      sourceName: "Foodista",
      pricePerServing: 196.38,
      extendedIngredients: [
        {
          id: 2004,
          aisle: "Spices and Seasonings",
          image: "bay-leaves.jpg",
          consistency: "solid",
          name: "bay leaves",
          nameClean: "bay leaves",
          original: "2 bay leaves",
          originalString: "2 bay leaves",
          originalName: "bay leaves",
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
          id: 10011090,
          aisle: "Produce",
          image: "broccoli.jpg",
          consistency: "solid",
          name: "broccoli florets",
          nameClean: "broccoli florets",
          original: "4 cups broccoli florets (about 1 head)",
          originalString: "4 cups broccoli florets (about 1 head)",
          originalName: "broccoli florets (about 1 head)",
          amount: 4,
          unit: "cups",
          meta: ["( 1 head)"],
          metaInformation: ["( 1 head)"],
          measures: {
            us: {
              amount: 4,
              unitShort: "cups",
              unitLong: "cups",
            },
            metric: {
              amount: 946.352,
              unitShort: "ml",
              unitLong: "milliliters",
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
          original: "1/4 cup butter",
          originalString: "1/4 cup butter",
          originalName: "butter",
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
          id: 11124,
          aisle: "Produce",
          image: "sliced-carrot.png",
          consistency: "solid",
          name: "carrot",
          nameClean: "carrot",
          original: "1 large carrot, diced",
          originalString: "1 large carrot, diced",
          originalName: "carrot, diced",
          amount: 1,
          unit: "large",
          meta: ["diced"],
          metaInformation: ["diced"],
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
          original: "1/4 cup flour",
          originalString: "1/4 cup flour",
          originalName: "flour",
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
          id: 1049,
          aisle: "Milk, Eggs, Other Dairy",
          image: "fluid-cream.jpg",
          consistency: "solid",
          name: "half n half",
          nameClean: "half and half",
          original: "2 cups half-and-half",
          originalString: "2 cups half-and-half",
          originalName: "half-and-half",
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
        {
          id: 1082047,
          aisle: "Spices and Seasonings",
          image: "salt.jpg",
          consistency: "solid",
          name: "kosher salt",
          nameClean: "kosher salt",
          original: "Kosher salt and freshly ground pepper",
          originalString: "Kosher salt and freshly ground pepper",
          originalName: "Kosher salt and freshly ground pepper",
          amount: 4,
          unit: "servings",
          meta: ["freshly ground"],
          metaInformation: ["freshly ground"],
          measures: {
            us: {
              amount: 4,
              unitShort: "servings",
              unitLong: "servings",
            },
            metric: {
              amount: 4,
              unitShort: "servings",
              unitLong: "servings",
            },
          },
        },
        {
          id: 6970,
          aisle: "Canned and Jarred",
          image: "chicken-broth.png",
          consistency: "liquid",
          name: "low sodium chicken broth",
          nameClean: "low sodium chicken broth",
          original: "3 cups low-sodium chicken broth",
          originalString: "3 cups low-sodium chicken broth",
          originalName: "low-sodium chicken broth",
          amount: 3,
          unit: "cups",
          meta: ["low-sodium"],
          metaInformation: ["low-sodium"],
          measures: {
            us: {
              amount: 3,
              unitShort: "cups",
              unitLong: "cups",
            },
            metric: {
              amount: 709.764,
              unitShort: "ml",
              unitLong: "milliliters",
            },
          },
        },
        {
          id: 2025,
          aisle: "Spices and Seasonings",
          image: "ground-nutmeg.jpg",
          consistency: "solid",
          name: "nutmeg",
          nameClean: "nutmeg",
          original: "1/4 teaspoon nutmeg",
          originalString: "1/4 teaspoon nutmeg",
          originalName: "nutmeg",
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
          id: 11282,
          aisle: "Produce",
          image: "brown-onion.png",
          consistency: "solid",
          name: "onion",
          nameClean: "onion",
          original: "1 onion, chopped",
          originalString: "1 onion, chopped",
          originalName: "onion, chopped",
          amount: 1,
          unit: "",
          meta: ["chopped"],
          metaInformation: ["chopped"],
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
          id: 1031009,
          aisle: "Cheese",
          image: "cheddar-cheese.png",
          consistency: "solid",
          name: "sharp cheddar cheese",
          nameClean: "sharp cheddar cheese",
          original:
            "2 1/2 cups (about 8 ounces) grated sharp white and yellow cheddar cheese, plus more for garnish",
          originalString:
            "2 1/2 cups (about 8 ounces) grated sharp white and yellow cheddar cheese, plus more for garnish",
          originalName:
            "1/2 cups (about grated sharp white and yellow cheddar cheese, plus more for garnish",
          amount: 8,
          unit: "ounces",
          meta: ["white", "yellow", "grated", "plus more for garnish"],
          metaInformation: [
            "white",
            "yellow",
            "grated",
            "plus more for garnish",
          ],
          measures: {
            us: {
              amount: 8,
              unitShort: "oz",
              unitLong: "ounces",
            },
            metric: {
              amount: 226.796,
              unitShort: "g",
              unitLong: "grams",
            },
          },
        },
        {
          id: 10118029,
          aisle: "Bakery/Bread",
          image: "sourdough-bread.jpg",
          consistency: "solid",
          name: "sourdough bread",
          nameClean: "sourdough bread",
          original: "7 inches sourdough bread boules (round loaves)",
          originalString: "7 inches sourdough bread boules (round loaves)",
          originalName: "sourdough bread boules (round loaves)",
          amount: 7,
          unit: "inches",
          meta: ["(round loaves)"],
          metaInformation: ["(round loaves)"],
          measures: {
            us: {
              amount: 7,
              unitShort: "inches",
              unitLong: "inches",
            },
            metric: {
              amount: 7,
              unitShort: "inches",
              unitLong: "inches",
            },
          },
        },
      ],
      id: 636178,
      title: "Broccoli Cheddar Soup, A Panera Bread Co. Copycat",
      readyInMinutes: 45,
      servings: 4,
      sourceUrl:
        "http://www.foodista.com/recipe/N3TSHPQV/broccoli-cheddar-soup-a-panera-bread-co-copycat",
      image: "https://spoonacular.com/recipeImages/636178-556x370.jpg",
      imageType: "jpg",
      summary:
        'You can never have too many main course recipes, so give Broccoli Cheddar Soup, A Panera Bread Co. Copycat a try. One serving contains <b>606 calories</b>, <b>26g of protein</b>, and <b>46g of fat</b>. This recipe serves 4 and costs $1.96 per serving. A mixture of chicken broth, kosher salt and pepper, half-and-half, and a handful of other ingredients are all it takes to make this recipe so flavorful. To use up the half & half you could follow this main course with the <a href="https://spoonacular.com/recipes/coconut-cream-pie-made-with-half-half-157893">Coconut Cream Pie Made With Half & Half</a> as a dessert. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. It is a good option if you\'re following a <b>vegetarian</b> diet. Not a lot of people made this recipe, and 9 would say it hit the spot. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 78%</b>. This score is pretty good. Try <a href="https://spoonacular.com/recipes/copycat-panera-broccoli-cheddar-cheese-soup-640038">Copycat Panera Broccoli Cheddar Cheese Soup</a>, <a href="https://spoonacular.com/recipes/copycat-panera-broccoli-cheese-soup-627790">Copycat Panera Broccoli Cheese Soup</a>, and <a href="https://spoonacular.com/recipes/the-best-broccoli-cheese-soup-better-than-panera-copycat-626154">The Best Broccoli Cheese Soup (Better-Than-Panera Copycat)</a> for similar recipes.',
      cuisines: [],
      dishTypes: ["bread"],
      diets: ["lacto ovo vegetarian"],
      occasions: ["fall", "winter"],
      instructions:
        "<ol><li>Melt the butter in a large Dutch oven or pot over medium heat. Add the onion and cook until tender, about 5 minutes.</li><li>Whisk in the flour and cook until golden, 3 to 4 minutes, then gradually whisk in the half-and-half until smooth.</li><li>Add the chicken broth, bay leaves and nutmeg, then season with salt and pepper and bring to a simmer.</li><li>Reduce the heat to medium-low and cook, uncovered, until thickened, about 20 minutes.</li><li>Meanwhile, prepare the bread bowls: Using a sharp knife, cut a circle into the top of each loaf, leaving a 1-inch border all around.</li><li>Remove the bread top, then hollow out the middle with a fork or your fingers, leaving a thick bread shell.</li><li>Add the broccoli and carrot to the broth mixture and simmer until tender, about 20 minutes.</li><li>Discard the bay leaves.</li><li>Puree the soup in batches in a blender until smooth; you'll still have flecks of carrot and broccoli.</li><li>Return to the pot. (Or puree the soup in the pot with an immersion blender.)</li><li>Add the cheese to the soup and whisk over medium heat until melted.</li><li>Add up to 3/4 cup water if the soup is too thick.</li><li>Ladle into the bread bowls and garnish with cheese.</li></ol>",
      analyzedInstructions: [
        {
          name: "",
          steps: [
            {
              number: 1,
              step: "Melt the butter in a large Dutch oven or pot over medium heat.",
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
                  id: 404667,
                  name: "dutch oven",
                  localizedName: "dutch oven",
                  image: "dutch-oven.jpg",
                },
              ],
            },
            {
              number: 2,
              step: "Add the onion and cook until tender, about 5 minutes.",
              ingredients: [
                {
                  id: 11282,
                  name: "onion",
                  localizedName: "onion",
                  image: "brown-onion.png",
                },
              ],
              equipment: [],
              length: {
                number: 5,
                unit: "minutes",
              },
            },
            {
              number: 3,
              step: "Whisk in the flour and cook until golden, 3 to 4 minutes, then gradually whisk in the half-and-half until smooth.",
              ingredients: [
                {
                  id: 20081,
                  name: "all purpose flour",
                  localizedName: "all purpose flour",
                  image: "flour.png",
                },
              ],
              equipment: [
                {
                  id: 404661,
                  name: "whisk",
                  localizedName: "whisk",
                  image: "whisk.png",
                },
              ],
              length: {
                number: 3,
                unit: "minutes",
              },
            },
            {
              number: 4,
              step: "Add the chicken broth, bay leaves and nutmeg, then season with salt and pepper and bring to a simmer.Reduce the heat to medium-low and cook, uncovered, until thickened, about 20 minutes.Meanwhile, prepare the bread bowls: Using a sharp knife, cut a circle into the top of each loaf, leaving a 1-inch border all around.",
              ingredients: [
                {
                  id: 1102047,
                  name: "salt and pepper",
                  localizedName: "salt and pepper",
                  image: "salt-and-pepper.jpg",
                },
                {
                  id: 6194,
                  name: "chicken broth",
                  localizedName: "chicken broth",
                  image: "chicken-broth.png",
                },
                {
                  id: 99169,
                  name: "bread bowls",
                  localizedName: "bread bowls",
                  image: "bread-bowl.png",
                },
                {
                  id: 2004,
                  name: "bay leaves",
                  localizedName: "bay leaves",
                  image: "bay-leaves.jpg",
                },
                {
                  id: 2025,
                  name: "nutmeg",
                  localizedName: "nutmeg",
                  image: "ground-nutmeg.jpg",
                },
              ],
              equipment: [
                {
                  id: 404783,
                  name: "bowl",
                  localizedName: "bowl",
                  image: "bowl.jpg",
                },
                {
                  id: 404745,
                  name: "knife",
                  localizedName: "knife",
                  image: "chefs-knife.jpg",
                },
              ],
              length: {
                number: 20,
                unit: "minutes",
              },
            },
            {
              number: 5,
              step: "Remove the bread top, then hollow out the middle with a fork or your fingers, leaving a thick bread shell.",
              ingredients: [
                {
                  id: 18064,
                  name: "bread",
                  localizedName: "bread",
                  image: "white-bread.jpg",
                },
              ],
              equipment: [],
            },
            {
              number: 6,
              step: "Add the broccoli and carrot to the broth mixture and simmer until tender, about 20 minutes.Discard the bay leaves.Puree the soup in batches in a blender until smooth; you'll still have flecks of carrot and broccoli.Return to the pot. (Or puree the soup in the pot with an immersion blender.)",
              ingredients: [
                {
                  id: 2004,
                  name: "bay leaves",
                  localizedName: "bay leaves",
                  image: "bay-leaves.jpg",
                },
                {
                  id: 11090,
                  name: "broccoli",
                  localizedName: "broccoli",
                  image: "broccoli.jpg",
                },
                {
                  id: 11124,
                  name: "carrot",
                  localizedName: "carrot",
                  image: "sliced-carrot.png",
                },
                {
                  id: 1006615,
                  name: "broth",
                  localizedName: "broth",
                  image: "chicken-broth.png",
                },
                {
                  id: 0,
                  name: "soup",
                  localizedName: "soup",
                  image: "",
                },
              ],
              equipment: [
                {
                  id: 404776,
                  name: "immersion blender",
                  localizedName: "immersion blender",
                  image: "immersion-blender.png",
                },
                {
                  id: 404726,
                  name: "blender",
                  localizedName: "blender",
                  image: "blender.png",
                },
                {
                  id: 404752,
                  name: "pot",
                  localizedName: "pot",
                  image: "stock-pot.jpg",
                },
              ],
              length: {
                number: 20,
                unit: "minutes",
              },
            },
            {
              number: 7,
              step: "Add the cheese to the soup and whisk over medium heat until melted.",
              ingredients: [
                {
                  id: 1041009,
                  name: "cheese",
                  localizedName: "cheese",
                  image: "cheddar-cheese.png",
                },
                {
                  id: 0,
                  name: "soup",
                  localizedName: "soup",
                  image: "",
                },
              ],
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
              number: 8,
              step: "Add up to 3/4 cup water if the soup is too thick.Ladle into the bread bowls and garnish with cheese.",
              ingredients: [
                {
                  id: 99169,
                  name: "bread bowls",
                  localizedName: "bread bowls",
                  image: "bread-bowl.png",
                },
                {
                  id: 1041009,
                  name: "cheese",
                  localizedName: "cheese",
                  image: "cheddar-cheese.png",
                },
                {
                  id: 14412,
                  name: "water",
                  localizedName: "water",
                  image: "water.png",
                },
                {
                  id: 0,
                  name: "soup",
                  localizedName: "soup",
                  image: "",
                },
              ],
              equipment: [
                {
                  id: 404783,
                  name: "bowl",
                  localizedName: "bowl",
                  image: "bowl.jpg",
                },
                {
                  id: 404630,
                  name: "ladle",
                  localizedName: "ladle",
                  image: "ladle.jpg",
                },
              ],
            },
          ],
        },
      ],
      originalId: null,
      spoonacularSourceUrl:
        "https://spoonacular.com/broccoli-cheddar-soup-a-panera-bread-co-copycat-636178",
    },
  ]);

  const subcategoriesData = [
    {
      name: "Chicken",
    },
    {
      name: "Dairy",
    },
    {
      name: "Grains",
    },
    {
      name: "Lamb",
    },
    {
      name: "Noodles",
    },
  ];
  const [selectedS, setSelectedS] = useState([""]);
  let formattedcategory = "";

  const selected = useRef([]);

  const selectedcategory = useRef([]);
  if (selectedcategory) {
    selectedcategory.current.push(categorytype);
    selectedcategory.current = [...new Set(selectedcategory.current)];
    if (selectedcategory.current.length > 1) {
      var last = selectedcategory.current[selectedcategory.current.length - 1];
      selectedcategory.current = [last];
      selected.current = [];
      setSelectedS([""]);
    }
  }

  return (
    <>
      <div className="subcategories-cont">
        {(subcategory ? subcategory : subcategoriesData).map((data, index) => {
          return (
            <button
              key={data + index}
              className="subcategory-listing"
              type="button"
              onClick={() => {
                selected.current.push(data);
                setSelectedS(selected.current);
                switch (categorytype) {
                  case "Cuisine":
                    formattedcategory = "cuisine";
                    break;
                  case "Meal Type":
                    formattedcategory = "mealtype";
                    break;
                  case "Diet Types":
                    formattedcategory = "diet";
                    break;
                  case "Allergy":
                    formattedcategory = "intolerances";
                    break;
                  case "Ingredients":
                    formattedcategory = "ingredient";
                    break;
                }
                const url = `http://44.238.74.165:3000/recipeclassification?${formattedcategory}=${selected.current.join()}&number=20`;
                console.log(url);
                const res = fetch(url)
                  .then((res) => res.json())
                  .then((data) => setfilteredRecipes(data.results));
              }}
            >
              <svg
                width="31"
                height="44"
                viewBox="0 0 31 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.0032 44V0H17.3959H17.1972C16.1988 0.0507447 15.2565 0.470886 14.5581 1.17668L1.442 14.026C0.666977 14.7984 0.220496 15.834 0.193992 16.9207L0.00321309 25.5497C-0.0104057 26.1022 0.0864914 26.6519 0.288362 27.1675C0.490232 27.683 0.793114 28.1542 1.17968 28.5541L14.9317 42.7606C15.5811 43.4399 16.4549 43.8683 17.3959 43.9686L30.0032 44ZM14.5104 22.0353C14.5104 20.8996 14.8516 19.7894 15.491 18.8451C16.1304 17.9008 17.0391 17.1648 18.1024 16.7302C19.1656 16.2956 20.3356 16.1819 21.4643 16.4034C22.593 16.625 23.6298 17.1719 24.4436 17.975C25.2574 18.778 25.8116 19.8012 26.0361 20.9151C26.2606 22.0289 26.1454 23.1835 25.705 24.2327C25.2646 25.282 24.5187 26.1788 23.5619 26.8098C22.605 27.4407 21.48 27.7775 20.3291 27.7775C19.5623 27.7775 18.8031 27.628 18.095 27.3374C17.387 27.0469 16.7441 26.6211 16.2034 26.0846C15.6626 25.548 15.2347 24.9113 14.9441 24.211C14.6536 23.5107 14.5062 22.7606 14.5104 22.0039V22.0353Z"
                  fill="#FB9400"
                />
              </svg>
              <div className="text-cont">{data}</div>
            </button>
          );
        })}
      </div>
      <div className="rfs-recipes-list-cont">
        {selectedS.length >= 1 && selectedS[0].length > 0 ? (
          <div className="categories-selected-cont">
            <div className="categories-selected-listing-cont">
              <SelectedSub selected={selectedS} />
            </div>
            <div className="categories-clear-selected-cont">
              <button className="categories-clear-selected-btn" type="button">
                Clear All
              </button>
            </div>
          </div>
        ) : (
          <div className="heading">Popular Recipes</div>
        )}
        <div className="listing-cont">
          {filteredrecipes.map((data, index) => {
            return <RecipeCard key={index} recipeData={data} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Subcategory;
