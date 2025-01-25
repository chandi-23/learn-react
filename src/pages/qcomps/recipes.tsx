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

function RecipeSection({recipe}:RecipeProps){
  return (
    <div>
      <h2>{recipe.name}</h2>
      <RecipeItems ingredients={recipe.ingredients}/>
    </div>
  );
}

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