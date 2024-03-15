import { FuntionComponent} from "preact";



export default function NavComponent(props:number):FuntionComponent{

    return (
        <div>
            <button disabled={props === 0} onClick={() => setNumber(props - 1)}>
                Prev
            </button>
            <button onClick={() => setNumber(props + 1)}>
                Next
            </button>
        </div>
    )
}
