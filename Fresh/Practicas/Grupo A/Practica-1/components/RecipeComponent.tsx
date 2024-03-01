import { FunctionComponent } from "preact";
import { RecipeAfter } from "../types.ts";

export default function RecipeComponent(recipe:RecipeAfter):FunctionComponent<RecipeAfter>{
    return(
        <div>
            <form action="/recipe" method="post">
                <h1>Name Recipe</h1>
                <input type="text" name="name" placeholder="Name" />
                <button type="submit">Look forward</button>
            </form>

            <ul>
                <h1>Recipe:</h1>
                <li>{recipe.title}</li>
                <ul>{recipe.ingredients.map((ingredients)=>{
                    <li>{ingredients}</li>
                })}</ul>
                <li>{recipe.servings}</li>
                <ul>{recipe.instructions.map((instruction)=>{
                    <li>{instruction}</li>
                })}</ul>
            </ul>
        </div>
    )
}

