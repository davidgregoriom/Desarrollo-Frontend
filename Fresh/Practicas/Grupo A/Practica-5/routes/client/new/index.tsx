import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { getCookies,setCookie } from "$std/http/cookie.ts";
import { message } from "../../../types.ts";
import NewComponent from "../../../components/new.tsx";
import {checknewEmail} from "../../../scripts/checks.ts";

type Data = {
  message:message;
};

export const handler: Handlers = {
    POST: async(req: Request, ctx: FreshContext<unknown, Data>) => {
        const message = await req.formData();
        const check = checknewEmail(message);
        const cookies = getCookies(req.headers);
        if(cookies.messages === undefined){
          setCookie("messages", JSON.stringify(check), {
              headers: ctx.headers,
          });
        }else{
          const messages = JSON.parse(cookies.messages);
          setCookie("messages", JSON.stringify([...messages, check]), {
              headers: ctx.headers,
          });
        }


        return ctx.render({ message });
    },
};




export default function New(props: PageProps<Data>){

    return (
      <NewComponent/>
    );
  }
