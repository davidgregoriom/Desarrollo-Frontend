import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { Character } from "../../types.ts";

export const handler: Handlers = {
  async GET(_req: Request, ctx: FreshContext<unknown, Character>) {
    try {
      const { name } = ctx.params;
      const character = await Axios.get<Character>(
        `https://rickandmortyapi.com/api/character/${name}`,
      );

      return ctx.render({...character.data,id});
    } catch (e) {
      console.error(e);
      throw new Error("Ha habido un error");
    }
  },
};

export default function Page(props: PageProps<Character>) {

  try {
    return (
      <form>
        <form method="get">
                <input type="text" name="name" value={props.data.name||""}></input>
                <button type="submit">Enviar</button>
            </form>
      </form>
    );
  } catch (e) {
    return <div>Ha habido un error</div>;
  }
}
