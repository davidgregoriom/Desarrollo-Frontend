import { FunctionComponent } from "preact";

export default function RecipeComponent():FunctionComponent{
    return(
        <div>
            <form action="/recipe" method="post">
                <h1>Name Recipe</h1>
                <input type="text" name="name" placeholder="Name" />
                <button type="submit">Look forward</button>
            </form>

        </div>
    )
}

