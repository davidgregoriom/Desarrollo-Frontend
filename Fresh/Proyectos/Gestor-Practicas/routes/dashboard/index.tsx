import { Booking } from "../../types.ts"
import { FreshContext,Handlers,PageProsp} from "$fresh/server.ts";

type State ={
    id:number;
    full_name:string;
    email:string;
    administrator:boolean;
}

type Data={
    bookings:Booking[];
}
export const handler: Handlers = {
    GET: async(req:Request,ctx:FreshContext<State,Data>)=>{

    }
}
