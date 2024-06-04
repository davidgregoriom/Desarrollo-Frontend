import { FreshContext,Handlers } from "$fresh/server.ts";


export const handler:Handlers  = {
  GET: async (_req: Request, ctx: FreshContext) => {
    const name= ctx.params;
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

    const data = await response.json();
    return new Response(JSON.stringify(data.docs), {
      headers: { "Content-Type": "application/json" },
    });
  }
};
