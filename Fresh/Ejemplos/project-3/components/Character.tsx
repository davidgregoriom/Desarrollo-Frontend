import { FunctionComponent} from "preact";
import { CharacterProps} from "../types.ts"

export default async function Character(Props:FunctionComponent<CharacterProps>){
    const {name,image,status} = Props;
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
