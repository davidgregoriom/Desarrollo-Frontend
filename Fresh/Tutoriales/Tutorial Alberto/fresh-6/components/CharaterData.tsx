import { FunctionComponent } from "preact";
import { CharacterProps } from "../types.tsx";

export default function CharacterData(props:FunctionComponent<CharacterProps>){
    const { name, image , status} = props;
    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <pre>
                <strong>Estado:</strong>
                {status}
            </pre>
        </div>
    )
}
