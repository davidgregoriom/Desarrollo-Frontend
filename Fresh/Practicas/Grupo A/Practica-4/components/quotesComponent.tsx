import { Signal } from "@preact/signals";
import { FunctionComponent } from "preact";
import { Quote } from "../types.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";

const Quotes: FunctionComponent<{ Quotes: Signal<Quote[]> }> = ({ Quotes }) => {
    if (IS_BROWSER){
        return(
                Quotes.map((e:Quote)=>(
                    <li>
                        <span>{e.id}</span>
                        <span>{e.quote}</span>
                    </li>
            ))
        )
    }else return <div>No se ha encontrado Quotes</div>
};

export default Quotes;
