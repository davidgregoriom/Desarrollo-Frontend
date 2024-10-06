import { useState } from 'preact/hooks';
import { degreeID } from "../../../signals/degreeID.ts";
import DegreeList from "../../../components/DegreeList.tsx";

type subject = {
    name: string;
    course: number;
    semester: number;
    observations: string;
};

export default function SubjectForm({ message }: { message?: string }) {
    const [subjects, setSubjects] = useState<subject[]>([{ name: '', course: 0, semester: 0, observations: '' }]);

    const handleChange = (index: number, event: Event) => {
        const target = event.target as HTMLInputElement;
        const { name, value } = target;
        const newSubjects = [...subjects];
        if (name === "course" || name === "semester") {
            newSubjects[index][name] = parseInt(value);
        } else {
            newSubjects[index][name] = value;
        }
        setSubjects(newSubjects);
    };

    const addSubject = () => {
        setSubjects([...subjects,{ name: '', course: 0, semester: 0, observations: '' }]);
    };

    const handleRemove = (index: number) => {
        const newSubjects = subjects.filter((_, i) => i !== index);
        setSubjects(newSubjects);
    };

    return (
        <div>
            <h2>Añadir Asignatura</h2>
            {message && <p class="error-message">{message}</p>}
            <DegreeList/>
            {degreeID.value>0 && (
                <form action="/admin/subject" method="post">
                    {subjects.map((subject, index) => (
                        <div key={index}>
                            <label htmlFor={`name-${index}`}>Nombre Asignatura</label>
                            <input
                                type="text"
                                name="name"
                                id={`name-${index}`}
                                value={subject.name}
                                onChange={(e) => handleChange(index, e)}
                                required
                            />
                            <label htmlFor={`course-${index}`}>Curso Asignatura</label>
                            <select
                                name="course"
                                id={`course-${index}`}
                                value={subject.course}
                                onChange={(e) => handleChange(index, e)}
                                required
                            >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                            </select>
                            <label htmlFor={`semester-${index}`}>Semestre Asignatura</label>
                            <select
                                name="semester"
                                id={`semester-${index}`}
                                value={subject.semester}
                                onChange={(e) => handleChange(index, e)}
                                required
                            >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                            </select>
                            <label htmlFor={`observations-${index}`}>Observaciones</label>
                            <input
                                type="text"
                                name="observations"
                                id={`observations-${index}`}
                                value={subject.observations}
                                onChange={(e) => handleChange(index, e)}
                            />
                            {subjects.length > 1 && (
                                <button type="button" onClick={() => handleRemove(index)}>Eliminar</button>
                            )}
                        </div>
                    ))}
                    <button type="button" onClick={addSubject}>Añadir otra asignatura</button>
                    <button type="submit">Registrar</button>
                </form>
            )}
        </div>
    );
}
