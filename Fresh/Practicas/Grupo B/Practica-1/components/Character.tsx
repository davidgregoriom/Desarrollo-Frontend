import { FunctionComponent} from "preact";
import { Character} from "../types.ts"

export default async function Character(Props:FunctionComponent<Character[]>){

    return (
        <div>
            <h2>{name}</h2>
            <img src={image}></img>
            <p>
                <strong>Estado:</strong>{status}
            </p>
        </div>
    )
}
