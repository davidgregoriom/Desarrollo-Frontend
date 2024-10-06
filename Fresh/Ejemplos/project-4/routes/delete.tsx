import { Handlers} from "$fresh/server.ts";
import ContactModel from "../db/Contact.ts";
import DeleteForm  from "../components/DeleteForm.tsx";

export const handler:Handlers ={
    DELETE : async (req:Request)=>{
        const formData = await req.formData();
        const email = formData.get("email")?.toString() || "";
        const name = formData.get("name")?.toString() || "";
        if(name && email){
            const find = await ContactModel.findOne({email,name});
            if(!find){
                return new Response("Contact not found",{
                    status: 404
                });
            }
            await ContactModel.deleteOne({email,name});
            return new Response("Contact deleted",{
                status: 200
            });
            // delete the contact with id
        }else{
            return new Response("Invalid request",{
                status: 400
            });
        }
    }
}

export default function Delete(){
    return <DeleteForm/>;
}
