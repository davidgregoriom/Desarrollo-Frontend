import { Handlers } from "$fresh/server.ts";

type newContact= {
  id: `${string}-${string}-${string}-${string}-${string}`;
  last_name: string;
  first_name: string;
  email: string;
  gender: string;
}


export const handler: Handlers = {
  async GET(request, _ctx) {
    console.log(
      `[GET] | from: ${_ctx.remoteAddr.hostname} | url: ${request.url}`,
    );
    const url = new URL(request.url);
    //console.log(url)
    //console.log(Object.keys(url))
    const data = await Deno.readTextFile("./data/contact.json");

    if (url.searchParams.has("id")) {
      const id:string = url.searchParams.get("id");
      //console.log(id)
      const contacts = JSON.parse(data);
      //console.log(contacts)
      const contact = contacts.find((c: newContact) => c.id === id);
      console.log(contacts)
      return new Response(JSON.stringify(contact), {
        headers: {
          "content-type": "application/json",
        },
      });
    }

    return new Response(data, {
      headers: {
        "content-type": "application/json",
      },
    });
  },

  async POST(request, _ctx) {
    try {
      console.log(
        `[POST] | from: ${_ctx.remoteAddr.hostname} | url: ${request.url}`,
      );
      const contact = await request.json();

      const data = await Deno.readTextFile("./data/contact.json");

      const contacts = JSON.parse(data);
      console.log(contacts)
      if (
        !contact.name || !contact.lastName || !contact.email || !contact.gender
      ) {
        return new Response("Invalid data", { status: 200 });
      }

      const newContact = {
        id: crypto.randomUUID(),
        last_name: contact.lastName,
        first_name: contact.name,
        email: contact.email,
        gender: contact.gender,
      };

      if (contacts.find((c:newContact) => c.first_name === newContact.first_name&& c.last_name===newContact.last_name&& c.email===newContact.email)) {
        return new Response("Contact already exists", { status: 200 });
      }


      contacts.push(newContact);
      //console.log(newContact)
      await Deno.writeTextFile(
        "./data/contact.json",
        JSON.stringify(contacts, null, 2),
      );

      return new Response("Contact created", { status: 200 });
    } catch (error) {
      return new Response(error, { status: 200 });
    }
  },
  async DELETE(request, _ctx) {
    try {
      console.log(
        `[DELETE] | from: ${_ctx.remoteAddr.hostname} | url: ${request.url}`,
      );
      const url = new URL(request.url);
      const id = url.searchParams.get("id");
      console.log(id)
      const data = await Deno.readTextFile("./data/contact.json");

      const contacts = JSON.parse(data);
      console.log(contacts)

      const newContacts = contacts.filter((c: any) => c.id !== id);

      console.log(newContacts)
      await Deno.writeTextFile(
        "./data/contact.json",
        JSON.stringify(newContacts, null, 2),
      );

      return new Response("Contact deleted", { status: 200 });
    } catch (error) {
      return new Response(error, { status: 200 });
    }
  },
  async PUT(request, _ctx) {
    try {
      console.log(
        `[PUT] | from: ${_ctx.remoteAddr.hostname} | url: ${request.url}`,
      );
      const url = new URL(request.url);
      //console.log(url)
      const id = url.searchParams.get("id");
      //console.log(id)
      const contact = await request.json();
      //console.log(contact)
      const data = await Deno.readTextFile("./data/contact.json");
      const contacts = JSON.parse(data);
      const index = contacts.find((c: any) => c.id === id);
      console.log(index)

      if (index === -1) {
        return new Response("Contact not found", { status: 200 });
      }

      if (
        !contact.name || !contact.lastName || !contact.email || !contact.gender
      ) {
        return new Response("Invalid data", { status: 200 });
      }

      contacts[index] = {
        id,
        last_name: contact.lastName,
        first_name: contact.name,
        email: contact.email,
        gender: contact.gender,
      };
      console.log(contacts)
      await Deno.writeTextFile(
        "./data/contact.json",
        JSON.stringify(contacts, null, 2),
      );

      return new Response("Contact updated", { status: 200 });
    } catch (error) {
      return new Response(error, { status: 200 });
    }
  },
};
