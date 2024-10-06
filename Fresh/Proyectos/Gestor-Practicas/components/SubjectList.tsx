import { subjectID } from "../signals/subjectID.ts"
import { subjectArray } from "../signals/subjectArray.ts"

export default function SubjectList(){
    return(
        <div>
            <label htmlFor="subject">Seleccionar Asignatura</label>
            <select
                name="subject"
                id="subject"
                value={subjectID.value}
                onChange={handleSubjectChange}
                required
            >
                {subjectArray.value.map((subject) => (
                    <option key={subject.id} value={subject.id}>{subject.name}</option>
                ))}
            </select>
        </div>
    )
}
