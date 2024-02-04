
"use client";
export default function Home(){

    const app
    return <div>
        <h1>Personas de Rick and Morty:</h1>
        <ul>
        {charactersData.results.map((character: Characters) => {
            return <li key={character.id}>
                {character.name},
                <a href={`./character/${character.id}.tsx`}>
                <img class="my-6" src={character.image} alt="Personajes"width="128" height="128"></img>
                </a>
                </li>;
        })}
        </ul>
    </div>;
}
