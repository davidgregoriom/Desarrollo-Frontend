import { FunctionComponent } from "preact";
import {Joke} from "../types.ts"

type JokesListProps ={
    jokes: Joke[];
}

export default function JokesList(jokes: JokesListProps): FunctionComponent<JokesListProps> {
    console.log(jokes);
    return (
        <div>
            <h1>Jokes list</h1>
            <ul class="jokes">
                {jokes.jokes.map((joke) => (
                    <li key={joke.joke}>{joke.joke}</li>
                ))}
            </ul>
        </div>
    );
}
