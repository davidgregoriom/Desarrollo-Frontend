import { FreshContext } from "$fresh/server.ts";
import Nav from "../components/Nav.tsx";
import Header from "../components/Header.tsx";

export default async function Layout(_req:Request,ctx:FreshContext){
    const Component=ctx.Component;
    return(
        <div class="style" href="style.css">
            <Header/>
            {/*<Nav/>*/}
            <Component/>
        </div>
    )

}
