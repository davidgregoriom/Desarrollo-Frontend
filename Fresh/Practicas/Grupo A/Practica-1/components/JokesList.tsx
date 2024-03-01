import { FunctionComponent } from "preact";
import {Joke} from "../types.ts"

export default function JokesList(joke:Joke[]):FunctionComponent<Joke>{
    return(
        <div>
            <h1>Jokes list</h1>
            <ul>
                {joke.map((joke) => (
                <li key={joke.joke}>
                    <p>{joke.joke}</p>
                </li>
                ))}
            </ul>
        </div>
    )
}
