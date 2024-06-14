import { FreshContext, Handlers, PageProps, RouteConfig } from "$fresh/server.ts";
import { setCookie} from "$std/http/cookie.ts";
import jwt from "jsonwebtoken";
import Login from "../components/Login.tsx";
import { User } from "../types.ts";

export const config: RouteConfig = {
  skipInheritedLayouts: true, // Skip already inherited layouts
};

type Data={
    message?:string;
}

// Implementar: Send verification email using smtp module
// Implementar logo Fresh https://deno.land/x/fresh@1.6.8

export const handler:Handlers ={
    POST:async(req:Request,ctx:FreshContext<Data>) =>{
        const url= new URL(req.url);
        const formData = await req.formData();
        const email= formData.get("email")?.toString() || "";
        const password = formData.get("password")?.toString() || "";

        const JWT_SECRET = Deno.env.get("JWT_SECRET");
        if(!JWT_SECRET){
            throw new Error("JWT_SECRET is not set");
        }
        const response = await fetch( `${Deno.env.get("API_URL")}/postLogin`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email,password})
        });
        if(response.status === 404){
            return ctx.render({
                message:"Invalid email or password"
            });
        }else if(response.status !== 200){
            return ctx.render({
                message:"An error occurred"
            });
        }else{
            const data: Omit<User,"password"> = await response.json();
            const token = jwt.sign(
                {
                    id:data.id,
                    full_name:data.full_name,
                    email:data.email,
                    administrator:data.administrator
                },
                Deno.env.get("JWT_SECRET"),
                {
                    expiresIn:"1d"
                }
            );
            const headers= new Headers();
            setCookie(headers,{
                name:"auth",
                value:token,
                sameSite:"Lax",
                domain:url.hostname,
                path:"/",
                secure:true
            });

            headers.set("location","/dashboard");
            return new Response("",{
                status:307,
                headers
            });
        }
    }
}

export default function LoginRoute(props:PageProps<Data>){
    return <Login message={props.data?.message}/>
}
