import { Characters, Data,Character } from "../types.ts";
import Axios from "npm:axios";

export async function characters(number:number): Promise<Data> {
  try {
    const characters = await Axios.get<Data>(
      `https://rickandmortyapi.com/api/character?page=${number}`,
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

//Prueba de axios para hacer un CRUD a una API Rest
export async function addcharacter():Promise<Character>{
  try{
    const character= await Axios.post<Character>(
      `https://rickandmortyapi.com/api/character/`
    );
    return character.data;
  }catch (err) {
    console.log(err);
    return <div>Ha habido un error: {err}</div>;
  }
}

export async function updatecharacter(id:number):Promise<Character>{
  try{
    const character= await Axios.put<Character>(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    return character.data;
  }catch (err) {
    console.log(err);
    return <div>Ha habido un error: {err}</div>;
  }
}

export async function deletecharacter(id:number):Promise<Character>{
  try{
    const character= await Axios.delete<Character>(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    return character.data;
  }catch (err) {
    console.log(err);
    return <div>Ha habido un error: {err}</div>;
  }
}

export async function getcharacter(id:number):Promise<Character>{
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

export async function getcharacters():Promise<Data>{
  try{
    const characters= await Axios.get<Data>(
      `https://rickandmortyapi.com/api/character/`
    );
    return characters.data;
  }catch (err) {
    console.log(err);
    return <div>Ha habido un error: {err}</div>;
  }
}

