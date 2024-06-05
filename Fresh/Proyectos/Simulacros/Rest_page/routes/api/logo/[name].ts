import { FreshContext,Handlers } from "$fresh/server.ts";
import { Logo } from "../../../types.ts";

type response={
  logos:Array<Logo>;
}

export const handler:Handlers  = {
  GET: async (_req: Request, ctx: FreshContext) => {
    const name= ctx.params.name;
    const API_KEY = Deno.env.get("API_NINJAS_KEY");
    const API_URL = Deno.env.get("APILOGO_URL");

    if (!API_KEY || !API_URL) {
      return new Response("API_KEY and API_URL are required", {
        status: 500,
      });
    }
    if(!name){
      return new Response("Name is required", {
        status: 400,
      });
    }
    const FINAL_URL = API_URL + `/?name=${name}`;

    const response = await fetch(FINAL_URL, {
      headers: {
        "X-Api-Key": `${API_KEY}`,
      },
    });

    if (!response.ok) {
      return new Response("Error fetching logos", { status: 500 });
    }
    debugger;
    //console.log(response);
    const data = await response.json();
    //error en el return este
    return new Response(JSON.stringify(data));
  }
};
