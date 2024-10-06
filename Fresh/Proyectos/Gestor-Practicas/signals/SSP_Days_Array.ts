import { signal } from "@preact/signals";
import { Day_SubjectType } from "../types/subjectTypes.ts";

type SSP_Days_Groups ={
    id: number;
    id_degree: number;
    uxxi_activity_group: string;
    morning_afternoon_group: string;
    days_subjects: Day_SubjectType[];
}

export const SSP_Days_Array = signal<SSP_Days_Groups[]>([]);
