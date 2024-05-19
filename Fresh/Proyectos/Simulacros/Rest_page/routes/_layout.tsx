import { FreshContext} from "$fresh/server.ts";

export default async function Layout(req:Request, ctx:FreshContext){


    return (
        <div >
            <ctx.Component/>
        </div>
    )
}
