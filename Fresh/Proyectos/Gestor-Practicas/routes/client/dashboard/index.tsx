import { Booking } from "../../../types.ts"
import { FreshContext,Handlers,PageProps} from "$fresh/server.ts";
import Dashboard from "../../../components/Dashboard.tsx";

type State ={
    id:number;
    full_name:string;
    email:string;
    administrator:boolean;
}

type Data={
    id_user:number;
    bookings:Booking[];
}

export const handler: Handlers = {
    GET: async(_req:Request,ctx:FreshContext<State,Data>)=>{
        const  id = ctx.state.id;
        const API_URL = Deno.env.get("API_URL");
        if(!API_URL){
            throw new Error("API_URL is not set");
        }
        const response = await fetch(`${API_URL}/getBookings/${id}`);
        if(response.status !== 200){
            return ctx.render({id_user:0,bookings:[]});
        }
        const bookings:Booking[] = await response.json();
        return ctx.render({id_user:id,bookings});
    }
}

export default function DashboardIndex(props:PageProps<Data>){
    return <Dashboard props={props.data}/>
}
