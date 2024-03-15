import { FuntionComponent} from "preact";
import { NavProps } from "../types.ts";


export default function Nav(selected:NavProps):FuntionComponent<NavProps>{

    return (
        <nav class="nav">
            <a href="/linkedin" class={selected === "LinkedIn" ? "selected" : ""}>
                LinkedIn
            </a>
        </nav>

    )

}

