import { FunctionComponent} from "preact";



export default function NavComponent(props:number):FunctionComponent{

    return (
        <div>
            <button disabled={props === 0} onClick={() => {return(props - 1)}}>
                Prev
            </button>
            <button onClick={() =>{ return(props + 1)}}>
                Next
            </button>
        </div>
    )
}
