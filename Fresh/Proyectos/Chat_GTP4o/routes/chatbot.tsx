import { Handlers, FreshContext,PageProps} from "$fresh/server.ts";
import  OpenAI from "openai";
import  Forms from "../components/Form.tsx";

type Data={
    messages: Array<{role: string, content: string}>;

}

const handler:Handlers ={
    POST : async (req:Request, ctx:FreshContext) => {
        try{
            const url = new URL(req.url);
            const form = await req.formData();
            const question = form.get("question")?.toString() ?? "";

            const openai = new OpenAI();
            const response = await openai.chat.complementions.create({
                model: "gpt-4o",
                messages: [
                    { role: "user", content: `${question}` },
                ],
            });
            for await ( const message of response.data.choices){
                ctx.data.message = message.message.content;
                ctx.render(message.message.content);
            }
        }catch(error){
            console.error(error);
        }

    }
}

export default function Page(props:PageProps<Data>){
    return(
        <Forms message={props.data?.message}/>
    )
}
