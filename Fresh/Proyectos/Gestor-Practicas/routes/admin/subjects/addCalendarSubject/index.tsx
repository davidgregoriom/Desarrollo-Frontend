import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import SubjectForm from "../../../../islands/admin/SubjectClient/SubjectForm.tsx";
import { SubjectType,DegreeType } from "../../../../types/subjectTypes.ts";
import { degreeID } from "../../../../signals/degreeID.ts";
import { degreesArray } from "../../../../signals/degreesArray.ts";
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
        // Realiza la solicitud fetch para obtener el objeto degree
        const API_URL = Deno.env.get("API_URL2");
        if (!API_URL) {
            return new Response("API_TOKEN and API_URL are required", {
                status: 500,
            });
        }
        const response= await fetch(`${API_URL}/getDegrees`); // Funciona url
        const degree: DegreeType[] = await response.json();
        if(!degree){
            return ctx.render({ message: 'No se encontraron grados'});
        }
        degreesArray.value = degree;
        return ctx.render({ message: ''});
    },
    POST:async(req:Request,ctx:FreshContext<Data>) =>{
        //const url= new URL(req.url);
        const formData = await req.formData();
        const subjects: Omit<SubjectType,"id"|"id_required_classroom">[] = [];
        const entries = Array.from(formData.entries());
        const subjectCount = entries.filter(([key]) => key.startsWith('name')).length;

        for (let i = 0; i < subjectCount; i++) {
            const subject: Omit<SubjectType,"id"|"id_required_classroom"> = {
                name: formData.get(`name-${i}`)?.toString() || '',
                course: parseInt(formData.get(`course-${i}`)?.toString() || '1'),
                semester: parseInt(formData.get(`semester-${i}`)?.toString() || '1'),
                observations: formData.get(`observations-${i}`)?.toString() || '',
                id_degree:degreeID.value
            };
            subjects.push(subject);
        }

        const response = await fetch( `${Deno.env.get("API_URL")}/postSubject`,{  // Funciona url
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(subjects)
        });
        const data = await response.json();

        return ctx.render({
            message: data.message
        });

    }
}

export default function SubjectRoute(props:PageProps<Data>){
   return <SubjectForm message={props.data?.message}/>
}
