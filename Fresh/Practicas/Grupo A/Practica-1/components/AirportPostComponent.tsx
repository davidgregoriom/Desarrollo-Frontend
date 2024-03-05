import { FunctionComponent } from "preact";

export default function AirportPostComponent():FunctionComponent{
    return(
        <div>
            <form action="/airport" method="post">
                <h1>Name Airport</h1>
                <input type="text" name="name" placeholder="Name" />
                <button type="submit">Look forward</button>
            </form>
        </div>
    )
}

