import { namelogo } from "../signals/NameLogo.tsx";
import { logosarray } from "../signals/LogosArray.tsx";
import { useEffect,useState} from "preact/hooks";
import { Logo } from "../types.ts";
import LogoList from "../components/LogoList.tsx";

export default function Page() {
    const [name, setName] = useState<string>("");

    useEffect(()=>{
        fetchBooks(name);
    },[name])

    const fetchBooks = async (name:string) => {
        if(name === "") return[];
        const response = await fetch(`/api/logo/${name}`);
        debugger;
        if (!response.ok) {
            throw new Error("Error fetching books");
        }
        console.log(response);
        const data = await response.json();
        console.log(data);
        logosarray.value= data
        return data;
    }

    const callBooks = async (name:string) => {
        const cookies = document.cookie.split("; ");
        const logoCookie = cookies.find((cookie)=>cookie.startsWith("logo="));
        var response = null;
        if(!logoCookie){
            response = await fetchBooks(name);
        }else{
            if(logoCookie.split("=")[1] !== name){
                response = await fetchBooks(name);
            }else{
                response = logoCookie.split("=")[1];
            }
        }

        const logo:Logo[]= JSON.parse(response);
        document.cookie = `logo=${JSON.stringify(logo)}; path=/`;
        const data = await response.json();
        logosarray.value= data
    };
    return (
        <div class="logo_container">
            <input type="text" value={name} onInput={(e) => setName(e.currentTarget.value)} />
            <LogoList logosarray/>
        </div>
    );
}

