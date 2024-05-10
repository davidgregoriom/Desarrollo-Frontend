import { Signal } from "@preact/signals";
import { FunctionComponent } from "preact";

export default function Button(number: Signal<number>):FunctionComponent{
    return (
        <button onclick={(e)=> number.value= number.value+1}>Incrementar</button>
    )

}

