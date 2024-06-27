import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import Link from "next/link";
/*
    Estas mutaciones las realizo en el cliente debido a que al hacer estas acciones en el cliente,
    reduzco la carga y saturación en la red.
    Con lo cual, conseguimos que se envie y reciba los datos procesados anteriormente.
    Si lo hicieramos en el servidor, podriamos llegar a saturarlo
    y causar la caida de la red porque enviaría peticiones, constantemente.
*/

const Index =()=>{
    return(
        <>
            <Link href="/">Volver a Inicio</Link>
            <div>¿Que quiere hacer?:</div>
            <br/>
                <Link href="/medic/addSlot">Añadir</Link>
            <br/>
                <Link href="/medic/removeSlot">Borrar</Link>
        </>
    )
}

export default Index;
