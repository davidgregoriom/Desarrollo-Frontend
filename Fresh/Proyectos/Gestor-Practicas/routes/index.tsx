import { Handlers} from "$fresh/server.ts";

export const handler:Handlers={
  GET:()=>{
    const headers = new Headers();
    headers.set("Location","/dashboard");
    return new Response("",{
        status:307,
        headers
    });
  }
}
