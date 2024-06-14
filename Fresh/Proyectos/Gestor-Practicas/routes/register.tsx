import { User } from "../types.ts";
import { RouteConfig,Handlers,FreshContext} from "$fresh/server.ts";
import jwt from "jsonwebtoken";
import { setCookie} from "$std/http/cookie.ts";
import Register from "../components/Register.tsx";


export const config: RouteConfig = {
    skipInheritedLayouts: true, // Skip already inherited layouts
};

type Data={
    message?:string;
}



export const handler:Handlers ={
    POST: async(req:Request,ctx:FreshContext<Data>)=>{
        const url= new URL(req.url);
        const formData = await req.formData();
        const email= formData.get("email")?.toString() || "";
        const password = formData.get("password")?.toString() || "";
        const full_name = formData.get("full_name")?.toString() || "";

        const API_URL = Deno.env.get("API_URL");
        if(!API_URL){
            throw new Error("API_URL is not set");
        }
        const response = await fetch( `${Deno.env.get("API_URL")}/postRegister`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email,password,full_name})
        });
        const JWT_SECRET = Deno.env.get("JWT_SECRET");
        if (!JWT_SECRET) {
            throw new Error("JWT_SECRET is not set in the environment");
        }
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
    return <Register message={props.data?.message}/>
}
