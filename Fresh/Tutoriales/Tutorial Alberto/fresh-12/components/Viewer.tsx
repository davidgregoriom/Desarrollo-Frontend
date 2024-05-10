import { Signal } from "@preact/signals";
import { FunctionComponent } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function Viewer(number: Signal<number>):FunctionComponent{
    console.log(number.value)
    if(IS_BROWSER) return <div>{number.value}</div>
    else return null;
}
