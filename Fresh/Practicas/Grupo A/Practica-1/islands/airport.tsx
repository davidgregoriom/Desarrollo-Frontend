import { h, useState } from 'preact/hooks';
import { Airport } from '../types.ts';
import AirportPostComponent from '../components/AirportPostComponent.tsx';
import AirportGetComponent from '../components/AirportGetComponent.tsx';

type Data={
    Airports: Array<Airport>
}

export default function RecipeIsland(props:Data) {

  const [data, setData] = useState<Airport[]>([]);

  if (props) {
    setData(props);
  }
  return (
      <div class="airport">
        <AirportPostComponent />
        <AirportGetComponent airport={data} />
      </div>
  );
}
