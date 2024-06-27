import { Slot } from "@/types";
import { gql, useMutation, useQuery } from "@apollo/client";
import Link from "next/link";
import { useState } from "react";

const BOOK_SLOTS = gql`
    mutation BookSlot($year: Int!, $month: Int!, $day: Int!, $hour: Int!) {
        bookSlot(year: $year, month: $month, day: $day, hour: $hour, dni: $dni) {
            available
            day
            dni
            hour
            month
            year
        }
    }
`;

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

const BookSlot:React.FC =()=>{
    const[followHour, setFollowHour]=useState<Number>();
    const[followDay, setFollowDay]=useState<Number>();
    const[followMonth, setFollowMonth]=useState<Number>();
    const[followYear, setFollowYear]=useState<Number>();
    const[followDni, setFollowDni]=useState<Number>();

    const[bookSlot,{loading, error}] = useMutation(BOOK_SLOTS);

    const {data} = useQuery<{
        availableSlots:Slot[],
    }>(
        GET_SLOTS,{
            variables:{
                followHour,
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
            <div>Reservar cita:</div>
            <br/>
                <div>Hora:
                 <input type="number" onBlur={(x)=> setFollowHour(parseInt(x.target.value))}></input>
                </div>
                <div>Dia:
                 <input type="number" onBlur={(x)=> setFollowDay(parseInt(x.target.value))}></input>
                </div>
                <div>Mes:
                 <input type="number" onBlur={(x)=> setFollowMonth(parseInt(x.target.value))}></input>
                </div>
                <div>Año:
                 <input type="number" onBlur={(x)=> setFollowYear(parseInt(x.target.value))}></input>
                </div>
                <div>Dni:
                 <input type="number" onBlur={(x)=> setFollowDni(parseInt(x.target.value))}></input>
                </div>
                <button onClick={()=>{bookSlot({variables:{hour:followHour,day:followDay,month:followMonth,year:followYear,dni:followDni}})}}>Elimina</button>

            <br/>
            <div>Citas a elegir:</div>
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

export default BookSlot;
