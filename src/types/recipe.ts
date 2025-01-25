export interface Recipe{
    id: string|number,
    name: string,
    ingredients: Set<string>
}

export interface RecipeProps{
    recipe: Recipe
}