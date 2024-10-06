import { FreshContext, Handlers } from "$fresh/server.ts";
import AddForm from "../components/AddForm.tsx";
import ContactModel from "../db/Contact.ts";

export const handler: Handlers = {
  POST: async (req: Request, _ctx: FreshContext) => {
    try {
      const form = await req.formData();
      const data = {
        name: form.get("name"),
        email: form.get("email"),
      };
      const find = await ContactModel.findOne({email: data.email});
      const headers = new Headers();
      if(find){
        headers.set("location", "/");
        return new Response("Email already exists", {
          headers,
          status: 400,
        });
      }
      await ContactModel.create(data);
      headers.set("location", "/");
      return new Response("", {
        status: 303,
        headers
      });
    } catch (error) {
      const headers = new Headers();
      headers.set("location", "/");
      return new Response(error.message, {
        headers,
        status: 500,
      });
    }
  },
};

const Page = () => {
  return (
    <div>
      <AddForm />
    </div>
  );
};

export default Page;
