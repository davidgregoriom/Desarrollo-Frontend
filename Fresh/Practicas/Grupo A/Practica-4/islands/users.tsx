import { useSignal } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import Users from "../components/userComponent.tsx"
import { User } from "../types.ts";

export default function Page(): FunctionComponent {
  const [User, setUser] = useState<String>("");
  const [PageUser,setPageUser]=useState<Number>(1);
  const [ListUser,setListUser]=useState<[User]>([]);

  useEffect(() => {
    fetchCharacter(PageUser,User);
  }, [PageUser,User]);

  // fetch character with id from Rick and Morty API
  const fetchCharacter = async (page:number,User:string) => {
    console.log(page)
    const response = await fetch(
      `https://fernandomur-random-data-72.deno.dev/Users?query=${User}&page=${page}`,
    );
    const data = await response.json();
    setListUser(data);
  };
  return (
    <div class="components">
      <input class="lookforward"
      value={User}
      onInput={(e) => setUser(e.currentTarget.value)} placeholder="Buscar">
      </input>
      <Users class="details" Users={ListUser}/>
      <div class="button">
        <button onClick={(e) => PageUser.value = PageUser.value - 1}>Anterior</button>
        <button onClick={(e) => PageUser.value = PageUser.value + 1}>Siguiente</button>
      </div>
    </div>
  );
}
