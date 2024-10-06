export type BookingType = {
    id: number;
    name: string;
    start_time: string;
    end_time: string;
    date: Date;
    number_students: number;
    id_user: number;
    id_classroom: number;
    id_subject: number;
};

export type ClassroomType = {
    id: number;
    location: string;
    name: string;
    computers: boolean;
    capacity: number;
};
