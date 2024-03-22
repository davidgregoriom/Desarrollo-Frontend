import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import  Axios  from "npm:axios";
import { job,linkedin,meta,links} from "../types.ts"
import LinkedInIsland from "../islands/linkedin.tsx"

type Data={
  linkedin:linkedin
}

export const handler: Handlers={
  async GET(req:Request,ctx:FreshContext<Data>){
    try{
      const response= await Axios.get<Data>(`https://www.arbeitnow.com/api/job-board-api`);
      const linkedin=response.data;
      //console.log(linkedin);

      return ctx.render({linkedin});

    }catch(error){
      console.log(error);

    }
  }
}

export default function Home(props:PageProps<Data>) {
  console.log(props.data.links)
  //console.log(props.data);
  return <LinkedInIsland linkedin={props.data} />;
  //return <div>Hola</div>;
}

/*
export default function Home() {

  return <div>Hola</div>;
}
*/
