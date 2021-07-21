import React, { useState, useRef } from "react";

import RecipeCard from "../RecipeCard";
import SelectedSub from "./SelectedSub";

const Subcategory = ({ subcategory, categorytype }) => {
  const [filteredrecipes, setfilteredRecipes] = useState(
    [
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
    {
      vegetarian: false,
      vegan: false,
      glutenFree: true,
      dairyFree: true,
      veryHealthy: false,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      weightWatcherSmartPoints: 13,
      gaps: "no",
      lowFodmap: true,
      aggregateLikes: 50,
      spoonacularScore: 35,
      healthScore: 3,
      creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      license: "CC BY 3.0",
      sourceName: "Foodista",
      pricePerServing: 170.02,
      extendedIngredients: [
        {
          id: 10060,
          aisle: "Meat",
          image: "pork-tenderloin-raw.png",
          consistency: "solid",
          name: "lean pork tenderloins",
          nameClean: "lean pork tenderloin",
          original:
            "2 ounces pork tenderloins, about 12 each, trimmed (or alternatively one larger tenderloin)",
          originalString:
            "2 ounces pork tenderloins, about 12 each, trimmed (or alternatively one larger tenderloin)",
          originalName:
            "pork tenderloins, about 12 each, trimmed (or alternatively one larger tenderloin)",
          amount: 2,
          unit: "ounces",
          meta: ["trimmed", "(or alternatively one larger tenderloin)"],
          metaInformation: [
            "trimmed",
            "(or alternatively one larger tenderloin)",
          ],
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
          id: 1082047,
          aisle: "Spices and Seasonings",
          image: "salt.jpg",
          consistency: "solid",
          name: "kosher salt",
          nameClean: "kosher salt",
          original: "Kosher salt",
          originalString: "Kosher salt",
          originalName: "Kosher salt",
          amount: 1,
          unit: "serving",
          meta: [],
          metaInformation: [],
          measures: {
            us: {
              amount: 1,
              unitShort: "serving",
              unitLong: "serving",
            },
            metric: {
              amount: 1,
              unitShort: "serving",
              unitLong: "serving",
            },
          },
        },
        {
          id: 1002030,
          aisle: "Spices and Seasonings",
          image: "pepper.jpg",
          consistency: "solid",
          name: "ground pepper",
          nameClean: "black pepper",
          original: "Coarsely ground black pepper",
          originalString: "Coarsely ground black pepper",
          originalName: "Coarsely ground black pepper",
          amount: 1,
          unit: "serving",
          meta: ["black"],
          metaInformation: ["black"],
          measures: {
            us: {
              amount: 1,
              unitShort: "serving",
              unitLong: "serving",
            },
            metric: {
              amount: 1,
              unitShort: "serving",
              unitLong: "serving",
            },
          },
        },
        {
          id: 10123,
          aisle: "Meat",
          image: "raw-bacon.png",
          consistency: "solid",
          name: "bacon",
          nameClean: "applewood smoked bacon",
          original: "8 medium thick slices bacon",
          originalString: "8 medium thick slices bacon",
          originalName: "thick slices bacon",
          amount: 8,
          unit: "medium",
          meta: ["thick"],
          metaInformation: ["thick"],
          measures: {
            us: {
              amount: 8,
              unitShort: "medium",
              unitLong: "mediums",
            },
            metric: {
              amount: 8,
              unitShort: "medium",
              unitLong: "mediums",
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
          original: "1/2 cup pure maple syrup",
          originalString: "1/2 cup pure maple syrup",
          originalName: "pure maple syrup",
          amount: 0.5,
          unit: "cup",
          meta: ["pure"],
          metaInformation: ["pure"],
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
          name: "toothpicks",
          nameClean: null,
          original: "Toothpicks",
          originalString: "Toothpicks",
          originalName: "Toothpicks",
          amount: 1,
          unit: "serving",
          meta: [],
          metaInformation: [],
          measures: {
            us: {
              amount: 1,
              unitShort: "serving",
              unitLong: "serving",
            },
            metric: {
              amount: 1,
              unitShort: "serving",
              unitLong: "serving",
            },
          },
        },
      ],
      id: 650901,
      title: "Maple Glazed Bacon Wrapped Pork Tenderloin",
      readyInMinutes: 45,
      servings: 4,
      sourceUrl:
        "https://www.foodista.com/recipe/ZTJ2G6V8/maple-glazed-bacon-wrapped-pork-tenderloin",
      image: "https://spoonacular.com/recipeImages/650901-556x370.jpg",
      imageType: "jpg",
      summary:
        'If you have approximately <b>approximately 45 minutes</b> to spend in the kitchen, Maple Glazed Bacon Wrapped Pork Tenderloin might be an amazing <b>gluten free, dairy free, paleolithic, and primal</b> recipe to try. This recipe serves 4. One portion of this dish contains roughly <b>9g of protein</b>, <b>18g of fat</b>, and a total of <b>308 calories</b>. For <b>$1.7 per serving</b>, this recipe <b>covers 8%</b> of your daily requirements of vitamins and minerals. If you have bacon, toothpicks, coarsely ground pepper, and a few other ingredients on hand, you can make it. 50 people were impressed by this recipe. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 32%</b>. This score is not so great. Try <a href="https://spoonacular.com/recipes/apricot-glazed-bacon-wrapped-cajun-pork-tenderloin-826417">Apricot Glazed Bacon Wrapped Cajun Pork Tenderloin</a>, <a href="https://spoonacular.com/recipes/maple-bacon-wrapped-pork-tenderloin-with-rosemary-cherry-sauce-527927">Maple Bacon-Wrapped Pork Tenderloin with Rosemary Cherry Sauce</a>, and <a href="https://spoonacular.com/recipes/bacon-wrapped-maple-glazed-pork-loin-982165">Bacon Wrapped Maple Glazed Pork Loin</a> for similar recipes.',
      cuisines: [],
      dishTypes: [],
      diets: [
        "gluten free",
        "dairy free",
        "paleolithic",
        "primal",
        "fodmap friendly",
      ],
      occasions: [],
      instructions:
        "Sprinkle tenderloins with salt and pepper.  Place in a bowl or shallow dish.  Cover, and refrigerate for 30 minutes.\nMeanwhile soak toothpicks in water and prepare a gas or charcoal grill for medium-high, indirect grilling (variation: soak some applewood chips to add just before cooking)\nWrap bacon slices around pork, securing with toothpicks.  Place on grill and brown for a few minutes, covered.  Baste with some maple syrup and continue to grill for about 20-25 minutes, turning and basting occasionally with the maple syrup.\nThe pork should be done in 20-25 minutes total, or until the internal temperature reaches about 150 and the bacon is uniformly crispy.\nRemove from grill and let sit at room temperature for about 5 minutes before slicing.  Serve with accumulated juices!",
      analyzedInstructions: [
        {
          name: "",
          steps: [
            {
              number: 1,
              step: "Sprinkle tenderloins with salt and pepper.",
              ingredients: [
                {
                  id: 1102047,
                  name: "salt and pepper",
                  localizedName: "salt and pepper",
                  image: "salt-and-pepper.jpg",
                },
              ],
              equipment: [],
            },
            {
              number: 2,
              step: "Place in a bowl or shallow dish.  Cover, and refrigerate for 30 minutes.",
              ingredients: [],
              equipment: [
                {
                  id: 404783,
                  name: "bowl",
                  localizedName: "bowl",
                  image: "bowl.jpg",
                },
              ],
              length: {
                number: 30,
                unit: "minutes",
              },
            },
            {
              number: 3,
              step: "Meanwhile soak toothpicks in water and prepare a gas or charcoal grill for medium-high, indirect grilling (variation: soak some applewood chips to add just before cooking)",
              ingredients: [
                {
                  id: 11408,
                  name: "french fries",
                  localizedName: "french fries",
                  image: "french-fries-isolated.jpg",
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
                  id: 404644,
                  name: "toothpicks",
                  localizedName: "toothpicks",
                  image: "toothpicks.jpg",
                },
                {
                  id: 404706,
                  name: "grill",
                  localizedName: "grill",
                  image: "grill.jpg",
                },
              ],
            },
            {
              number: 4,
              step: "Wrap bacon slices around pork, securing with toothpicks.",
              ingredients: [
                {
                  id: 10123,
                  name: "bacon",
                  localizedName: "bacon",
                  image: "raw-bacon.png",
                },
                {
                  id: 10010219,
                  name: "pork",
                  localizedName: "pork",
                  image: "pork-tenderloin-raw.png",
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
                  id: 404644,
                  name: "toothpicks",
                  localizedName: "toothpicks",
                  image: "toothpicks.jpg",
                },
              ],
            },
            {
              number: 5,
              step: "Place on grill and brown for a few minutes, covered.  Baste with some maple syrup and continue to grill for about 20-25 minutes, turning and basting occasionally with the maple syrup.",
              ingredients: [
                {
                  id: 19911,
                  name: "maple syrup",
                  localizedName: "maple syrup",
                  image: "maple-syrup.png",
                },
              ],
              equipment: [
                {
                  id: 404706,
                  name: "grill",
                  localizedName: "grill",
                  image: "grill.jpg",
                },
              ],
              length: {
                number: 25,
                unit: "minutes",
              },
            },
            {
              number: 6,
              step: "The pork should be done in 20-25 minutes total, or until the internal temperature reaches about 150 and the bacon is uniformly crispy.",
              ingredients: [
                {
                  id: 10123,
                  name: "bacon",
                  localizedName: "bacon",
                  image: "raw-bacon.png",
                },
                {
                  id: 10010219,
                  name: "pork",
                  localizedName: "pork",
                  image: "pork-tenderloin-raw.png",
                },
              ],
              equipment: [],
              length: {
                number: 25,
                unit: "minutes",
              },
            },
            {
              number: 7,
              step: "Remove from grill and let sit at room temperature for about 5 minutes before slicing.",
              ingredients: [],
              equipment: [
                {
                  id: 404706,
                  name: "grill",
                  localizedName: "grill",
                  image: "grill.jpg",
                },
              ],
              length: {
                number: 5,
                unit: "minutes",
              },
            },
            {
              number: 8,
              step: "Serve with accumulated juices!",
              ingredients: [],
              equipment: [],
            },
          ],
        },
      ],
      originalId: null,
      spoonacularSourceUrl:
        "https://spoonacular.com/maple-glazed-bacon-wrapped-pork-tenderloin-650901",
    },
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
      aggregateLikes: 23,
      spoonacularScore: 80,
      healthScore: 24,
      creditsText: "Jen West",
      sourceName: "Pink When",
      pricePerServing: 274.6,
      extendedIngredients: [
        {
          id: 1032028,
          aisle: "Ethnic Foods;Spices and Seasonings",
          image: "chili-powder.jpg",
          consistency: "solid",
          name: "cajun seasoning",
          nameClean: "cajun seasoning",
          original: "1 tsp Cajun seasoning",
          originalString: "1 tsp Cajun seasoning",
          originalName: "Cajun seasoning",
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
          id: 5062,
          aisle: "Meat",
          image: "chicken-breasts.png",
          consistency: "solid",
          name: "chicken breasts",
          nameClean: "chicken breast",
          original:
            "2 8oz chicken breasts seasoned, grilled, and sliced (batch cook chicken for the week to save time!)",
          originalString:
            "2 8oz chicken breasts seasoned, grilled, and sliced (batch cook chicken for the week to save time!)",
          originalName:
            "chicken breasts seasoned, grilled, and sliced (batch cook chicken for the week to save time!)",
          amount: 16,
          unit: "oz",
          meta: ["sliced", "for the week to save time!)"],
          metaInformation: ["sliced", "for the week to save time!)"],
          measures: {
            us: {
              amount: 16,
              unitShort: "oz",
              unitLong: "ounces",
            },
            metric: {
              amount: 453.592,
              unitShort: "g",
              unitLong: "grams",
            },
          },
        },
        {
          id: 2044,
          aisle: "Produce;Spices and Seasonings",
          image: "basil.jpg",
          consistency: "solid",
          name: "fresh basil leaves",
          nameClean: "fresh basil",
          original: "3/4 cup fresh basil leaves",
          originalString: "3/4 cup fresh basil leaves",
          originalName: "fresh basil leaves",
          amount: 0.75,
          unit: "cup",
          meta: ["fresh"],
          metaInformation: ["fresh"],
          measures: {
            us: {
              amount: 0.75,
              unitShort: "cups",
              unitLong: "cups",
            },
            metric: {
              amount: 177.441,
              unitShort: "ml",
              unitLong: "milliliters",
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
          original: "1 clove garlic, peeled",
          originalString: "1 clove garlic, peeled",
          originalName: "garlic, peeled",
          amount: 1,
          unit: "clove",
          meta: ["peeled"],
          metaInformation: ["peeled"],
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
        {
          id: 1062047,
          aisle: "Spices and Seasonings",
          image: "garlic-salt.jpg",
          consistency: "solid",
          name: "garlic salt",
          nameClean: "garlic salt",
          original: "1 Tbsp garlic salt",
          originalString: "1 Tbsp garlic salt",
          originalName: "garlic salt",
          amount: 1,
          unit: "Tbsp",
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
          id: 4053,
          aisle: "Oil, Vinegar, Salad Dressing",
          image: "olive-oil.jpg",
          consistency: "liquid",
          name: "olive oil",
          nameClean: "olive oil",
          original: "1/2 cup olive oil (separated into 2 – 1/4 cups)",
          originalString: "1/2 cup olive oil (separated into 2 – 1/4 cups)",
          originalName: "olive oil (separated into 2 – 1/4 cups)",
          amount: 0.5,
          unit: "cup",
          meta: ["separated", "( into 2 -)"],
          metaInformation: ["separated", "( into 2 -)"],
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
          id: 1033,
          aisle: "Cheese",
          image: "parmesan.jpg",
          consistency: "solid",
          name: "parmesan cheese",
          nameClean: "parmesan",
          original: "1 Tbsp grated parmesan cheese",
          originalString: "1 Tbsp grated parmesan cheese",
          originalName: "grated parmesan cheese",
          amount: 1,
          unit: "Tbsp",
          meta: ["grated"],
          metaInformation: ["grated"],
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
          id: 11477,
          aisle: "Produce",
          image: "zucchini.jpg",
          consistency: "solid",
          name: "zucchini",
          nameClean: "zucchini",
          original: "2 large zucchini, spiraled",
          originalString: "2 large zucchini, spiraled",
          originalName: "zucchini, spiraled",
          amount: 2,
          unit: "large",
          meta: [],
          metaInformation: [],
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
      ],
      id: 780001,
      title: "Pesto Chicken Zoodles",
      readyInMinutes: 45,
      servings: 3,
      sourceUrl: "http://www.pinkwhen.com/pesto-chicken-zoodles/",
      image: "https://spoonacular.com/recipeImages/780001-556x370.jpg",
      imageType: "jpg",
      summary:
        'Need a <b>gluten free and primal main course</b>? Pesto Chicken Zoodles could be an amazing recipe to try. For <b>$2.5 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. One serving contains <b>524 calories</b>, <b>35g of protein</b>, and <b>41g of fat</b>. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. 22 people have made this recipe and would make it again. Head to the store and pick up cajun seasoning, chicken breasts seasoned, olive oil, and a few other things to make it today. To use up the olive oil you could follow this main course with the <a href="https://spoonacular.com/recipes/sauteed-banana-granola-and-yogurt-parfait-624619">Sauteed Banana, Granolan and Yogurt Parfait</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 76%</b>. This score is solid. Similar recipes include <a href="https://spoonacular.com/recipes/pesto-zoodles-with-chicken-757213">Pesto Zoodles with Chicken</a>, <a href="https://spoonacular.com/recipes/shrimp-and-pesto-zoodles-874131">Shrimp and Pesto Zoodles</a>, and <a href="https://spoonacular.com/recipes/low-fat-vegan-pesto-zoodles-with-broccoli-720890">Low Fat Vegan Pesto Zoodles with Broccoli</a>.',
      cuisines: [],
      dishTypes: ["lunch", "main course", "main dish", "dinner"],
      diets: ["gluten free", "primal"],
      occasions: [],
      instructions:
        "To get started, place 1/4 cup of olive oil into a medium saucepan and allow to heat on medium heat. Once warm, place zucchini in pan and then sprinkle with garlic salt and cajun seasoning. Toss with tongs to get all of the zucchini coated with oil and seasoning. Cover with a lid and steam for two to three minutes. Remove lid, toss zucchini noodles again and then cover for another 2 minutes. Remove from heat.In the mean time, place the basil, garlic, and grated parmesan cheese into a food processor. Slowly add the olive oil, and then set to the side.Add zucchini noodles, pesto, and chicken to a medium dish and toss until everything is fully coated. Serve immediately.This is seriously, SO GOOD!If you are looking for more healthy recipes like this Pesto Chicken Zoodles recipe, check out the Simple Fit Forty Section of this blog, or consider joining our secret Facebook group where we share all things healthy.If you are not making this TODAY, then make sure you pin this for later! Its a keeper.JOIN 500,000 SUBSCRIBERS!Join over 500,000 others who follow PinkWhen on Social Media, the PinkWhen blog, and email. Sign up to receive exclusive bonuses like this FREE Simple Fit Dinners Ebook.Don't wait! You won't want to miss a thing.Success! Now check your email to confirm your subscription and download your FREE ebook.There was an error submitting your subscription. Please try again.First NameEmail AddressSubscribePowered by ConvertKit",
      analyzedInstructions: [
        {
          name: "",
          steps: [
            {
              number: 1,
              step: "To get started, place 1/4 cup of olive oil into a medium saucepan and allow to heat on medium heat. Once warm, place zucchini in pan and then sprinkle with garlic salt and cajun seasoning. Toss with tongs to get all of the zucchini coated with oil and seasoning. Cover with a lid and steam for two to three minutes.",
              ingredients: [
                {
                  id: 1032028,
                  name: "cajun seasoning",
                  localizedName: "cajun seasoning",
                  image: "chili-powder.jpg",
                },
                {
                  id: 1062047,
                  name: "garlic salt",
                  localizedName: "garlic salt",
                  image: "garlic-salt.jpg",
                },
                {
                  id: 4053,
                  name: "olive oil",
                  localizedName: "olive oil",
                  image: "olive-oil.jpg",
                },
                {
                  id: 1042027,
                  name: "seasoning",
                  localizedName: "seasoning",
                  image: "seasoning.png",
                },
                {
                  id: 11477,
                  name: "zucchini",
                  localizedName: "zucchini",
                  image: "zucchini.jpg",
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
                  id: 404669,
                  name: "sauce pan",
                  localizedName: "sauce pan",
                  image: "sauce-pan.jpg",
                },
                {
                  id: 404641,
                  name: "tongs",
                  localizedName: "tongs",
                  image: "tongs.jpg",
                },
                {
                  id: 404645,
                  name: "frying pan",
                  localizedName: "frying pan",
                  image: "pan.png",
                },
              ],
              length: {
                number: 2,
                unit: "minutes",
              },
            },
            {
              number: 2,
              step: "Remove lid, toss zucchini noodles again and then cover for another 2 minutes.",
              ingredients: [
                {
                  id: 10111477,
                  name: "zucchini noodles",
                  localizedName: "zucchini noodles",
                  image: "zoodles.jpg",
                },
              ],
              equipment: [],
              length: {
                number: 2,
                unit: "minutes",
              },
            },
            {
              number: 3,
              step: "Remove from heat.In the mean time, place the basil, garlic, and grated parmesan cheese into a food processor. Slowly add the olive oil, and then set to the side.",
              ingredients: [
                {
                  id: 1032,
                  name: "grated parmesan cheese",
                  localizedName: "grated parmesan cheese",
                  image: "parmesan.jpg",
                },
                {
                  id: 4053,
                  name: "olive oil",
                  localizedName: "olive oil",
                  image: "olive-oil.jpg",
                },
                {
                  id: 11215,
                  name: "garlic",
                  localizedName: "garlic",
                  image: "garlic.png",
                },
                {
                  id: 2044,
                  name: "basil",
                  localizedName: "basil",
                  image: "basil.jpg",
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
              step: "Add zucchini noodles, pesto, and chicken to a medium dish and toss until everything is fully coated.",
              ingredients: [
                {
                  id: 10111477,
                  name: "zucchini noodles",
                  localizedName: "zucchini noodles",
                  image: "zoodles.jpg",
                },
                {
                  id: 5006,
                  name: "whole chicken",
                  localizedName: "whole chicken",
                  image: "whole-chicken.jpg",
                },
                {
                  id: 93698,
                  name: "pesto",
                  localizedName: "pesto",
                  image: "basil-pesto.png",
                },
              ],
              equipment: [],
            },
            {
              number: 5,
              step: "Serve immediately.This is seriously, SO GOOD!If you are looking for more healthy recipes like this Pesto Chicken Zoodles recipe, check out the Simple Fit Forty Section of this blog, or consider joining our secret Facebook group where we share all things healthy.If you are not making this TODAY, then make sure you pin this for later! Its a keeper.JOIN 500,000 SUBSCRIBERS!Join over 500,000 others who follow Pink",
              ingredients: [
                {
                  id: 5006,
                  name: "whole chicken",
                  localizedName: "whole chicken",
                  image: "whole-chicken.jpg",
                },
                {
                  id: 10111477,
                  name: "zucchini noodles",
                  localizedName: "zucchini noodles",
                  image: "zoodles.jpg",
                },
                {
                  id: 93698,
                  name: "pesto",
                  localizedName: "pesto",
                  image: "basil-pesto.png",
                },
              ],
              equipment: [],
            },
            {
              number: 6,
              step: "When on Social Media, the Pink",
              ingredients: [],
              equipment: [],
            },
            {
              number: 7,
              step: "When blog, and email. Sign up to receive exclusive bonuses like this FREE Simple Fit Dinners Ebook.Don't wait! You won't want to miss a thing.Success! Now check your email to confirm your subscription and download your FREE ebook.There was an error submitting your subscription. Please try again.First Name",
              ingredients: [],
              equipment: [],
            },
            {
              number: 8,
              step: "Email",
              ingredients: [],
              equipment: [],
            },
            {
              number: 9,
              step: "Address",
              ingredients: [],
              equipment: [],
            },
            {
              number: 10,
              step: "Subscribe",
              ingredients: [],
              equipment: [],
            },
            {
              number: 11,
              step: "Powered by Convert",
              ingredients: [],
              equipment: [],
            },
            {
              number: 12,
              step: "Kit",
              ingredients: [],
              equipment: [],
            },
          ],
        },
      ],
      originalId: null,
      spoonacularSourceUrl:
        "https://spoonacular.com/pesto-chicken-zoodles-780001",
    },
    {
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      dairyFree: true,
      veryHealthy: false,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      weightWatcherSmartPoints: 6,
      gaps: "no",
      lowFodmap: false,
      aggregateLikes: 103,
      spoonacularScore: 61,
      healthScore: 10,
      creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      license: "CC BY 3.0",
      sourceName: "Foodista",
      pricePerServing: 132.51,
      extendedIngredients: [
        {
          id: 11207,
          aisle: "Produce",
          image: "dandelion-greens.jpg",
          consistency: "solid",
          name: "dandelion greens",
          nameClean: "dandelion greens",
          original: "2 big handfuls of dandelion greens",
          originalString: "2 big handfuls of dandelion greens",
          originalName: "dandelion greens",
          amount: 2,
          unit: "handfuls",
          meta: [],
          metaInformation: [],
          measures: {
            us: {
              amount: 2,
              unitShort: "handfuls",
              unitLong: "handfuls",
            },
            metric: {
              amount: 2,
              unitShort: "handfuls",
              unitLong: "handfuls",
            },
          },
        },
        {
          id: 2044,
          aisle: "Produce;Spices and Seasonings",
          image: "basil.jpg",
          consistency: "solid",
          name: "fresh basil leaves",
          nameClean: "fresh basil",
          original: "2 handfuls of fresh basil leaves",
          originalString: "2 handfuls of fresh basil leaves",
          originalName: "fresh basil leaves",
          amount: 2,
          unit: "handfuls",
          meta: ["fresh"],
          metaInformation: ["fresh"],
          measures: {
            us: {
              amount: 2,
              unitShort: "handfuls",
              unitLong: "handfuls",
            },
            metric: {
              amount: 2,
              unitShort: "handfuls",
              unitLong: "handfuls",
            },
          },
        },
        {
          id: 10011457,
          aisle: "Produce",
          image: "spinach.jpg",
          consistency: "solid",
          name: "spinach",
          nameClean: "spinach",
          original: "1 handful of spinach (optional)",
          originalString: "1 handful of spinach (optional)",
          originalName: "spinach (optional)",
          amount: 1,
          unit: "handful",
          meta: [],
          metaInformation: [],
          measures: {
            us: {
              amount: 1,
              unitShort: "handful",
              unitLong: "handful",
            },
            metric: {
              amount: 1,
              unitShort: "handful",
              unitLong: "handful",
            },
          },
        },
        {
          id: 11416,
          aisle: "Produce",
          image: "squash-blossoms.jpg",
          consistency: "solid",
          name: "squash flowers",
          nameClean: "squash blossoms",
          original: "The petals from 5 dandelion flowers",
          originalString: "The petals from 5 dandelion flowers",
          originalName: "The petals from dandelion flowers",
          amount: 5,
          unit: "",
          meta: [],
          metaInformation: [],
          measures: {
            us: {
              amount: 5,
              unitShort: "",
              unitLong: "",
            },
            metric: {
              amount: 5,
              unitShort: "",
              unitLong: "",
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
          original: "1 large clove of garlic",
          originalString: "1 large clove of garlic",
          originalName: "garlic",
          amount: 1,
          unit: "large clove",
          meta: [],
          metaInformation: [],
          measures: {
            us: {
              amount: 1,
              unitShort: "large clove",
              unitLong: "large clove",
            },
            metric: {
              amount: 1,
              unitShort: "large clove",
              unitLong: "large clove",
            },
          },
        },
        {
          id: 1012047,
          aisle: "Spices and Seasonings",
          image: "salt.jpg",
          consistency: "solid",
          name: "sea salt",
          nameClean: "coarse sea salt",
          original: "1/2 tsp sea salt",
          originalString: "1/2 tsp sea salt",
          originalName: "sea salt",
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
          id: 12147,
          aisle: "Produce;Baking",
          image: "pine-nuts.png",
          consistency: "solid",
          name: "pine nuts",
          nameClean: "pine nuts",
          original: "1 handful of pine nuts",
          originalString: "1 handful of pine nuts",
          originalName: "pine nuts",
          amount: 1,
          unit: "handful",
          meta: [],
          metaInformation: [],
          measures: {
            us: {
              amount: 1,
              unitShort: "handful",
              unitLong: "handful",
            },
            metric: {
              amount: 1,
              unitShort: "handful",
              unitLong: "handful",
            },
          },
        },
        {
          id: 12131,
          aisle: "Nuts;Savory Snacks;Baking",
          image: "macadamia-nuts.png",
          consistency: "solid",
          name: "macadamia nuts",
          nameClean: "macadamia nuts",
          original: "1 handful of hemp, sunflower seeds or macadamia nuts",
          originalString:
            "1 handful of hemp, sunflower seeds or macadamia nuts",
          originalName: "hemp, sunflower seeds or macadamia nuts",
          amount: 1,
          unit: "handful",
          meta: [],
          metaInformation: [],
          measures: {
            us: {
              amount: 1,
              unitShort: "handful",
              unitLong: "handful",
            },
            metric: {
              amount: 1,
              unitShort: "handful",
              unitLong: "handful",
            },
          },
        },
        {
          id: 1034053,
          aisle: "Oil, Vinegar, Salad Dressing",
          image: "olive-oil.jpg",
          consistency: "liquid",
          name: "extra-virgin olive oil",
          nameClean: "extra virgin olive oil",
          original:
            "Enough extra virgin olive oil to bind the sauce together, around 4-6 tbsp",
          originalString:
            "Enough extra virgin olive oil to bind the sauce together, around 4-6 tbsp",
          originalName:
            "Enough extra virgin olive oil to bind the sauce together, around",
          amount: 4,
          unit: "tbsp",
          meta: [],
          metaInformation: [],
          measures: {
            us: {
              amount: 4,
              unitShort: "Tbsps",
              unitLong: "Tbsps",
            },
            metric: {
              amount: 4,
              unitShort: "Tbsps",
              unitLong: "Tbsps",
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
          original: "Juice of half a lemon",
          originalString: "Juice of half a lemon",
          originalName: "Juice of half a lemon",
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
          id: 93690,
          aisle: "Spices and Seasonings;Health Foods",
          image: "nutritional-yeast.png",
          consistency: "solid",
          name: "nutritional yeast flakes",
          nameClean: "nutritional yeast flakes",
          original: "1 tbsp nutritional yeast flakes (optional)",
          originalString: "1 tbsp nutritional yeast flakes (optional)",
          originalName: "nutritional yeast flakes (optional)",
          amount: 1,
          unit: "tbsp",
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
      ],
      id: 641227,
      title: "Dandelion pesto",
      readyInMinutes: 45,
      servings: 4,
      sourceUrl: "https://www.foodista.com/recipe/H3PMVLPC/dandelion-pesto",
      image: "https://spoonacular.com/recipeImages/641227-556x370.jpg",
      imageType: "jpg",
      summary:
        'Dandelion pesto is a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> condiment. This recipe serves 4 and costs $1.33 per serving. One portion of this dish contains approximately <b>2g of protein</b>, <b>20g of fat</b>, and a total of <b>192 calories</b>. If you have dandelion greens, pine nuts, macadamia nuts, and a few other ingredients on hand, you can make it. 103 people have made this recipe and would make it again. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately <b>approximately 45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 60%</b>, which is solid. If you like this recipe, you might also like recipes such as <a href="https://spoonacular.com/recipes/dandelion-pesto-14296">Dandelion Pesto</a>, <a href="https://spoonacular.com/recipes/dandelion-pumpkin-seed-pesto-14309">Dandelion Pumpkin Seed Pesto</a>, and <a href="https://spoonacular.com/recipes/almond-herb-tarts-with-dandelion-pesto-truffled-fontina-figs-9087">Almond Herb Tarts With Dandelion Pesto, Truffled Fontina & Figs</a>.',
      cuisines: [],
      dishTypes: ["condiment", "dip", "sauce", "spread"],
      diets: [
        "gluten free",
        "dairy free",
        "paleolithic",
        "lacto ovo vegetarian",
        "primal",
        "vegan",
      ],
      occasions: [],
      instructions:
        "Wash the dandelion well in a solution of water and raw cider vinegar, using a couple of tablespoons of vinegar to about a litre of water. Wash and spin dry all the greens. Pop all the ingredients into a pestle and mortar or food processor and pound/blitz till nearly smooth - I like to leave a little texture to my pesto but play around with it. And that's it! Pretty simple and very scrummy.",
      analyzedInstructions: [
        {
          name: "",
          steps: [
            {
              number: 1,
              step: "Wash the dandelion well in a solution of water and raw cider vinegar, using a couple of tablespoons of vinegar to about a litre of water. Wash and spin dry all the greens. Pop all the ingredients into a pestle and mortar or food processor and pound/blitz till nearly smooth - I like to leave a little texture to my pesto but play around with it. And that's it! Pretty simple and very scrummy.",
              ingredients: [
                {
                  id: 2048,
                  name: "apple cider vinegar",
                  localizedName: "apple cider vinegar",
                  image: "apple-cider-vinegar.jpg",
                },
                {
                  id: 2053,
                  name: "vinegar",
                  localizedName: "vinegar",
                  image: "vinegar-(white).jpg",
                },
                {
                  id: 21052,
                  name: "greens",
                  localizedName: "greens",
                  image: "mixed-greens-or-mesclun.jpg",
                },
                {
                  id: 93698,
                  name: "pesto",
                  localizedName: "pesto",
                  image: "basil-pesto.png",
                },
                {
                  id: 14412,
                  name: "water",
                  localizedName: "water",
                  image: "water.png",
                },
                {
                  id: 0,
                  name: "pop",
                  localizedName: "soft drink",
                  image: "",
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
                  id: 404751,
                  name: "mortar and pestle",
                  localizedName: "mortar and pestle",
                  image: "mortar-and-pestle.jpg",
                },
              ],
            },
          ],
        },
      ],
      originalId: null,
      spoonacularSourceUrl: "https://spoonacular.com/dandelion-pesto-641227",
    },
    ,
  ]);


const refurl=useRef();



const updatesubcategory=(e,data)=>{

const filtered=(selected.current)
const index=filtered.indexOf(data)
if (index > -1) {
  filtered.splice(index, 1);
}
const urlfilter = `http://44.238.74.165:3000/recipeclassification?${refurl.current}=${filtered.join()}&number=20`;
 const res = fetch(urlfilter)
   .then((res) => res.json())
   .then((data) => setfilteredRecipes(data.results));
}


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
							title={data}
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
              refurl.current=formattedcategory
                const res = fetch(url)
                  .then((res) => res.json())
                  .then((data) => setfilteredRecipes(data.results));
              }}
            >
              <svg
                width="31"
                height="43"
                viewBox="0 0 31 43"
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



              <SelectedSub selected={selectedS} onclick={updatesubcategory}/>




            </div>
            <div className="categories-clear-selected-cont">
              <button className="categories-clear-selected-btn" onClick={()=>{setfilteredRecipes(
                [
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
                  creditsText:
                    "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
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
                      meta: [
                        "white",
                        "yellow",
                        "grated",
                        "plus more for garnish",
                      ],
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
                      original:
                        "7 inches sourdough bread boules (round loaves)",
                      originalString:
                        "7 inches sourdough bread boules (round loaves)",
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
                  image:
                    "https://spoonacular.com/recipeImages/636178-556x370.jpg",
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
                {
                  vegetarian: false,
                  vegan: false,
                  glutenFree: true,
                  dairyFree: true,
                  veryHealthy: false,
                  cheap: false,
                  veryPopular: false,
                  sustainable: false,
                  weightWatcherSmartPoints: 13,
                  gaps: "no",
                  lowFodmap: true,
                  aggregateLikes: 50,
                  spoonacularScore: 35,
                  healthScore: 3,
                  creditsText:
                    "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
                  license: "CC BY 3.0",
                  sourceName: "Foodista",
                  pricePerServing: 170.02,
                  extendedIngredients: [
                    {
                      id: 10060,
                      aisle: "Meat",
                      image: "pork-tenderloin-raw.png",
                      consistency: "solid",
                      name: "lean pork tenderloins",
                      nameClean: "lean pork tenderloin",
                      original:
                        "2 ounces pork tenderloins, about 12 each, trimmed (or alternatively one larger tenderloin)",
                      originalString:
                        "2 ounces pork tenderloins, about 12 each, trimmed (or alternatively one larger tenderloin)",
                      originalName:
                        "pork tenderloins, about 12 each, trimmed (or alternatively one larger tenderloin)",
                      amount: 2,
                      unit: "ounces",
                      meta: [
                        "trimmed",
                        "(or alternatively one larger tenderloin)",
                      ],
                      metaInformation: [
                        "trimmed",
                        "(or alternatively one larger tenderloin)",
                      ],
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
                      id: 1082047,
                      aisle: "Spices and Seasonings",
                      image: "salt.jpg",
                      consistency: "solid",
                      name: "kosher salt",
                      nameClean: "kosher salt",
                      original: "Kosher salt",
                      originalString: "Kosher salt",
                      originalName: "Kosher salt",
                      amount: 1,
                      unit: "serving",
                      meta: [],
                      metaInformation: [],
                      measures: {
                        us: {
                          amount: 1,
                          unitShort: "serving",
                          unitLong: "serving",
                        },
                        metric: {
                          amount: 1,
                          unitShort: "serving",
                          unitLong: "serving",
                        },
                      },
                    },
                    {
                      id: 1002030,
                      aisle: "Spices and Seasonings",
                      image: "pepper.jpg",
                      consistency: "solid",
                      name: "ground pepper",
                      nameClean: "black pepper",
                      original: "Coarsely ground black pepper",
                      originalString: "Coarsely ground black pepper",
                      originalName: "Coarsely ground black pepper",
                      amount: 1,
                      unit: "serving",
                      meta: ["black"],
                      metaInformation: ["black"],
                      measures: {
                        us: {
                          amount: 1,
                          unitShort: "serving",
                          unitLong: "serving",
                        },
                        metric: {
                          amount: 1,
                          unitShort: "serving",
                          unitLong: "serving",
                        },
                      },
                    },
                    {
                      id: 10123,
                      aisle: "Meat",
                      image: "raw-bacon.png",
                      consistency: "solid",
                      name: "bacon",
                      nameClean: "applewood smoked bacon",
                      original: "8 medium thick slices bacon",
                      originalString: "8 medium thick slices bacon",
                      originalName: "thick slices bacon",
                      amount: 8,
                      unit: "medium",
                      meta: ["thick"],
                      metaInformation: ["thick"],
                      measures: {
                        us: {
                          amount: 8,
                          unitShort: "medium",
                          unitLong: "mediums",
                        },
                        metric: {
                          amount: 8,
                          unitShort: "medium",
                          unitLong: "mediums",
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
                      original: "1/2 cup pure maple syrup",
                      originalString: "1/2 cup pure maple syrup",
                      originalName: "pure maple syrup",
                      amount: 0.5,
                      unit: "cup",
                      meta: ["pure"],
                      metaInformation: ["pure"],
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
                      name: "toothpicks",
                      nameClean: null,
                      original: "Toothpicks",
                      originalString: "Toothpicks",
                      originalName: "Toothpicks",
                      amount: 1,
                      unit: "serving",
                      meta: [],
                      metaInformation: [],
                      measures: {
                        us: {
                          amount: 1,
                          unitShort: "serving",
                          unitLong: "serving",
                        },
                        metric: {
                          amount: 1,
                          unitShort: "serving",
                          unitLong: "serving",
                        },
                      },
                    },
                  ],
                  id: 650901,
                  title: "Maple Glazed Bacon Wrapped Pork Tenderloin",
                  readyInMinutes: 45,
                  servings: 4,
                  sourceUrl:
                    "https://www.foodista.com/recipe/ZTJ2G6V8/maple-glazed-bacon-wrapped-pork-tenderloin",
                  image:
                    "https://spoonacular.com/recipeImages/650901-556x370.jpg",
                  imageType: "jpg",
                  summary:
                    'If you have approximately <b>approximately 45 minutes</b> to spend in the kitchen, Maple Glazed Bacon Wrapped Pork Tenderloin might be an amazing <b>gluten free, dairy free, paleolithic, and primal</b> recipe to try. This recipe serves 4. One portion of this dish contains roughly <b>9g of protein</b>, <b>18g of fat</b>, and a total of <b>308 calories</b>. For <b>$1.7 per serving</b>, this recipe <b>covers 8%</b> of your daily requirements of vitamins and minerals. If you have bacon, toothpicks, coarsely ground pepper, and a few other ingredients on hand, you can make it. 50 people were impressed by this recipe. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 32%</b>. This score is not so great. Try <a href="https://spoonacular.com/recipes/apricot-glazed-bacon-wrapped-cajun-pork-tenderloin-826417">Apricot Glazed Bacon Wrapped Cajun Pork Tenderloin</a>, <a href="https://spoonacular.com/recipes/maple-bacon-wrapped-pork-tenderloin-with-rosemary-cherry-sauce-527927">Maple Bacon-Wrapped Pork Tenderloin with Rosemary Cherry Sauce</a>, and <a href="https://spoonacular.com/recipes/bacon-wrapped-maple-glazed-pork-loin-982165">Bacon Wrapped Maple Glazed Pork Loin</a> for similar recipes.',
                  cuisines: [],
                  dishTypes: [],
                  diets: [
                    "gluten free",
                    "dairy free",
                    "paleolithic",
                    "primal",
                    "fodmap friendly",
                  ],
                  occasions: [],
                  instructions:
                    "Sprinkle tenderloins with salt and pepper.  Place in a bowl or shallow dish.  Cover, and refrigerate for 30 minutes.\nMeanwhile soak toothpicks in water and prepare a gas or charcoal grill for medium-high, indirect grilling (variation: soak some applewood chips to add just before cooking)\nWrap bacon slices around pork, securing with toothpicks.  Place on grill and brown for a few minutes, covered.  Baste with some maple syrup and continue to grill for about 20-25 minutes, turning and basting occasionally with the maple syrup.\nThe pork should be done in 20-25 minutes total, or until the internal temperature reaches about 150 and the bacon is uniformly crispy.\nRemove from grill and let sit at room temperature for about 5 minutes before slicing.  Serve with accumulated juices!",
                  analyzedInstructions: [
                    {
                      name: "",
                      steps: [
                        {
                          number: 1,
                          step: "Sprinkle tenderloins with salt and pepper.",
                          ingredients: [
                            {
                              id: 1102047,
                              name: "salt and pepper",
                              localizedName: "salt and pepper",
                              image: "salt-and-pepper.jpg",
                            },
                          ],
                          equipment: [],
                        },
                        {
                          number: 2,
                          step: "Place in a bowl or shallow dish.  Cover, and refrigerate for 30 minutes.",
                          ingredients: [],
                          equipment: [
                            {
                              id: 404783,
                              name: "bowl",
                              localizedName: "bowl",
                              image: "bowl.jpg",
                            },
                          ],
                          length: {
                            number: 30,
                            unit: "minutes",
                          },
                        },
                        {
                          number: 3,
                          step: "Meanwhile soak toothpicks in water and prepare a gas or charcoal grill for medium-high, indirect grilling (variation: soak some applewood chips to add just before cooking)",
                          ingredients: [
                            {
                              id: 11408,
                              name: "french fries",
                              localizedName: "french fries",
                              image: "french-fries-isolated.jpg",
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
                              id: 404644,
                              name: "toothpicks",
                              localizedName: "toothpicks",
                              image: "toothpicks.jpg",
                            },
                            {
                              id: 404706,
                              name: "grill",
                              localizedName: "grill",
                              image: "grill.jpg",
                            },
                          ],
                        },
                        {
                          number: 4,
                          step: "Wrap bacon slices around pork, securing with toothpicks.",
                          ingredients: [
                            {
                              id: 10123,
                              name: "bacon",
                              localizedName: "bacon",
                              image: "raw-bacon.png",
                            },
                            {
                              id: 10010219,
                              name: "pork",
                              localizedName: "pork",
                              image: "pork-tenderloin-raw.png",
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
                              id: 404644,
                              name: "toothpicks",
                              localizedName: "toothpicks",
                              image: "toothpicks.jpg",
                            },
                          ],
                        },
                        {
                          number: 5,
                          step: "Place on grill and brown for a few minutes, covered.  Baste with some maple syrup and continue to grill for about 20-25 minutes, turning and basting occasionally with the maple syrup.",
                          ingredients: [
                            {
                              id: 19911,
                              name: "maple syrup",
                              localizedName: "maple syrup",
                              image: "maple-syrup.png",
                            },
                          ],
                          equipment: [
                            {
                              id: 404706,
                              name: "grill",
                              localizedName: "grill",
                              image: "grill.jpg",
                            },
                          ],
                          length: {
                            number: 25,
                            unit: "minutes",
                          },
                        },
                        {
                          number: 6,
                          step: "The pork should be done in 20-25 minutes total, or until the internal temperature reaches about 150 and the bacon is uniformly crispy.",
                          ingredients: [
                            {
                              id: 10123,
                              name: "bacon",
                              localizedName: "bacon",
                              image: "raw-bacon.png",
                            },
                            {
                              id: 10010219,
                              name: "pork",
                              localizedName: "pork",
                              image: "pork-tenderloin-raw.png",
                            },
                          ],
                          equipment: [],
                          length: {
                            number: 25,
                            unit: "minutes",
                          },
                        },
                        {
                          number: 7,
                          step: "Remove from grill and let sit at room temperature for about 5 minutes before slicing.",
                          ingredients: [],
                          equipment: [
                            {
                              id: 404706,
                              name: "grill",
                              localizedName: "grill",
                              image: "grill.jpg",
                            },
                          ],
                          length: {
                            number: 5,
                            unit: "minutes",
                          },
                        },
                        {
                          number: 8,
                          step: "Serve with accumulated juices!",
                          ingredients: [],
                          equipment: [],
                        },
                      ],
                    },
                  ],
                  originalId: null,
                  spoonacularSourceUrl:
                    "https://spoonacular.com/maple-glazed-bacon-wrapped-pork-tenderloin-650901",
                },
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
                  aggregateLikes: 23,
                  spoonacularScore: 80,
                  healthScore: 24,
                  creditsText: "Jen West",
                  sourceName: "Pink When",
                  pricePerServing: 274.6,
                  extendedIngredients: [
                    {
                      id: 1032028,
                      aisle: "Ethnic Foods;Spices and Seasonings",
                      image: "chili-powder.jpg",
                      consistency: "solid",
                      name: "cajun seasoning",
                      nameClean: "cajun seasoning",
                      original: "1 tsp Cajun seasoning",
                      originalString: "1 tsp Cajun seasoning",
                      originalName: "Cajun seasoning",
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
                      id: 5062,
                      aisle: "Meat",
                      image: "chicken-breasts.png",
                      consistency: "solid",
                      name: "chicken breasts",
                      nameClean: "chicken breast",
                      original:
                        "2 8oz chicken breasts seasoned, grilled, and sliced (batch cook chicken for the week to save time!)",
                      originalString:
                        "2 8oz chicken breasts seasoned, grilled, and sliced (batch cook chicken for the week to save time!)",
                      originalName:
                        "chicken breasts seasoned, grilled, and sliced (batch cook chicken for the week to save time!)",
                      amount: 16,
                      unit: "oz",
                      meta: ["sliced", "for the week to save time!)"],
                      metaInformation: [
                        "sliced",
                        "for the week to save time!)",
                      ],
                      measures: {
                        us: {
                          amount: 16,
                          unitShort: "oz",
                          unitLong: "ounces",
                        },
                        metric: {
                          amount: 453.592,
                          unitShort: "g",
                          unitLong: "grams",
                        },
                      },
                    },
                    {
                      id: 2044,
                      aisle: "Produce;Spices and Seasonings",
                      image: "basil.jpg",
                      consistency: "solid",
                      name: "fresh basil leaves",
                      nameClean: "fresh basil",
                      original: "3/4 cup fresh basil leaves",
                      originalString: "3/4 cup fresh basil leaves",
                      originalName: "fresh basil leaves",
                      amount: 0.75,
                      unit: "cup",
                      meta: ["fresh"],
                      metaInformation: ["fresh"],
                      measures: {
                        us: {
                          amount: 0.75,
                          unitShort: "cups",
                          unitLong: "cups",
                        },
                        metric: {
                          amount: 177.441,
                          unitShort: "ml",
                          unitLong: "milliliters",
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
                      original: "1 clove garlic, peeled",
                      originalString: "1 clove garlic, peeled",
                      originalName: "garlic, peeled",
                      amount: 1,
                      unit: "clove",
                      meta: ["peeled"],
                      metaInformation: ["peeled"],
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
                    {
                      id: 1062047,
                      aisle: "Spices and Seasonings",
                      image: "garlic-salt.jpg",
                      consistency: "solid",
                      name: "garlic salt",
                      nameClean: "garlic salt",
                      original: "1 Tbsp garlic salt",
                      originalString: "1 Tbsp garlic salt",
                      originalName: "garlic salt",
                      amount: 1,
                      unit: "Tbsp",
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
                      id: 4053,
                      aisle: "Oil, Vinegar, Salad Dressing",
                      image: "olive-oil.jpg",
                      consistency: "liquid",
                      name: "olive oil",
                      nameClean: "olive oil",
                      original:
                        "1/2 cup olive oil (separated into 2 – 1/4 cups)",
                      originalString:
                        "1/2 cup olive oil (separated into 2 – 1/4 cups)",
                      originalName: "olive oil (separated into 2 – 1/4 cups)",
                      amount: 0.5,
                      unit: "cup",
                      meta: ["separated", "( into 2 -)"],
                      metaInformation: ["separated", "( into 2 -)"],
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
                      id: 1033,
                      aisle: "Cheese",
                      image: "parmesan.jpg",
                      consistency: "solid",
                      name: "parmesan cheese",
                      nameClean: "parmesan",
                      original: "1 Tbsp grated parmesan cheese",
                      originalString: "1 Tbsp grated parmesan cheese",
                      originalName: "grated parmesan cheese",
                      amount: 1,
                      unit: "Tbsp",
                      meta: ["grated"],
                      metaInformation: ["grated"],
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
                      id: 11477,
                      aisle: "Produce",
                      image: "zucchini.jpg",
                      consistency: "solid",
                      name: "zucchini",
                      nameClean: "zucchini",
                      original: "2 large zucchini, spiraled",
                      originalString: "2 large zucchini, spiraled",
                      originalName: "zucchini, spiraled",
                      amount: 2,
                      unit: "large",
                      meta: [],
                      metaInformation: [],
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
                  ],
                  id: 780001,
                  title: "Pesto Chicken Zoodles",
                  readyInMinutes: 45,
                  servings: 3,
                  sourceUrl: "http://www.pinkwhen.com/pesto-chicken-zoodles/",
                  image:
                    "https://spoonacular.com/recipeImages/780001-556x370.jpg",
                  imageType: "jpg",
                  summary:
                    'Need a <b>gluten free and primal main course</b>? Pesto Chicken Zoodles could be an amazing recipe to try. For <b>$2.5 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. One serving contains <b>524 calories</b>, <b>35g of protein</b>, and <b>41g of fat</b>. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. 22 people have made this recipe and would make it again. Head to the store and pick up cajun seasoning, chicken breasts seasoned, olive oil, and a few other things to make it today. To use up the olive oil you could follow this main course with the <a href="https://spoonacular.com/recipes/sauteed-banana-granola-and-yogurt-parfait-624619">Sauteed Banana, Granolan and Yogurt Parfait</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 76%</b>. This score is solid. Similar recipes include <a href="https://spoonacular.com/recipes/pesto-zoodles-with-chicken-757213">Pesto Zoodles with Chicken</a>, <a href="https://spoonacular.com/recipes/shrimp-and-pesto-zoodles-874131">Shrimp and Pesto Zoodles</a>, and <a href="https://spoonacular.com/recipes/low-fat-vegan-pesto-zoodles-with-broccoli-720890">Low Fat Vegan Pesto Zoodles with Broccoli</a>.',
                  cuisines: [],
                  dishTypes: ["lunch", "main course", "main dish", "dinner"],
                  diets: ["gluten free", "primal"],
                  occasions: [],
                  instructions:
                    "To get started, place 1/4 cup of olive oil into a medium saucepan and allow to heat on medium heat. Once warm, place zucchini in pan and then sprinkle with garlic salt and cajun seasoning. Toss with tongs to get all of the zucchini coated with oil and seasoning. Cover with a lid and steam for two to three minutes. Remove lid, toss zucchini noodles again and then cover for another 2 minutes. Remove from heat.In the mean time, place the basil, garlic, and grated parmesan cheese into a food processor. Slowly add the olive oil, and then set to the side.Add zucchini noodles, pesto, and chicken to a medium dish and toss until everything is fully coated. Serve immediately.This is seriously, SO GOOD!If you are looking for more healthy recipes like this Pesto Chicken Zoodles recipe, check out the Simple Fit Forty Section of this blog, or consider joining our secret Facebook group where we share all things healthy.If you are not making this TODAY, then make sure you pin this for later! Its a keeper.JOIN 500,000 SUBSCRIBERS!Join over 500,000 others who follow PinkWhen on Social Media, the PinkWhen blog, and email. Sign up to receive exclusive bonuses like this FREE Simple Fit Dinners Ebook.Don't wait! You won't want to miss a thing.Success! Now check your email to confirm your subscription and download your FREE ebook.There was an error submitting your subscription. Please try again.First NameEmail AddressSubscribePowered by ConvertKit",
                  analyzedInstructions: [
                    {
                      name: "",
                      steps: [
                        {
                          number: 1,
                          step: "To get started, place 1/4 cup of olive oil into a medium saucepan and allow to heat on medium heat. Once warm, place zucchini in pan and then sprinkle with garlic salt and cajun seasoning. Toss with tongs to get all of the zucchini coated with oil and seasoning. Cover with a lid and steam for two to three minutes.",
                          ingredients: [
                            {
                              id: 1032028,
                              name: "cajun seasoning",
                              localizedName: "cajun seasoning",
                              image: "chili-powder.jpg",
                            },
                            {
                              id: 1062047,
                              name: "garlic salt",
                              localizedName: "garlic salt",
                              image: "garlic-salt.jpg",
                            },
                            {
                              id: 4053,
                              name: "olive oil",
                              localizedName: "olive oil",
                              image: "olive-oil.jpg",
                            },
                            {
                              id: 1042027,
                              name: "seasoning",
                              localizedName: "seasoning",
                              image: "seasoning.png",
                            },
                            {
                              id: 11477,
                              name: "zucchini",
                              localizedName: "zucchini",
                              image: "zucchini.jpg",
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
                              id: 404669,
                              name: "sauce pan",
                              localizedName: "sauce pan",
                              image: "sauce-pan.jpg",
                            },
                            {
                              id: 404641,
                              name: "tongs",
                              localizedName: "tongs",
                              image: "tongs.jpg",
                            },
                            {
                              id: 404645,
                              name: "frying pan",
                              localizedName: "frying pan",
                              image: "pan.png",
                            },
                          ],
                          length: {
                            number: 2,
                            unit: "minutes",
                          },
                        },
                        {
                          number: 2,
                          step: "Remove lid, toss zucchini noodles again and then cover for another 2 minutes.",
                          ingredients: [
                            {
                              id: 10111477,
                              name: "zucchini noodles",
                              localizedName: "zucchini noodles",
                              image: "zoodles.jpg",
                            },
                          ],
                          equipment: [],
                          length: {
                            number: 2,
                            unit: "minutes",
                          },
                        },
                        {
                          number: 3,
                          step: "Remove from heat.In the mean time, place the basil, garlic, and grated parmesan cheese into a food processor. Slowly add the olive oil, and then set to the side.",
                          ingredients: [
                            {
                              id: 1032,
                              name: "grated parmesan cheese",
                              localizedName: "grated parmesan cheese",
                              image: "parmesan.jpg",
                            },
                            {
                              id: 4053,
                              name: "olive oil",
                              localizedName: "olive oil",
                              image: "olive-oil.jpg",
                            },
                            {
                              id: 11215,
                              name: "garlic",
                              localizedName: "garlic",
                              image: "garlic.png",
                            },
                            {
                              id: 2044,
                              name: "basil",
                              localizedName: "basil",
                              image: "basil.jpg",
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
                          step: "Add zucchini noodles, pesto, and chicken to a medium dish and toss until everything is fully coated.",
                          ingredients: [
                            {
                              id: 10111477,
                              name: "zucchini noodles",
                              localizedName: "zucchini noodles",
                              image: "zoodles.jpg",
                            },
                            {
                              id: 5006,
                              name: "whole chicken",
                              localizedName: "whole chicken",
                              image: "whole-chicken.jpg",
                            },
                            {
                              id: 93698,
                              name: "pesto",
                              localizedName: "pesto",
                              image: "basil-pesto.png",
                            },
                          ],
                          equipment: [],
                        },
                        {
                          number: 5,
                          step: "Serve immediately.This is seriously, SO GOOD!If you are looking for more healthy recipes like this Pesto Chicken Zoodles recipe, check out the Simple Fit Forty Section of this blog, or consider joining our secret Facebook group where we share all things healthy.If you are not making this TODAY, then make sure you pin this for later! Its a keeper.JOIN 500,000 SUBSCRIBERS!Join over 500,000 others who follow Pink",
                          ingredients: [
                            {
                              id: 5006,
                              name: "whole chicken",
                              localizedName: "whole chicken",
                              image: "whole-chicken.jpg",
                            },
                            {
                              id: 10111477,
                              name: "zucchini noodles",
                              localizedName: "zucchini noodles",
                              image: "zoodles.jpg",
                            },
                            {
                              id: 93698,
                              name: "pesto",
                              localizedName: "pesto",
                              image: "basil-pesto.png",
                            },
                          ],
                          equipment: [],
                        },
                        {
                          number: 6,
                          step: "When on Social Media, the Pink",
                          ingredients: [],
                          equipment: [],
                        },
                        {
                          number: 7,
                          step: "When blog, and email. Sign up to receive exclusive bonuses like this FREE Simple Fit Dinners Ebook.Don't wait! You won't want to miss a thing.Success! Now check your email to confirm your subscription and download your FREE ebook.There was an error submitting your subscription. Please try again.First Name",
                          ingredients: [],
                          equipment: [],
                        },
                        {
                          number: 8,
                          step: "Email",
                          ingredients: [],
                          equipment: [],
                        },
                        {
                          number: 9,
                          step: "Address",
                          ingredients: [],
                          equipment: [],
                        },
                        {
                          number: 10,
                          step: "Subscribe",
                          ingredients: [],
                          equipment: [],
                        },
                        {
                          number: 11,
                          step: "Powered by Convert",
                          ingredients: [],
                          equipment: [],
                        },
                        {
                          number: 12,
                          step: "Kit",
                          ingredients: [],
                          equipment: [],
                        },
                      ],
                    },
                  ],
                  originalId: null,
                  spoonacularSourceUrl:
                    "https://spoonacular.com/pesto-chicken-zoodles-780001",
                },
                {
                  vegetarian: true,
                  vegan: true,
                  glutenFree: true,
                  dairyFree: true,
                  veryHealthy: false,
                  cheap: false,
                  veryPopular: false,
                  sustainable: false,
                  weightWatcherSmartPoints: 6,
                  gaps: "no",
                  lowFodmap: false,
                  aggregateLikes: 103,
                  spoonacularScore: 61,
                  healthScore: 10,
                  creditsText:
                    "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
                  license: "CC BY 3.0",
                  sourceName: "Foodista",
                  pricePerServing: 132.51,
                  extendedIngredients: [
                    {
                      id: 11207,
                      aisle: "Produce",
                      image: "dandelion-greens.jpg",
                      consistency: "solid",
                      name: "dandelion greens",
                      nameClean: "dandelion greens",
                      original: "2 big handfuls of dandelion greens",
                      originalString: "2 big handfuls of dandelion greens",
                      originalName: "dandelion greens",
                      amount: 2,
                      unit: "handfuls",
                      meta: [],
                      metaInformation: [],
                      measures: {
                        us: {
                          amount: 2,
                          unitShort: "handfuls",
                          unitLong: "handfuls",
                        },
                        metric: {
                          amount: 2,
                          unitShort: "handfuls",
                          unitLong: "handfuls",
                        },
                      },
                    },
                    {
                      id: 2044,
                      aisle: "Produce;Spices and Seasonings",
                      image: "basil.jpg",
                      consistency: "solid",
                      name: "fresh basil leaves",
                      nameClean: "fresh basil",
                      original: "2 handfuls of fresh basil leaves",
                      originalString: "2 handfuls of fresh basil leaves",
                      originalName: "fresh basil leaves",
                      amount: 2,
                      unit: "handfuls",
                      meta: ["fresh"],
                      metaInformation: ["fresh"],
                      measures: {
                        us: {
                          amount: 2,
                          unitShort: "handfuls",
                          unitLong: "handfuls",
                        },
                        metric: {
                          amount: 2,
                          unitShort: "handfuls",
                          unitLong: "handfuls",
                        },
                      },
                    },
                    {
                      id: 10011457,
                      aisle: "Produce",
                      image: "spinach.jpg",
                      consistency: "solid",
                      name: "spinach",
                      nameClean: "spinach",
                      original: "1 handful of spinach (optional)",
                      originalString: "1 handful of spinach (optional)",
                      originalName: "spinach (optional)",
                      amount: 1,
                      unit: "handful",
                      meta: [],
                      metaInformation: [],
                      measures: {
                        us: {
                          amount: 1,
                          unitShort: "handful",
                          unitLong: "handful",
                        },
                        metric: {
                          amount: 1,
                          unitShort: "handful",
                          unitLong: "handful",
                        },
                      },
                    },
                    {
                      id: 11416,
                      aisle: "Produce",
                      image: "squash-blossoms.jpg",
                      consistency: "solid",
                      name: "squash flowers",
                      nameClean: "squash blossoms",
                      original: "The petals from 5 dandelion flowers",
                      originalString: "The petals from 5 dandelion flowers",
                      originalName: "The petals from dandelion flowers",
                      amount: 5,
                      unit: "",
                      meta: [],
                      metaInformation: [],
                      measures: {
                        us: {
                          amount: 5,
                          unitShort: "",
                          unitLong: "",
                        },
                        metric: {
                          amount: 5,
                          unitShort: "",
                          unitLong: "",
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
                      original: "1 large clove of garlic",
                      originalString: "1 large clove of garlic",
                      originalName: "garlic",
                      amount: 1,
                      unit: "large clove",
                      meta: [],
                      metaInformation: [],
                      measures: {
                        us: {
                          amount: 1,
                          unitShort: "large clove",
                          unitLong: "large clove",
                        },
                        metric: {
                          amount: 1,
                          unitShort: "large clove",
                          unitLong: "large clove",
                        },
                      },
                    },
                    {
                      id: 1012047,
                      aisle: "Spices and Seasonings",
                      image: "salt.jpg",
                      consistency: "solid",
                      name: "sea salt",
                      nameClean: "coarse sea salt",
                      original: "1/2 tsp sea salt",
                      originalString: "1/2 tsp sea salt",
                      originalName: "sea salt",
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
                      id: 12147,
                      aisle: "Produce;Baking",
                      image: "pine-nuts.png",
                      consistency: "solid",
                      name: "pine nuts",
                      nameClean: "pine nuts",
                      original: "1 handful of pine nuts",
                      originalString: "1 handful of pine nuts",
                      originalName: "pine nuts",
                      amount: 1,
                      unit: "handful",
                      meta: [],
                      metaInformation: [],
                      measures: {
                        us: {
                          amount: 1,
                          unitShort: "handful",
                          unitLong: "handful",
                        },
                        metric: {
                          amount: 1,
                          unitShort: "handful",
                          unitLong: "handful",
                        },
                      },
                    },
                    {
                      id: 12131,
                      aisle: "Nuts;Savory Snacks;Baking",
                      image: "macadamia-nuts.png",
                      consistency: "solid",
                      name: "macadamia nuts",
                      nameClean: "macadamia nuts",
                      original:
                        "1 handful of hemp, sunflower seeds or macadamia nuts",
                      originalString:
                        "1 handful of hemp, sunflower seeds or macadamia nuts",
                      originalName: "hemp, sunflower seeds or macadamia nuts",
                      amount: 1,
                      unit: "handful",
                      meta: [],
                      metaInformation: [],
                      measures: {
                        us: {
                          amount: 1,
                          unitShort: "handful",
                          unitLong: "handful",
                        },
                        metric: {
                          amount: 1,
                          unitShort: "handful",
                          unitLong: "handful",
                        },
                      },
                    },
                    {
                      id: 1034053,
                      aisle: "Oil, Vinegar, Salad Dressing",
                      image: "olive-oil.jpg",
                      consistency: "liquid",
                      name: "extra-virgin olive oil",
                      nameClean: "extra virgin olive oil",
                      original:
                        "Enough extra virgin olive oil to bind the sauce together, around 4-6 tbsp",
                      originalString:
                        "Enough extra virgin olive oil to bind the sauce together, around 4-6 tbsp",
                      originalName:
                        "Enough extra virgin olive oil to bind the sauce together, around",
                      amount: 4,
                      unit: "tbsp",
                      meta: [],
                      metaInformation: [],
                      measures: {
                        us: {
                          amount: 4,
                          unitShort: "Tbsps",
                          unitLong: "Tbsps",
                        },
                        metric: {
                          amount: 4,
                          unitShort: "Tbsps",
                          unitLong: "Tbsps",
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
                      original: "Juice of half a lemon",
                      originalString: "Juice of half a lemon",
                      originalName: "Juice of half a lemon",
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
                      id: 93690,
                      aisle: "Spices and Seasonings;Health Foods",
                      image: "nutritional-yeast.png",
                      consistency: "solid",
                      name: "nutritional yeast flakes",
                      nameClean: "nutritional yeast flakes",
                      original: "1 tbsp nutritional yeast flakes (optional)",
                      originalString:
                        "1 tbsp nutritional yeast flakes (optional)",
                      originalName: "nutritional yeast flakes (optional)",
                      amount: 1,
                      unit: "tbsp",
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
                  ],
                  id: 641227,
                  title: "Dandelion pesto",
                  readyInMinutes: 45,
                  servings: 4,
                  sourceUrl:
                    "https://www.foodista.com/recipe/H3PMVLPC/dandelion-pesto",
                  image:
                    "https://spoonacular.com/recipeImages/641227-556x370.jpg",
                  imageType: "jpg",
                  summary:
                    'Dandelion pesto is a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> condiment. This recipe serves 4 and costs $1.33 per serving. One portion of this dish contains approximately <b>2g of protein</b>, <b>20g of fat</b>, and a total of <b>192 calories</b>. If you have dandelion greens, pine nuts, macadamia nuts, and a few other ingredients on hand, you can make it. 103 people have made this recipe and would make it again. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately <b>approximately 45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 60%</b>, which is solid. If you like this recipe, you might also like recipes such as <a href="https://spoonacular.com/recipes/dandelion-pesto-14296">Dandelion Pesto</a>, <a href="https://spoonacular.com/recipes/dandelion-pumpkin-seed-pesto-14309">Dandelion Pumpkin Seed Pesto</a>, and <a href="https://spoonacular.com/recipes/almond-herb-tarts-with-dandelion-pesto-truffled-fontina-figs-9087">Almond Herb Tarts With Dandelion Pesto, Truffled Fontina & Figs</a>.',
                  cuisines: [],
                  dishTypes: ["condiment", "dip", "sauce", "spread"],
                  diets: [
                    "gluten free",
                    "dairy free",
                    "paleolithic",
                    "lacto ovo vegetarian",
                    "primal",
                    "vegan",
                  ],
                  occasions: [],
                  instructions:
                    "Wash the dandelion well in a solution of water and raw cider vinegar, using a couple of tablespoons of vinegar to about a litre of water. Wash and spin dry all the greens. Pop all the ingredients into a pestle and mortar or food processor and pound/blitz till nearly smooth - I like to leave a little texture to my pesto but play around with it. And that's it! Pretty simple and very scrummy.",
                  analyzedInstructions: [
                    {
                      name: "",
                      steps: [
                        {
                          number: 1,
                          step: "Wash the dandelion well in a solution of water and raw cider vinegar, using a couple of tablespoons of vinegar to about a litre of water. Wash and spin dry all the greens. Pop all the ingredients into a pestle and mortar or food processor and pound/blitz till nearly smooth - I like to leave a little texture to my pesto but play around with it. And that's it! Pretty simple and very scrummy.",
                          ingredients: [
                            {
                              id: 2048,
                              name: "apple cider vinegar",
                              localizedName: "apple cider vinegar",
                              image: "apple-cider-vinegar.jpg",
                            },
                            {
                              id: 2053,
                              name: "vinegar",
                              localizedName: "vinegar",
                              image: "vinegar-(white).jpg",
                            },
                            {
                              id: 21052,
                              name: "greens",
                              localizedName: "greens",
                              image: "mixed-greens-or-mesclun.jpg",
                            },
                            {
                              id: 93698,
                              name: "pesto",
                              localizedName: "pesto",
                              image: "basil-pesto.png",
                            },
                            {
                              id: 14412,
                              name: "water",
                              localizedName: "water",
                              image: "water.png",
                            },
                            {
                              id: 0,
                              name: "pop",
                              localizedName: "soft drink",
                              image: "",
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
                              id: 404751,
                              name: "mortar and pestle",
                              localizedName: "mortar and pestle",
                              image: "mortar-and-pestle.jpg",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                  originalId: null,
                  spoonacularSourceUrl:
                    "https://spoonacular.com/dandelion-pesto-641227",
                },
                ,
              ]);
              
              setSelectedS([])
              }} type="button">
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
