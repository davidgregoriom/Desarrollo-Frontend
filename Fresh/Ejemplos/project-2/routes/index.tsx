import { FreshContext, Handlers } from "$fresh/server.ts";

// redirect to /characters/1
export const handler:Handlers = {
  GET: async (req:Request, ctx: FreshContext) => {
    try{
      const url = new URL(req.url);
      const country = url.searchParams.get("country");
      const city = url.searchParams.get("city");
      if(country){
        return new Response("",{
          status: 302,
          headers: {
            "Location": `/country/${country}`
          }

        })
      }else if(city){
        return new Response("",{
          status: 307,
          headers: {
            "Location": `/city/${city}`
          }

        })
      }
      return ctx.render();
    }catch(err){
      console.log(err);

    }
  }
};

export default function Page() {
  return (
    <>
      <form method="get">
        Introduce un país: <input type="text" name="country" />
        <button type="submit">Buscar por país</button>
      </form>
      <form method="get">
        Introduce una ciudad: <input type="text" name="city" />
        <button type="submit">Buscar por ciudad</button>
      </form>
    </>
  );

}

