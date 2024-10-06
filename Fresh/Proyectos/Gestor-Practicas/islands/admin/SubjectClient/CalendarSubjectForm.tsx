import { useState } from 'preact/hooks';
import { degreeID } from "../../../signals/degreeID.ts";
import { subjectID } from "../../../signals/subjectID.ts";
import { yearCalendarID } from "../../../signals/yearCalendarID.ts";
import DegreeList from "../../../components/DegreeList.tsx"
import SubjectList from "../../../components/SubjectList.tsx"
import YearCalendarList from "../../../components/YearCalendarList.tsx"

type subject = {
    name: string;
    course: number;
    semester: number;
    observations: string;
};

export default function CalendarSubjectForm({ message }: { message?: string }) {
    const [Calendar, setCalendar] = useState<subject[]>([{ name: '', course: 0, semester: 0, observations: '' }]);

    const handleDegreeChange = (event) => {
        degreeID.value= parseInt(event.target.value);
    };

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
               <SubjectList/>
               {subjectID.value>0 && (
                <YearCalendarList/>
                {yearCalendarID.value>0 && (


                )}
                )}
            )}
        </div>
    );
}
