
/*
import { Slot,Response } from "@/types";
import { FC, useState } from "react";
import { gql, useMutation } from "@apollo/client";

const Reservar=gql`

  mutation BookSlot($year: Int!, $month: Int!, $day: Int!, $hour: Int!, $dni: String!) {
    bookSlot(year: $year, month: $month, day: $day, hour: $hour, dni: $dni) {
      day
      month
      year
      hour
      available
      dni
    }
  }`;


const Pacient:unknown =({Slot}: { Slot:Slot })=>{

  const[newHour, setNewHour]=useState<Number>();
  const[newDay, setNewDay]=useState<Number>();
  const[newMonth, setNewMonth]=useState<Number>();
  const[newYear, setNewYear]=useState<Number>();
  const[newDni, setNewDni]=useState<string>();
  const[bookSlot, { data, loading, error }] = useMutation(Reservar);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

    return (
      <>
      <div>
        <h1>Reservar</h1>
          <ul>
          <form onSubmit={e => {
              e.preventDefault();
              bookSlot({ variables: { type: data.value } });
              data.value = '';
            }}
      >
        <input
          ref={node => {
           data = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
          </ul>
      </div>

      </>
    );
}

export default Pacient;
*/
