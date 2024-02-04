import { Characters, Data,Character } from "../types.ts";
import Axios from "npm:axios";

export async function characters(): Promise<Data> {
  try {
    const characters = await Axios.get<Data>(
      "https://rickandmortyapi.com/api/character",
    );
    return characters.data;
  } catch (err) {
    console.log(err);
    return <div>Ha habido un error: {err}</div>;
  }
}


export async function character(id:number):Promise<Character>{
  try{
    const character= await Axios.get<Character>(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    return character.data;
  }catch (err) {
    console.log(err);
    return <div>Ha habido un error: {err}</div>;
  }
}
