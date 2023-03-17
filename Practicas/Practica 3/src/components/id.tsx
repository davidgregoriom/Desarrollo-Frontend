import { useEffect, useState } from "react";
import Link from "next/link";
import { MainMenu, PlanetsMenu } from "@/styles/style";

type PlanetProps = {
    props: {
        name: string,
        rotation_period: string,
        orbital_period: string,
        diameter: string, 
        climate: string, 
        gravity: string, 
        terrain: string, 
        surface_water: string, 
        population: string,
        residents: string[],
        films: string[] 
    }
}
const Id = (data: PlanetProps) => {
    return(
        <MainMenu>
            <PlanetsMenu> INFO
                <p>Nombre: {data.props.name}</p>
                <p>Tiempo de rotación: {data.props.rotation_period}</p>
                <p>Tiempo de órbita: {data.props.orbital_period}</p>
                <p>Diámetro: {data.props.diameter}</p>
                <p>Clima: {data.props.climate}</p>
                <p>Gravedad: {data.props.gravity}</p>
                <p>Terreno: {data.props.terrain}</p>
                <p>Agua en superficie: {data.props.surface_water}</p>
                <p>Habitantes: {data.props.population}</p>
            </PlanetsMenu>
            <PlanetsMenu>RESIDENTES{
                data.props.residents.map(resident => (
                    <>
                        <p>{resident}</p>
                    </>
                ))
            }
            </PlanetsMenu>
            <PlanetsMenu>PELICULAS
            {
                data.props.films.map(film => (
                    <>
                        <p>{film}</p>
                    </>
                ))
            }
            </PlanetsMenu>
        </MainMenu>
    )
}
export default Id;





