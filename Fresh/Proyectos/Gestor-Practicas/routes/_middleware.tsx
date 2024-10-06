
import { FreshContext} from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";
import jwt from "jsonwebtoken";


type State ={
    id:number;
    full_name:string;
    email:string;
    administrator:boolean;
}

export async function handler(req:Request,ctx:FreshContext<State>){

    if(ctx.destination !== "route"){
        const response = await ctx.next();
        return response;
    }

    if(ctx.route==="/login" ||ctx.route === "/register"){
        const response = await ctx.next();
        return response;
    }

    const { auth} = getCookies(req.headers);
    if(!auth){
        return new Response ("",{
            status: 307,
            headers:{
                location:"/login"
            }
        })
    }
    const payload = jwt.verify(auth,Deno.env.get("JWT_SECRET"));
    if(!payload){
        return new Response ("",{
            status: 307,
            headers:{
                location:"/login"
            }
        })
    }
    ctx.state.id=payload.id;
    ctx.state.full_name=payload.full_name;
    ctx.state.email=payload.email;
    ctx.state.administrator=payload.administrator;

    const response = await ctx.next();
    return response;
}

