import ClientID from "../../components/clientid.tsx"
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { getCookies, setCookie } from "$std/http/cookie.ts";
import { message } from "../../types.ts";

type Data = {
  message: message;
};

export const handler: Handlers = {
  GET: (req: Request, ctx: FreshContext<unknown, Data>) => {
    const { id } = ctx.params;
    const cookies = getCookies(req.headers);
    console.log(Object.keys(cookies));
    if(cookies.message === undefined){
      setCookie("messages", JSON.stringify([]), {
        headers: ctx.headers,
      });
      return ctx.render({ messages: [] });
    }
    else{
      const messages = JSON.parse(cookies.message);
      const message = messages.find((message: message) => message.id === id);
      return ctx.render({ message });
    }


  },
};

export default function Index(props: PageProps<Data>){

    return (
      <ClientID/>
    );
  }
