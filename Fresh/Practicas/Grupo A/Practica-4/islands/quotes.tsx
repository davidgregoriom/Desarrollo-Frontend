import { Signal, useSignal } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import Quotess from "../components/quotesComponent.tsx";
import { Quote } from "../types.ts";
import Button from "../components/Button.tsx";

export default function Page(number:number) {
  const [Quotes, setQuotes] = useState<string>("");
  //const [PageQuotes,setPageQuotes]=useState<Number>(1);
  const [ListQuotes,setListQuotes]=useState<Array<Quote>>([]);
  const PageQuotes = useSignal(number);

  useEffect(() => {
    fetchCharacter(PageQuotes,Quotes);
  }, [PageQuotes,Quotes]);

  const fetchCharacter = async (page:Signal<number>,Quotes:string) => {
    const response = await fetch(
      `https://fernandomur-random-data-72.deno.dev/Quotes?query=${Quotes}&page=${page}`,
    );
    const data = await response.json();
    debugger;
    setListQuotes(data);
  };
  return (
    <div class="components">
      <input class="lookforward"
      value={Quotes}
      onInput={(e) => setQuotes(e.currentTarget.value)} placeholder="Buscar">
      </input>
      <Quotess class="details" Quotes={ListQuotes}/>
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
