import Pokemon from "../islands/pokemon.tsx"
import Quotes from "../islands/quotes.tsx";
import Users from "../islands/users.tsx"


export default function Home() {
  return (
  <div class="principal">
    <Pokemon number={1}/>
    <div class="secondsComponents">
      <Quotes  number={1}/>
      <Users  number={1}/>
    </div>
  </div>
  )
}
