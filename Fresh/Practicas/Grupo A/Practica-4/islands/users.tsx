import { Signal, useSignal } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import Users from "../components/userComponent.tsx"
import { User } from "../types.ts";
import Button from "../components/Button.tsx";

export default function Page(number:number){
  const [User, setUser] = useState<string>("");
  //const [PageUser,setPageUser]=useState<Number>(1);
  const [ListUser,setListUser]=useState<Array<User>>([]);
  const PageUser = useSignal(number);

  useEffect(() => {
    fetchCharacter(PageUser,User);
  }, [PageUser,User]);

  const fetchCharacter = async (page:Signal<number>,User:string) => {
    console.log(page)
    const response = await fetch(
      `https://fernandomur-random-data-72.deno.dev/Users?query=${User}&page=${page}`,
    );
    const data = await response.json();
    const datta = await data.json();
    debugger;
    console.log(Object.keys(datta));
    setListUser(data);
  };
  return (
    <div class="components">
      <input class="lookforward"
      value={User}
      onInput={(e) => setUser(e.currentTarget.value)} placeholder="Buscar">
      </input>
      <Users class="details" User={ListUser}/>
      <Button/>
      {
      /*<div class="button">
        <button onClick={(e) => PageQuotes.value = PageQuotes.value - 1}>Anterior</button>
        <button onClick={(e) => PageQuotes.value = PageQuotes.value + 1}>Siguiente</button>
      </div>
      */}
    </div>
  );
}
