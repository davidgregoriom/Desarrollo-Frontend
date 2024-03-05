import { RecipeBefore,RecipeAfter } from "../types.ts";

type Data={
    Recipe: Array<RecipeBefore>
}
type DataAfter={
    Recipe: Array<RecipeAfter>
}



export default function convert(prop: Data):DataAfter{
    try{
        const object:Data = prop || {Recipe: []};
        //console.log(object);
        if(object && object.Recipe){
            const new_object = object.Recipe.map((recipe)=>{
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
        }else{
            return { Recipe: [] };
        }
    }catch(e){
        console.log(e);
        return { Recipe: [] };
    }
}

