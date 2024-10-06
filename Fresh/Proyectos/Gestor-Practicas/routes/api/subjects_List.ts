import { subjectName } from "../../signals/subjectName.ts";
import { degreeID } from "../../signals/degreeID.ts";
import { FreshContext, Handlers } from "$fresh/server.ts";
import { SubjectType } from "../../types/subjectTypes.ts";

export const handler: Handlers = {
  GET: async () => {
    const Degree_ID:number=degreeID.value;
    const Subject_Name:String=subjectName.value;
    const API_URL = Deno.env.get("API_URL2");
    let response: Response;

    if (!API_URL) {
      return new Response("API_URL are required", {
        status: 500,
      });
    }
    if(Subject_Name===""){
      response = await fetch(`${API_URL}/`, {
        body: JSON.stringify({ Degree_ID }),
      });
    }else{
      response = await fetch(`${API_URL}/`, {
        body: JSON.stringify({ Degree_ID, Subject_Name }),
      });
    }

    if (!response.ok) {
      return new Response("Error fetching books", { status: 500 });
    }

    const data:Omit<SubjectType,"id_required_classroom">[] = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  },
};


