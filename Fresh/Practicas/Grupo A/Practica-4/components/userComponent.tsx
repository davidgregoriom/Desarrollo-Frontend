import { Signal } from "@preact/signals";
import { FunctionComponent } from "preact";
import { User } from "../types.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";

const Userss: FunctionComponent<{ Users }> = ({ Users }) => {
    //console.log(Object.keys(Users));
    if(!Users||Users.length==0){
        return <div class="details">No se ha encontrado Users</div>
    }else{
        return(
            Users.map((e:User)=>(
                <li class="details">
                    <div>{e.id}</div>
                    <div>{e.name}</div>
                    <div>{e.username}</div>
                    <div>{e.created_at}</div>
                </li>
            ))
        )
    }


};

export default Userss;
