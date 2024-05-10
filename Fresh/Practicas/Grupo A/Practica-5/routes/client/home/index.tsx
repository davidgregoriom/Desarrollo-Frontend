import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import HomeComponent from "../../../components/home.tsx";
import HeaderHome from "../../../components/headerHome.tsx";
import { getCookies, setCookie } from "$std/http/cookie.ts";
import { message } from "../../../types.ts";

type Data = {
  message: message[];
};

export const handler: Handlers = {
  GET: (req: Request, ctx: FreshContext<unknown, Data>) => {
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
    return ctx.render({ messages });
    }


  },
};

export default function Home(props: PageProps<Data>) {
  const messages = props.data.messages;
  return (
    <div>
      <HeaderHome/>
      <HomeComponent messages={messages} />
    </div>
  );
}
