import { h, useState } from 'preact/hooks';
import { Joke } from '../types.ts';
import JokesList from '../components/JokesComponent.tsx';
type Data={
    Jokes: Array<Joke>
}

export default function JokesIsland(props:Data) {

    return <JokesList jokes={props.Jokes} />;

}
