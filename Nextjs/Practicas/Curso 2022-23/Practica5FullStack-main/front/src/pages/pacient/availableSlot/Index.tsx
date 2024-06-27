import { Slot } from "@/types";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { useState } from "react";

const GET_SLOTS = gql`
  query Query($year: Int!, $month: Int!) {
    availableSlots(year: $year, month: $month) {
      year
      month
      day
      hour
      available
      dni
    }
  }
`;

const AvailableSlot:React.FC =()=>{
    const[followDay, setFollowDay]=useState<Number>();
    const[followMonth, setFollowMonth]=useState<Number>();
    const[followYear, setFollowYear]=useState<Number>();

    const {data,loading,error} = useQuery<{
        availableSlots:Slot[],
    }>(
        GET_SLOTS,{
            variables:{
                followDay,
                followYear,
                followMonth
            }
        }
    );
    if (loading) return <p>Procesando</p>
    if (error) return <p>Error</p>

    return(
        <>
            <div>Revisar horario para pedir cita:</div>
            <br/>
                <div>Dia:
                    <input type="number" onBlur={(x)=> setFollowDay(parseInt(x.target.value))}></input>
                </div>
                <div>Mes:
                 <input type="number" onBlur={(x)=> setFollowMonth(parseInt(x.target.value))}></input>
                </div>
                <div>Año:
                 <input type="number" onBlur={(x)=> setFollowYear(parseInt(x.target.value))}></input>
                </div>
                <button>Consultar</button>

            <br/>
            <div>Citas a eliminar:</div>
            {data?.availableSlots.map((slot:Slot)=>{return(<div id={`${slot.hour}}`}>
                <div>Disponible:{slot.available?"Si":"No"}</div>
                <div>Dia:{slot.day}</div>
                <div>Mes:{slot.month}</div>
                <div>Año:{slot.year}</div>
                <div>Hora:{slot.hour}</div>
                <div>DNI:{slot.dni}</div>
            </div>)})}

            <Link href="/pacient">Volver</Link>
        </>
    )
}
export default AvailableSlot;
