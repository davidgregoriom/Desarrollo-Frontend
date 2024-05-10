import { useSignal } from "@preact/signals";
import Button from "../components/Button.tsx";
import Viewer from "../components/Viewer.tsx";
import { FunctionComponent } from "preact";

export default function MagicNumber(number: number):FunctionComponent {
    const num = useSignal<number>(number);
    console.log(num.value)
    return (
        <>
        <Button num/>
        <Viewer num/>
        </>
    )


}
