import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import  Axios  from "npm:axios";
import { job,linkedin,meta,links} from "../../types.ts"
import LinkedInIsland from "../../islands/linkedin.tsx"

type Data={
  linkedin:linkedin
}
//CAMBIAR NOMBRE DE LA CARPETA
export const handler: Handlers={
  async GET(req:Request,ctx:FreshContext<Data>){
    try{
      const form= await req.formData();
      const page1=1;
      const page ={
        page: form.get("page")
      }
      const url=`https://www.arbeitnow.com/api/job-board-api?visa_sponsorship%5C=true&page=${page1}`
      const response= await Axios.get<Data>(url);
      console.log(response.data);
      return ctx.render(response.data);
    }catch(error){
      console.log(error);

    }
  }
}

export default function Home(props:PageProps<Data>) {
  console.log(props.data);
  return <LinkedInIsland linkedin={props.data} />;
}

/*
export default function Home(props:PageProps<Data>) {

  return <Jokes jokes={props.data} />;
}
*/
