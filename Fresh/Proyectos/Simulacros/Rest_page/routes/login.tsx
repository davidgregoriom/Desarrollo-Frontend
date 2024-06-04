import { RouteConfig, Handlers, FreshContext,PageProps } from "$fresh/server.ts";
import { register } from "../types.ts";
import jwt from "jsonwebtoken";
import { setCookie } from "$std/http/cookie.ts";
import Login from "../components/Login.tsx";
import UserModel from "../db/Resgiter.ts";


const config:RouteConfig ={
    skipInheritedLayouts:true  //Para que no se muestre el layout en esta ruta
}


type Data ={
    message:string;
}


export const handler:Handlers ={
    POST: async(req:Request, ctx:FreshContext<Data>) =>{
        try{
            const url = new URL(req.url);
            const form= await req.formData();

            const email = form.get("email");
            const password = form.get("password");

            const JWT_SECRET = Deno.env.get("JWT_SECRET");
            if(!JWT_SECRET){
                return new Error("JWT_SECRET is not defined");
            }

            const response  = await UserModel.findOne({email,password}).exec();

            if(!response){
                return ctx.render({
                    message:"Incorrect"
                })
            }
            if(response){
                const token = jwt.sign(
                    {
                        email:response.email,
                        name:response.name,
                    },
                    Deno.env.get("JWT_SECRET"),
                    {
                        expiresIn:"24h"
                    }
                )
                const headers = new Headers();

                setCookie (headers,{
                    name:"auth",
                    value:token,
                    sameSite:"Lax",
                    domain:url.hostname,
                    path:"/",
                    secure:true
                });

                headers.set("location","/");
                return new Response(null,{status:303,headers});

            }else{
                return ctx.render();
            }


        }catch(e){
            return new Error("Internal Server Error");
            console.log(e);
        }
    }
}

export default function Page(props:PageProps<Data>){
    return <Login message={props.message}/>
}
