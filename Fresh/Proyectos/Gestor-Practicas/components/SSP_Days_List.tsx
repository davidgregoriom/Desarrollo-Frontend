import { Day_SubjectType } from "../types/subjectTypes.ts";

type SSP_Days_Groups ={
    id: number;
    id_degree: number;
    uxxi_activity_group: string;
    morning_afternoon_group: string;
    days_subjects: Day_SubjectType[];
}

type Props={
    SSP_Days_Group: SSP_Days_Groups[];
    message?:string;
}

export default function SubjectList(props:Props){
    const {SSP_Days_Group,message}=props;
    return(
        <div>
             <h2>Listado de Grupos</h2>
             {message && <p class="error-message">{message}</p>}
             {
                SSP_Days_Group.map((group)=>(
                    <div key={group.id}>
                        <h3>{group.uxxi_activity_group}</h3>
                        <p>{group.morning_afternoon_group}</p>
                       {

                       }
                    </div>
                ))
             }
        </div>
    )
}
