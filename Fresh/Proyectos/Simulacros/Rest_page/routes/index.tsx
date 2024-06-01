import {Handlers} from "$fresh/server.ts";

export const handler:Handlers = {
  GET:() =>{
    const headers= new Headers();
    headers.set("Location","/logo");
    return new Response(null,{
      status:302,
      headers,
    });
  }
}

