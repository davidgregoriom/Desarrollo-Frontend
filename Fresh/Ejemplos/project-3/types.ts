export type CharacterProps = {
    name: string;
    image: string;
    status: string;
};

export type Character = {
    id: string;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
}

type Info ={
    count: number;
    pages: number;
    next: string;
    prev: string;
}

export type CharacterResponse = {
    info:Info;
    results:Character[];
}


