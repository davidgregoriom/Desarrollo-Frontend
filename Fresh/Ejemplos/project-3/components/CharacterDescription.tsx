import { FunctionComponent} from "preact";
import { Character} from "../types.ts"

export default async function Character(Props:FunctionComponent<Character>){
    const result = Props;
    return (
        <div>
            <h2>{result.name}</h2>
            <img src={result.image}></img>
            <p>
                <strong>Estado:</strong>{result.status}
            </p>
            <p>
                <strong>Especie:</strong>{result.species}
            </p>
            <p>
                <strong>Tipo:</strong>{result.type}
            </p>
            <p>
                <strong>Genero:</strong>{result.gender}
            </p>
        </div>
    )
}
