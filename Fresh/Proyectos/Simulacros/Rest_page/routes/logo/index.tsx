//https://api-ninjas.com/api/logo
import {Handlers,FreshContext } from "$fresh/server.ts";
import {Logo} from "../types.ts";

type Data={
    logos:Logo[];
}


export const hadler:Handlers<Data>={
    GET:async(req:Request,ctx:FreshContext<Data>)=>{
        const url = new URL
    }
}
