import { FunctionComponent } from "preact";
import Fav from "../islands/Fav.tsx";
import { Booking } from "../types.ts";

type Props={
  id_user:number;
  bookings:Booking[];
}

export default function Dashboard( props:Props ) {

  const { id_user, bookings } = props;
  return (
    <div className="Dashboard-list-container">
      {bookings.map((booking) => (
        <div key={booking.id} className="Dashboard-item">
          <a href={`/dashboard/${booking.id}`} className="Dashboard-link">
            <div className="Dashboard-info">
              <h3 className="Dashboard-title">{booking.name}</h3>
              <p className="Dashboard-description">{booking.}</p>
              <p className="Dashboard-release-date"></p>
            </div>
          </a>
          <Fav id={video.id} userid={userid} fav={video.fav} />
        </div>
      ))}
    </div>
  );
};
