import { Logo } from "../types.ts";
import { Signal } from "@preact/signals";


export default function LogoList(logos: Signal<Logo[]>){
    if (logos.value === undefined) {
        return <p>No logos</p>;
    }else{
        return (
            <div>
                {
                    logos.value.map((logo)=>(
                        <li key={logo.name}>
                            <h3>{prop.logos.name}</h3>
                            <p>{prop.logos.ticker}</p>
                            <img src={prop.logos.image} alt={prop.logos.name}/>
                        </li>
                    ))}
            </div>
        );
    }
}
