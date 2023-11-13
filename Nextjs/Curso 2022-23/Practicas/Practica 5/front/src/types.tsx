export type ResultsAPI={
    count:number;
    pages:number;
    next?:number;
    previous?:number;
    results:Doctor[];
}
export type Results = Omit<ResultsAPI,"results"> &{
    results:Doctor[];
}

export type DoctorAPI={
    id:string;
    name:string;
    surname:string;
    quotes:Quotes[];
}

export type Doctor=Omit<DoctorAPI,"Quotes">&{
    quotes:Quotes[];
}

export type QuotesAPI={
    id:string;
    dni:string;
    name:string;
    surname:string;
    date:Date;
}

export type Quotes=Omit<QuotesAPI,"id">&{
    id:string;
}
