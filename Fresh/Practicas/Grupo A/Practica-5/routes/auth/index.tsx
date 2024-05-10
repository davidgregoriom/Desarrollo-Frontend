import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { getCookies, setCookie } from "$std/http/cookie.ts";
import { user } from "../../types.ts";
import { checkUser } from "../../scripts/checks.ts";
import AuthForm from "../../components/authform.tsx";

type Data = {
  user:user;
};

export const handler: Handlers = {
    POST: async(req: Request, ctx: FreshContext<unknown, Data>) => {
        debugger;
        const users = await req.json();
        console.log(users);
        const usercheck = checkUser(users);
        console.log(usercheck);
        //console.log(Object.keys(usercheck));
        const cookies = getCookies(req.headers);
        if(cookies.user === undefined){
          setCookie("user", JSON.stringify(usercheck), {
              headers: ctx.headers,
          });
        }else{
          const user = JSON.parse(cookies.user);
          setCookie("user", JSON.stringify([...user, usercheck]), {
              headers: ctx.headers,
          });
        }


        return ctx.render({ usercheck });
    },
};



export default function Home(){


  return (
    <AuthForm/>
  );

}

  //Rediccionamiento en el project en ruta add
