import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers ={
    get: async (req, res) => {
        const { id } = req.params;
        const event = await getEventById(id);
        res.json(event);
    },
    put: async (req, res) => {
        const { id } = req.params;
        const event = req.body;
        await updateEvent(id, event);
        res.json(event);
    },
    delete: async (req, res) => {
        const { id } = req.params;
        await deleteEvent(id);
        res.json({ id });
    },
    patch: async (req, res) => {
        const { id } = req.params;
        const event = req.body;
        await updateEvent(id, event);
        res.json(event);
    },
    post: async (req, res) => {
        const event = req.body;
        await createEvent(event);
        res.json(event);
    }
}
