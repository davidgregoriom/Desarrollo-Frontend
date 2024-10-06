import { degreeID } from "../signals/degreeID.ts";
import { degreesArray } from "../signals/degreesArray.ts";

export default function DegreeList(){
    return(
        <div>
            <label htmlFor="degree">Seleccionar Grado</label>
            <select
                name="degree"
                id="degree"
                value={degreeID.value}
                onChange={handleDegreeChange}
                required
            >
                {degreesArray.value.map((degree) => (
                    <option key={degree.id} value={degree.id}>{degree.name}</option>
                ))}
            </select>
        </div>
    );
}
