import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { degreesArray } from "../../../signals/degreesArray.ts";
import { DegreeType } from "../../../types/subjectTypes.ts";
import Subjects_List from "../../../islands/admin/SubjectClient/Subjects_List.tsx";

/*
export const config: RouteConfig = {
  skipInheritedLayouts: true, // Skip already inherited layouts
};
*/

type Data={
    message?:string;
}



// Implementar: Send verification email using smtp module
// Implementar logo Fresh https://deno.land/x/fresh@1.6.8

export const handler:Handlers<Data> ={
    GET:async(_req:Request, ctx:FreshContext<Data>)=>{
        const API_URL = Deno.env.get("API_URL2");
        if (!API_URL) {
            return new Response("API_URL are required", {
                status: 500,
            });
        }
        const response = await fetch(`${API_URL}/getDegrees`); // Funciona url
        const degree: DegreeType[] = await response.json();
        if(!degree){
            return ctx.render({ message: 'No se encontraron grados'});
        }
        degreesArray.value = degree;
        return ctx.render({ message: ''});
    }
}

export default function Subjects_Route(props:PageProps<Data>){
    return (
        <div>
            <Subjects_List props={props.data}/>
        </div>
    )
}
