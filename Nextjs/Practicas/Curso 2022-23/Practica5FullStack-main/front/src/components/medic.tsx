/*
import { Slot,Response } from "@/types";
import { FC, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import {getStaticPaths} from "@/pages/pacient/index"

const Anadir=gql`
    mutation AddSlot($year: Int!, $month: Int!, $day: Int!, $hour: Int!) {
        addSlot(year: $year, month: $month, day: $day, hour: $hour) {
            available
            day
            dni
            hour
            month
            year
        }
    }`
;
const Borrar =gql`
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

const Medic:unknown =({Slot}: { Slot:Slot })=>{

    let input: HTMLInputElement | null;
    const[newHour, setNewHour]=useState<Number>();
    const[newDay, setNewDay]=useState<Number>();
    const[newMonth, setNewMonth]=useState<Number>();
    const[newYear, setNewYear]=useState<Number>();
    const[newDni, setNewDni]=useState<string>();
    const[addSlot, dato1] = useMutation(Anadir);
    const[removeSlot,dato2] = useMutation(Borrar);
    const {loading,error,data,refetch} = useQuery<Response>(
        getStaticPaths,{ }
    )

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

      return (
        <>
        <div>
          <h1>Reservar</h1>
            <ul>
            <form onSubmit={e => {
                e.preventDefault();
                addSlot({ variables: { type: dato1.value } });
                dato1.value = '';
              }}
        >
          <input
            ref={node => {
             dato1 = node;
            }}
          />
          <button type="submit">Add Todo</button>
        </form>
            </ul>
        </div>
        <div>
          <h1>Reservar</h1>
            <ul>
            <form onSubmit={e => {
                e.preventDefault();
                removeSlot({ variables: { type: input.value } });
                input.value = '';
              }}
        >
          <input
            ref={node => {
             input = node;
            }}
          />
          <button type="submit">Add Todo</button>
        </form>
            </ul>
        </div>

        </>
      );
  }

  export default Medic;
*/
