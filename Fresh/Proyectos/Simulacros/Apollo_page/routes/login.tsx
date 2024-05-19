import { RouteConfig, Handlers, FreshContext } from "$fresh/server.ts";



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

            const response  = await fetch(`${Deno.env.get("API_URL")}/login`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({email,password})
            });


        }catch(e){
            return new Error("Internal Server Error");
            console.log(e);
        }
    }
}
