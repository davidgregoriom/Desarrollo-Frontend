//https://api-ninjas.com/api/logo
import {Handlers,FreshContext,PageProps } from "$fresh/server.ts";
//import {Logo} from "../../types.ts";
import Logo from "../../islands/Logo.tsx"
/*
type Data={
    logos:Logo[];
}


export const hadler:Handlers<Data>={
    GET:async(req:Request,ctx:FreshContext<Data>)=>{
        const url = new URL(req.url);

    }
}
*/
export default function Page(){
    return <Logo/>
}
