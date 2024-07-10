import {PageProps, RouterConfig,Handlers,FreshContext} from "$fresh/server.ts";


type Data={
    message?:string;
}

export const handler:Handlers ={
    POST:async(req:Request,ctx:FreshContext<Data>) =>{
        const url= new URL(req.url);
        const formData = await req.formData();
        const course = formData.get("course")
        const starHour = formData.get("startHour")
        const endHour = formData.get("endHour")
        const yearCalendar = formData.get("yearCalendar")?.toString();
        const semester= formData.get("semester")

        const JWT_SECRET = Deno.env.get("JWT_SECRET");
        if(!JWT_SECRET){
            throw new Error("JWT_SECRET is not set");
        }
        const response = await fetch( `${Deno.env.get("API_URL")}/postCalendar`,{
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

            headers.set("location","/client/dashboard");
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
