import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import  Axios  from "npm:axios";
import { Airport} from "../../types.ts";
import AirportGetComponent from "../../components/AirportGetComponent.tsx";
import AirportPostComponent from "../../components/AirportPostComponent.tsx";
import Airportisland from "../../islands/airport.tsx";

type Data={
  Airports: Array<Airport>
}


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
  async POST(req:Request,ctx:FreshContext<Data>){
    try{
      const form= await req.formData();
      const name ={
        name: form.get("name")
      }
      const key = Deno.env.get("API_key");
      const url =`https://api.api-ninjas.com/v1/airports?name=${name.name}`;//Algo falla de la url
      const response= await Axios.get<Data>(url,{
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
      return ctx.render(response.data);
    }catch(error){
      console.log(error)
    }
  }
}
export default function Home(props:PageProps<Data>) {
  return <Airportisland props={props.data} />;
}
/*
export default function Home(props: PageProps<Data>) {
  return (
    <div>
      <AirportPostComponent />

      {props.data > 0 && (
        <AirportGetComponent airport={props.data} />
      )}
    </div>
  );
}
*/
