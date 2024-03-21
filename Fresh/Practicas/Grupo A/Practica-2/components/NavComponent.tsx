import { FunctionComponent} from "preact";



export default function NavComponent(props:number):FunctionComponent{

    return (
        <div>
            <button class="button-page" disabled={props === 0} onClick={() => {return(props - 1)}}>
                Prev
            </button>
            <button class="button-page" onClick={() =>{ return(props + 1)}}>
                Next
            </button>
        </div>
    )
}
