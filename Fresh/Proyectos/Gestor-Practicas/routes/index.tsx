import { Handlers} from "$fresh/server.ts";

export const handler:Handlers={
  GET:()=>{
    const headers = new Headers();
    headers.set("Location","/client/dashboard");
    return new Response("",{
        status:307,
        headers
    });
  }
}
