import { MainMenu, PlanetsMenu } from "@/styles/style"
import { PlanetAPI } from "@/types"
import Link from "next/link";

const Pages = ({
    data,
  }: {
    data: Array<{
      name: string;
      id: string;
    }>;
  }) => {
    return (
      <div>
        <h1>Planets</h1>
        <ul>
          {data.map((planet) => (
            <li key={planet.id}>
              <Link href={`/planet/${planet.id}`}>{planet.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
export default Pages;
