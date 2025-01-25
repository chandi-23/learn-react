import { RecipeProps } from "@/types/recipe";

export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

/**
 * The `RecipeItems` component renders a list of ingredients.
 * It accepts a set of ingredients, converts it to an array, and maps over it to 
 * create `<li>` elements for each ingredient.
 * 
 * @param ingredients - A Set of strings representing the recipe ingredients.
 */
function RecipeItems({ ingredients }: { ingredients: Set<string> }) {
  return (
    <div>
      <ul>
        {Array.from(ingredients).map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

/**
 * The `RecipeSection` component renders the details of a single recipe.
 * It displays the recipe name as a heading and uses the `RecipeItems` component to 
 * list its ingredients.
 * 
 * @param recipe - An object containing details about the recipe, 
 * including its name and ingredients.
 */
function RecipeSection({recipe}:RecipeProps){
  return (
    <div>
      <h2>{recipe.name}</h2>
      <RecipeItems ingredients={recipe.ingredients}/>
    </div>
  );
}

/**
 * The `RecipeList` component is the main container for displaying a list of recipes.
 * It iterates over the `recipes` array and renders a `RecipeSection` for each recipe.
 * This component serves as the entry point for displaying all recipes in a structured format.
 */
export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      <ul>
      {recipes.map((recipe) =>(
        <RecipeSection key = {recipe.id} recipe={recipe}/>
      ))}
      </ul>
    </div>
  );
}