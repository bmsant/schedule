import { updateEvent, deleteEvent } from '@/lib/models/event.models';

export const PUT = async (req: Request) => {
    const url = new URL(req.url);
    const id = url.pathname.split('/').pop();
    const updatedEvent = await req.json();
    try {
        const event = updateEvent(Number(id), updatedEvent);
        return new Response(JSON.stringify(event), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error updating event:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
};

export const DELETE = async (req: Request) => {
    const url = new URL(req.url);
    const id = url.pathname.split('/').pop();
    try {
        deleteEvent(Number(id));
        return new Response("Event deleted", { status: 200 });
    } catch (error) {
        console.error("Error deleting event:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
};