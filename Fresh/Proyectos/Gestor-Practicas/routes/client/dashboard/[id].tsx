import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Booking } from "../../../types.ts";

type State ={
    id:number;
    full_name:string;
    email:string;
    administrator:boolean;
}

type Data={
    id_user:number;
    bookings:Booking;
}

export const handler: Handlers<Data, State> = {
  GET: async (_req: Request, ctx: FreshContext<State, Data>) => {
    const id_user = ctx.state.id;
    const Bookingid = ctx.params.id;

    const API_URL = Deno.env.get("API_URL");
    if (!API_URL) {
      throw new Error("API_URL is not set in the environment");
    }
    const response = await fetch(`${API_URL}/getBooking/${id_user}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({Bookingid})
    });
    if (response.status !== 200) {
      return new Response(null, {
        status: 303,
        headers: { location: "/dashboard" },
      });
    }
    const Booking: Booking = await response.json();
    return ctx.render({ Booking, id_user });
  },
};

export default function DashboardIDIndex(props:PageProps<Data>){
    return <Dashboard props={props.data}/>
}
