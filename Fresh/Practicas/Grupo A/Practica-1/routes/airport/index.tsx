import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import  Axios  from "npm:axios";
import { Airport} from "../../types.ts"
import AirportComponent from "../../components/AirportComponent.tsx";


export const handler: Handlers={
  /*async GET(_req:Request,ctx:FreshContext){
    try{
      const {name}=ctx.params;
      const key = Deno.env.get("API_KEY");
      const url =`https://api.api-ninjas.com/v1/airports?name=${name}`;
      const response= await Axios.get<unknown>(url,{
          headers: {
            'X-Api-Key': key,
        }})
      if (response.status !== 200) {
          console.error(
            "Error fetching airports",
            response.status,
            response.statusText,
          );
          throw new Error("Error fetching airports");
      }
      return ctx.render(response);
    }catch(error){
      console.log(error);
    }
  },*/
  async POST(req:Request,ctx:FreshContext<Airport>){
    try{
      const form= await req.formData();
      const name ={
        name: form.get("name")
      }
      const key = Deno.env.get("API_KEY");
      const url =`https://api.api-ninjas.com/v1/airports?name=${name}`;//Algo falla de la url
      const response= await Axios.get<Airport>(url,{
          headers: {
            'X-Api-Key': key,
        }})
      if (response.status !== 200) {
          console.error(
            "Error fetching airports",
            response.status,
            response.statusText,
          );
          throw new Error("Error fetching airports");
      }
      return ctx.render(response);
    }catch(error){
      console.log(error)
    }
  }
}



export default function Home(props:PageProps<Airport>) {

    return (
      <AirportComponent airport={props.data}/>

    );
  }
