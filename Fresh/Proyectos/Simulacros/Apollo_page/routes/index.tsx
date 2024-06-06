import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { Request, FreshContext,Handlers,Response} from "$fresh/server.ts";

export const handler:Handlers={
  GET: async(_req:Request,ctx:FreshContext):Promise<Response>=>{
    const response = await fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        query: `
          query {
            characters(page:1){
              results{
                id
                name
                status
              }
            }
          }
        `
      })
    });
    console.log(response);
    console.log(response.json());
    console.log(Object.keys(response));
    const data= await response.json();
    return ctx.render(data);
  },
  POST: async (req:Request,ctx:FreshContext):Promise<Response>=>{
    const formData = await req.formData();
    const json = await formData.toJSON();
    const response = await fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        query: `
          mutation ($name: String!, $status: String!) {
            characters(input.{name: $name, status: $status}){
              results{
                id
                name
                status
              }
            }
          }
        `,
        variables: JSON.stringify(json)
      })
    });
    const data = await response.json();
    return ctx.render(data);
  }
}


export default function Home() {
  const count = useSignal(3);
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
        <p class="my-4">
          Try updating this message in the
          <code class="mx-2">./routes/index.tsx</code> file, and refresh.
        </p>
        <Counter count={count} />
      </div>
    </div>
  );
}
