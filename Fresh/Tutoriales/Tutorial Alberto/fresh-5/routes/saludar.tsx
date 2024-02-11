import { Handlers,PageProps,FreshContext } from "$fresh/server.ts";
import { Data } from "../types.tsx";

export const handler: Handlers ={
    GET: (req:Request,ctx:FreshContext<unknown,Data>) =>{
        try{
            debugger;
            const url = new URL(req.url);
            const name = url.searchParams.get("name") || undefined;
            return ctx.render({name})
        }catch(err){
            console.log(err);
            return ctx.render({name:undefined})
        }
    }
}

export default function Page(props:PageProps<Data>) {
    return (
        <div>
            <form method="get">
                <input type="text" name="name" value={props.data.name||""}></input>
                <button type="submit">Enviar</button>
            </form>
            {props.data.name && <h1>Hola {props.data.name}</h1>}
        </div>
    )
}
