export type Quote={
    id:number,
    quote:string
}

export type User={
    id:number,
    name:string,
    username:string,
    created_at:Date //Mirar si es date o string- Ejemplo: "2021-01-11T00:00:00.000Z"
}

export type Pokemon={
    id:number,
    name:string,
    type:string,
    base_experience:number
}
