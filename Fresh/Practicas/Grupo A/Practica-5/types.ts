export type user= {
    email:string;
    password:string;
}

export type message={
    id:number;
    email:string;
    title:string;
    text:string;
    date:Date;
}

export type app={
    user:user;
    message:message[];
}
