import { h, useState } from 'preact/hooks';
import { FunctionComponent } from "preact";
import { Airport } from "../types.ts";

type Data={
    Airports: Airport[]
}

export default function AirportGetComponent(airport:Data):FunctionComponent<Data>{
    console.log("Rendering component with data:", airport);
    return (
        <div>
            <h1>Airports list</h1>
            <ul>
                {
                    airport.Airports&& airport.Airports.map((airport)=>(
                        <div key={airport.name}>
                            <h2>Name:{airport.name}</h2>
                            <li>IATA: {airport.iata}</li>
                            <li>ICAO: {airport.icao}</li>
                            <li>City: {airport.city}</li>
                            <li>Country: {airport.country}</li>
                            <li>Elevation_ft:{airport.elevation_ft}</li>
                            <li>Latitude:{airport.latitude}</li>
                            <li>Longitude:{airport.longitude}</li>
                            <li>Timezone:{airport.timezone}</li>
                        </div>

                    ))
                }
            </ul>
        </div>
    );

}




