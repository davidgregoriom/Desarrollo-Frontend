import { gql, useMutation } from "@apollo/client";
import Link from "next/link";
import { useState } from "react";
import { Slot } from "@/types";

const ADD_SLOT= gql`
    mutation AddSlot($year: Int!, $month: Int!, $day: Int!, $hour: Int!) {
        addSlot(year: $year, month: $month, day: $day, hour: $hour) {
            available
            day
            dni
            hour
            month
            year
        }
    }
`
const AddSlot:React.FC = () =>{
    const[newHour, setNewHour]=useState<Number>();
    const[newDay, setNewDay]=useState<Number>();
    const[newMonth, setNewMonth]=useState<Number>();
    const[newYear, setNewYear]=useState<Number>();

    const[addSlot, {loading, error}] = useMutation(ADD_SLOT);

    if (loading) return <p>Procesando</p>
    if (error) return <p>Error</p>

    return(
        <>
            <div>Añadir cita:</div>
            <div>
                <br/>
                    <div>Hora:
                    <input type="number" onBlur={(x)=> setNewHour(parseInt(x.target.value))}></input>
                    </div>
                    <div>Dia:
                    <input type="number" onBlur={(x)=> setNewDay(parseInt(x.target.value))}></input>
                    </div>
                    <div>Mes:
                    <input type="number" onBlur={(x)=> setNewMonth(parseInt(x.target.value))}></input>
                    </div>
                    <div>Año:
                    <input type="number" onBlur={(x)=> setNewYear(parseInt(x.target.value))}></input>
                    </div>
                    <button onClick={()=>{addSlot({variables:{hour:newHour,day:newDay,month:newMonth,year:newYear}})}}>Añade</button>
            </div>
            <Link href="/medic">Volver</Link>
        </>
    )

}

export default AddSlot;
