import { FreshContext,Handlers,PageProps } from "$fresh/server.ts";
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
      const links:links= linkedin.linkedin.links;
      const meta:meta= linkedin.linkedin.meta;
      const data:job[]= linkedin.linkedin.data;
      console.log(data);
      return ctx.render(links,meta,data,{linkedin:linkedin});

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
