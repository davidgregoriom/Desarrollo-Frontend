import { FunctionComponent } from "preact";
import { Booking } from "../types.ts";

type Props={
  id_user:number;
  bookings:Booking[];
}

export default function Dashboard( props:Props ) {

  const { id_user, bookings } = props;
  /*
  return (
    <div >
      {bookings.map((booking) => (
        <div key={booking.id} className="Dashboard-item">
          <a href={`/dashboard/${booking.id}`} className="Dashboard-link">
            <li className="Dashboard-info">
              <h3 className="Dashboard-title">{booking.name}</h3>
              <p className="Dashboard-description">{booking.}</p>
              <p className="Dashboard-release-date"></p>
            </li>
          </a>
          <Fav id={video.id} userid={userid} fav={video.fav} />
        </div>
      ))}
    </div>
  );
  */
};

