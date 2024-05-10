import { Signal } from "@preact/signals";
import { FunctionComponent } from "preact";
import { Quote } from "../types.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";

const Quotess: FunctionComponent<{ Quotes: Quote[] }> = ({ Quotes }) => {
    //console.log(Object.keys(Quotes));
    if(!Quotes||!Quotes.length){
        return <div class="details">No se ha encontrado Quotes</div>
    }else{
        return(
            Quotes.map((e:Quote)=>(
                <li class="details">
                    <span>{e.id}</span>
                    <span>{e.quote}</span>
                </li>
        ))
    )
    }

};

export default Quotess;
