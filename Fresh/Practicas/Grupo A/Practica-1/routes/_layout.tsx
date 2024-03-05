import { FreshContext } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import Nav from "../components/Nav.tsx";
import Header from "../components/Header.tsx";

export default async function Layout(_req:Request,ctx:FreshContext){
    const Component=ctx.Component;
    const route=ctx.route;
    const page = route.split("/").pop();
    const selected=page==""? "List":"Home";
    return(
        <div class="style" href="style.css">
            <Header/>
            <Nav selected={selected}/>
            <Component/>
            <Footer/>
        </div>
    )

}
