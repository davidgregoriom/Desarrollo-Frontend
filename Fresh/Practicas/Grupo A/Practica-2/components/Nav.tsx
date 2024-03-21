import { FunctionComponent} from "preact";
import { NavProps } from "../types.ts";


export default function Nav(selected:NavProps):FunctionComponent<NavProps>{

    return (
        <div class="nav">
            Navegador
        </div>
    )

}
