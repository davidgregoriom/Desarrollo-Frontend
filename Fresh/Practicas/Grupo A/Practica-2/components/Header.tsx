import { FunctionComponent } from "preact";
import { asset } from "$fresh/runtime.ts";

export default function Header():FunctionComponent{
    return (
        <header class="header">
            <img src={asset("/../static/img/linkedin.png")}/>
            <input class="input" type="text" name="name" placeholder="Buscar por cargo, puesto, ..."/>
            <input class="input" type="text" name="city" placeholder="Ciudad, pueblo, ..." />
            <button class="button-white" type="submit">Buscar</button>
            <img src={asset("/../static/img/linkedin.png")}/>
            <img src={asset("/../static/img/linkedin.png")}/>
            <img src={asset("/../static/img/linkedin.png")}/>
            <img src={asset("/../static/img/linkedin.png")}/>
            <img src={asset("/../static/img/linkedin.png")}/>
            <img src={asset("/../static/img/linkedin.png")}/>
            <img src={asset("/../static/img/linkedin.png")}/>
            <a href="https://www.linkedin.com/premium/survey/?destRedirectURL=https%3A%2F%2Fwww.linkedin.com%2Fjobs%2Fcollections%2Frecommended%2F%3FcurrentJobId%3D3842836572%26discover%3Drecommended%26discoveryOrigin%3DJOBS_HOME_JYMBII%26start%3D168&referenceId=4HMvCrVSS82hdGDFV%2FPo0w%3D%3D&upsellOrderOrigin=premium_nav_upsell_text&utype=job">Prueba Premium</a>
        </header>
    );
}
