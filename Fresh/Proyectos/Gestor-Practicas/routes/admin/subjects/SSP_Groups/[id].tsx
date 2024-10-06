import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Day_SubjectType } from "../../../../types/subjectTypes.ts";
import { SSP_Days_Array } from "../../../../signals/SSP_Days_Array.ts";
/*
export const config: RouteConfig = {
  skipInheritedLayouts: true, // Skip already inherited layouts
};
*/
type Data={
    SSP_Days_Group: SSP_Days_Groups[];
    message?:string;
}

// Implementar: Send verification email using smtp module
// Implementar logo Fresh https://deno.land/x/fresh@1.6.8

type SSP_Days_Groups ={
    id: number;
    id_degree: number;
    uxxi_activity_group: string;
    morning_afternoon_group: string;
    days_subjects: Day_SubjectType[];
}

export const handler:Handlers= {
    GET:async(_req:Request, ctx:FreshContext<Data>)=>{
        const SSP_ID = ctx.params.id;
        if(!SSP_ID){
            const headers = new Headers();
            headers.set("Location","/admin/subjects");
            return new Response("",{
                status:307,
                headers
            });
        }
        const API_URL = Deno.env.get("API_URL2");
        if (!API_URL) {
            return new Response("API_URL are required", {
                status: 500,
            });
        }
        const response = await fetch(`${API_URL}/getSSP_Days_Subject/${SSP_ID}`);
        const SSP_Days_Group: SSP_Days_Groups[] = await response.json();
        if(!SSP_Days_Group){
            return ctx.render({ SSP_Days_Group:[],message: 'No se encontraron grados'});
        }
        SSP_Days_Array.value = SSP_Days_Group;
        return ctx.render({SSP_Days_Group, message: ''});
    },
    POST:async(req:Request,ctx:FreshContext<Data>) =>{
    }
}

export default function SSP_Groups_Router(props:PageProps<Data>){//Añadir dos páginas una para la tabla del listado de horarios y otra para el formulario de añadir horario
    return (
        <div>
            <SS
        </div>
    )
}
