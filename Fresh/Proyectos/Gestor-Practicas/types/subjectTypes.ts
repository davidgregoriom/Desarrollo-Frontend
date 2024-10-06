export type SubjectType = {
    id: number;
    name: string;
    course: number;
    semester: number;
    observations: string;
    id_required_classroom: number;
    id_degree: number;
};

export type SSP_GroupType = {
    id: number;
    id_degree: number;
    uxxi_activity_group: string;
    morning_afternoon_group: string;
};

export type DegreeType = {
    id: number;
    name: string;
    ssp_group: string;
};

export type Day_SubjectType = {
    id: number;
    id_SSP_group: number;
    id_calendar: number;
    day_week: string;
    start_time: string;
    end_time: string;
};

export type CalendarType = {
    id: number;
    semester: number;
    course_year:string;
    startDate: string;
    endDate: string;
};
