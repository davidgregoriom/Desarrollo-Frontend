import { useState } from "react";
import styled, { css } from "styled-components";

type anadirprototipo={
    nombre:string;
    dni:string;
}

const Anadir =()=>{
    const [nombre,setNombre]=useState<string>("")
    const [Dni,setDni]=useState<string>("")
    const [tabla,settabla]=useState<anadirprototipo[]>([])
    
    
    return(
        <div className="Tabla">
            <div className="datos">      
                    Introduce tu nombre: <input type="string" onChange={(e)=> setNombre(e.target.value)}/> <br/> 
                    Introduce tu DNI: <input type="string" onChange={(e)=> setDni(e.target.value)}/> <br/>
                    <Button id="botonconfirmacion" onClick={()=>{settabla([...tabla,{nombre:nombre, dni:Dni}])}}>Añadir</Button>
            </div>    
            
            <Div className="Container-table">
                <Div2 className="table columna1">Nombre:</Div2>
                <Div2 className="table columna2">Dni:</Div2>
                <Div2 className="table columna3">Eliminar:</Div2>
                    {
                    tabla.map((item, index) => {
                            return (
                               <>
                                <Div2 className="table nombre">{item.nombre}</Div2>
                                <Div2 className="table dni">{item.dni}</Div2>
                                <Button2 id="eliminar" onClick={()=>{settabla(tabla.filter((items)=>!(items===item)))}}></Button2>
                              </>
                            )
                        })
                    }
            </Div>
        </div>
    )
    
}
export default Anadir;


const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill, minmax(1fr, 1fr));
  background: grey;
  grid-gap: 0px;
  

`;
const Div2 = styled.div`
    background: rgb(3, 3, 20);
    color: #fff;
    font-size: 2rem;
`;
const Button = styled.button`
    color: #fff;
    background-size: 30px 15px;
    font-size: rem;
`;

const Button2 = styled.button`
    background-image: url(papelera.png);
    color: #fff;
    background-size: 30px 15px;
    font-size: rem;
`;