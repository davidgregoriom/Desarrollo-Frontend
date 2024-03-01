import { FunctionComponent } from "preact";
import { Airport } from "../types.ts";

export default function AirportComponent(airport:Airport):FunctionComponent<Airport>{
    return(
        <div>
            <form action="/airport" method="post">
                <h1>Name Airport</h1>
                <input type="text" name="name" placeholder="Name" />
                <button type="submit">Look forward</button>
            </form>

            <ul>
                <h1>Airport:</h1>
                <li>{airport.icao}</li>
                <li>{airport.iata}</li>
                <li>{airport.name}</li>
                <li>{airport.city}</li>
                <li>{airport.region}</li>
                <li>{airport.country}</li>
                <li>{airport.elevation_ft}</li>
                <li>{airport.latitude}</li>
                <li>{airport.longitude}</li>
                <li>{airport.timezone}</li>
            </ul>
        </div>
    )
}

