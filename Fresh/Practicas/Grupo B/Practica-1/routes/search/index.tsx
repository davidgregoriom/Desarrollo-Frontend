import axios from "npm:axios";
import { Handlers,PageProps,FreshContext } from "$fresh/server.ts";
import { Response } from "../../types.ts";


// URL: https://swapi.dev/api/people/
export const handler: Handlers ={
    GET: async (req:Request,ctx:FreshContext<unknown,Response>) =>{
        try{
            debugger;
            const url = new URL(req.url);
            const name = url.searchParams.get("name") || undefined;
            const response = await axios.get<Response>(`https://swapi.dev/api/people/?name=${name}`);
            return ctx.render({name})
            return response.data];
        }catch(err){
            console.log(err);
            return ctx.render({name:undefined})
        }
    }
}

export default function Page(props:PageProps<Response>) {
    return (
        <div>
            <form method="get">
                <input type="text" name="name" value={props.results.name||""}></input>
                <button type="submit">Enviar</button>
            </form>
            {props.data.name && <h1>Has buscado: {props.data.name}</h1>}
        </div>
    )
}
