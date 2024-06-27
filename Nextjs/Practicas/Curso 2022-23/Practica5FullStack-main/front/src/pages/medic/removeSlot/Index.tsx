import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Slot } from "@/types";
import Link from "next/link";



const REMOVE_SLOT=gql`
    mutation RemoveSlot($year: Int!, $month: Int!, $day: Int!, $hour: Int!) {
        removeSlot(year: $year, month: $month, day: $day, hour: $hour) {
            day
            month
            year
            hour
            available
            dni
        }
    }`
;
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
const RemoveSlot:React.FC =()=>{
    const[deleteHour, setDeleteHour]=useState<Number>();
    const[deleteDay, setDeleteDay]=useState<Number>();
    const[deleteMonth, setDeleteMonth]=useState<Number>();
    const[deleteYear, setDeleteYear]=useState<Number>();

    const[removeSlot,{loading, error}] = useMutation(REMOVE_SLOT);
    const {data} = useQuery<{
        availableSlots:Slot[],
    }>(
        GET_SLOTS,{
            variables:{
                deleteYear,
                deleteMonth
            }
        }
    );

    if (loading) return <p>Procesando</p>
    if (error) return <p>Error</p>

    return(
        <>
            <div>Retirar cita:</div>
            <br/>
                <div>Hora:
                 <input type="number" onBlur={(x)=> setDeleteHour(parseInt(x.target.value))}></input>
                </div>
                <div>Dia:
                 <input type="number" onBlur={(x)=> setDeleteDay(parseInt(x.target.value))}></input>
                </div>
                <div>Mes:
                 <input type="number" onBlur={(x)=> setDeleteMonth(parseInt(x.target.value))}></input>
                </div>
                <div>Año:
                 <input type="number" onBlur={(x)=> setDeleteYear(parseInt(x.target.value))}></input>
                </div>
                <button onClick={()=>{removeSlot({variables:{hour:deleteHour,day:deleteDay,month:deleteMonth,year:deleteYear}})}}>Elimina</button>

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
            <Link href="/medic">Volver</Link>
        </>
    )
}

export default RemoveSlot;
