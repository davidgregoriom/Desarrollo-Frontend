import jwt from "jsonwebtoken";
import { FreshContext,Haldelrs,RouteConfig } from "$fresh/server.ts";
import { setCookie } from "$std/http/cookie.ts";
import Login from "../components/Login.tsx";


const config:RouteConfig={
    skipInheritedLayout:true
}
type Data ={
    message:string;
}



export const handler:Haldelrs ={
    POST:async(req:Request,ctx:FreshContext<unknown,Data>)=>{
        const url= new URL(req.url);
        const form = await req.formData();
        const username = form.get("username")?.toString()||"";
        const password = form.get("password")?.toString()||"";
        const JWT_SECRET = Deno.env.get("JWT_SECRET");
        if(!JWT_SECRET){
            return new Error("JWT_SECRET not found");
        }
        const response = await



        if(username==="admin"&&password==="admin"){
            const token = jwt.sign({username},Deno.env.get("JWT_SECRET"),{
                expiresIn:"24h"
            });
            const headers = new Headers();
            setCookie( headers,{
                name:"auth",
                value:token,
                sameSize:"Lax",
                domain:url.hostname,
                path:"/",
                secure:true
            });
            headers.set("location","/");
            return new Response(null,{status:302,headers});
        }else{
            return ctx.render();
        }
    }
}


export default function Index(){
    return <Login/>;
}
