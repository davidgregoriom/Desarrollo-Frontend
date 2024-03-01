import { FreshContext } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import Nav from "../components/Nav.tsx";
import Header from "../components/Header.tsx"


export default async function(req:Request,ctx:FreshContext){
    const Component=ctx.Component;
    const route=ctx.route;
    const page = route.split("/").pop();
    const selected=page==""? "List":"Add";
    return(
        <>
            <Header/>
            <Nav selected={selected}/>
            <Component/>
            <Footer/>
        </>
    )

}
