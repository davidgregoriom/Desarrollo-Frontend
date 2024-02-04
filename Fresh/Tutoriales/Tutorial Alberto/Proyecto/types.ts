export type Characters= {
    id: number;
    name:string;
    image:string;
}
export type Data={
    results: Characters[];
}


export type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: { name: string };
    location: { name: string };
    image: string;
    episode: string[];
    created: string;
};
