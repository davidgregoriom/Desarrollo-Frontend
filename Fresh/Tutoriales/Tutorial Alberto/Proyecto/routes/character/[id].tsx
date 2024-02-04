import {character} from '../../components/functions.tsx';
import {Character} from '../../types.ts';

type ServerSideProps = {
    params : {
        id:number,
    }
}

"use client";
export default async function Home(prop:ServerSideProps){
    const characterData:Character = await character(prop.params.id)
    return <div>
        <h1>{characterData.name}</h1>
        <h2>{characterData.id}</h2>
        <h2>{characterData.created}</h2>
        <img class="my-6" src={characterData.image} alt="Personajes"width="128" height="128"></img>

    </div>;
}
