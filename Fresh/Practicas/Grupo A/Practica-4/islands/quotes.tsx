import { useSignal } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import Quotess from "../components/quotesComponent.tsx";
import { Quote } from "../types.ts";

export default function Page(): FunctionComponent {
  const [Quotes, setQuotes] = useState<String>("");
  const [PageQuotes,setPageQuotes]=useState<Number>(1);
  const [ListQuotes,setListQuotes]=useState<[Quote]>([]);

  useEffect(() => {
    fetchCharacter(PageQuotes,Quotes);
  }, [PageQuotes,Quotes]);

  // fetch character with id from Rick and Morty API
  const fetchCharacter = async (page:number,Quotes:string) => {
    const response = await fetch(
      `https://fernandomur-random-data-72.deno.dev/Quotes?query=${Quotes}&page=${page}`,
    );
    const data = await response.json();
    setListQuotes(data);
  };
  return (
    <div class="components">
      <input class="lookforward"
      value={Quotes}
      onInput={(e) => setQuotes(e.currentTarget.value)} placeholder="Buscar">
      </input>
      <Quotess class="details" Quotess={ListQuotes}/>
      <div class="button">
        <button onClick={(e) => PageQuotes.value = PageQuotes.value - 1}>Anterior</button>
        <button onClick={(e) => PageQuotes.value = PageQuotes.value + 1}>Siguiente</button>
      </div>
    </div>
  );
}
