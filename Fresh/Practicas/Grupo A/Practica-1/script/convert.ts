import { RecipeBefore,RecipeAfter } from "../types.ts";

type Data={
    Recipe: Array<RecipeBefore>
}
type DataAfter={
    Recipe: Array<RecipeAfter>
}



export default function convert(prop: Data|undefined):DataAfter{

    const object = prop?.Recipe ?? [];
    const new_object= object.map((recipe)=>{
        const {title, ingredients, servings, instructions} = recipe;
        const recipeAfter: RecipeAfter = {
            title: title,
            ingredients: ingredients.split("|",ingredients.length),
            servings: servings,
            instructions: instructions.split(".",instructions.length)
        }
       return recipeAfter;
    });
    return { Recipe: new_object };
}

