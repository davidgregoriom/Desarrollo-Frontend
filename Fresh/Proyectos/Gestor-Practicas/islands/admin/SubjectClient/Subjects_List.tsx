import { useState,useEffect } from 'preact/hooks';
import { degreeID } from "../../../signals/degreeID.ts";
import DegreeList from "../../../components/DegreeList.tsx";
import { subjectName } from "../../../signals/subjectName.ts";
import { SubjectType } from "../../../types/subjectTypes.ts";

type Subject_SSP_Type = {
    id:number;
    name:string;
    course:number;
    semester:number;
    observations:string;
    uxxi_activity_group:string;
    morning_afternoon_group:string;
    id_SSP_group:number;
};


export default function Subjects_List({ message }: { message?: string }) {
    const [subjects, setSubjects] = useState<Omit<SubjectType,"id_required_classroom">[]>([]);
    const fecthSubjectsSSP = async () => {
        const response = await fetch(`/api/subjects_List`);
        if (response.ok) {
            const data = await response.json();
            setSubjects(data);
        } else {
            console.error("Error fetching subjects");
        }
    };

    useEffect(() => {
        fecthSubjectsSSP();
    }, [subjectName.value]);
    return (
        <div>
            <h2>Listado de Asignaturas</h2>
            {message && <p class="error-message">{message}</p>}
            <DegreeList/>
            {degreeID.value>0 && (
                <div>
                    <input
                    type="text"
                    value={subjectName.value}
                    onInput={(e) => (subjectName.value = e.currentTarget.value)}
                    />
                    {subjects && (
                        <div>
                            {subjects.map((subject) => (
                            <div key={subject.id}>
                                <h3>{subject.name}</h3>
                                <p>{subject.course}</p>
                                <p>{subject.semester}</p>
                                <p>{subject.observations}</p>
                                <a href ={`/admin/subjects/SSP_Groups/${subject.id}`}>Mirar Grupos</a>
                            </div>
                            ))}
                        </div>
                        )
                    }
              </div>
            )}
        </div>
    );
}
