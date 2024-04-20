import Pokemon from "../islands/pokemon.tsx"
import Quotes from "../islands/quotes.tsx";
import Users from "../islands/users.tsx"


export default function Home() {
  return (
  <div class="principal">
    <Pokemon/>
    <div class="secondsComponents">
      <Quotes/>
      <Users/>
    </div>
  </div>
  )
}
