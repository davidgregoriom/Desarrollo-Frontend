export type Character = {
    id: string;
    name: string;
    image: string;
    status: string;
};

export type CharacterProps = {
    name: string;
    image: string;
    status: string;
};
export type CharacterResponse = {
    results: Character[];
};
