import { namelogo } from "../signals/NameLogo.tsx";
import { logosarray } from "../signals/LogosArray.tsx";
import { useEffect,useState} from "preact/hooks";

export default function Logo() {
    const [name, setName] = useState<string>("");

    useEffect(()=>{
        fetchBooks(name);
    },[name])

    const fetchBooks = async (name:string) => {
        const response = await fetch("/api/logo?name="+name);
        if (!response.ok) {
            throw new Error("Error fetching books");
        }
        const data = await response.json();
        logosarray.value= data
    };
    return (
        <>
            <input type="text" value={name} onInput={(e) => setName(e.currentTarget.value)} />

        </>
    );
}

