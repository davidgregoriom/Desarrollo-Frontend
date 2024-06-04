import { RouteConfig,Handlers,FreshContext,PageProps } from "$fresh/server.ts";
import jwt from "jsonwebtoken";
import { setCookie } from "$std/http/cookie.ts";
import UserModel from "../db/Resgiter.ts";
import { register } from "../types.ts";
import Register from "../components/Register.tsx";

const config:RouteConfig={
    skipInheritedLayout:true,
}


export const handler:Handlers ={
    POST: async(req:Request,ctx:FreshContext)=>{
        try{
            const url = new URL(req.url);
            const form = await req.formData();
            const email = form.get("email")?.toString() || "";
            const name = form.get("name")?.toString() || "";
            const password = form.get("password")?.toString() || "";
            const validation_response = await UserModel.findOne({email}).exec();
            if(validation_response){
                return ctx.render({
                    message:"User already exists"
                })
            }
            const response = await UserModel.create({name,email,password});
            if(!response){
                return ctx.render({
                    message:"Error"
                })
            }else{
                const JWT_SECRET = Deno.env.get("JWT_SECRET");
                if(!JWT_SECRET){
                    return new Error("JWT_SECRET is not defined");
                }
                const token = jwt.sign({
                    email,
                    name,
                },JWT_SECRET,{
                    expiresIn:"24h"
                });

                const headers = new Headers();
                setCookie(headers,{
                    name:"auth",
                    value:token,
                    sameSite:"Lax",
                    domain:url.hostname,
                    path:"/",
                    secure:true,
                });
                headers.set("Location","/");
                return new Response(null,{
                    status:302,
                    headers,
                });
            }
        }catch(e){
            console.log(e);
            throw new Error(e);
        }
    }
}

export default function Page(){
    return <Register />
}
