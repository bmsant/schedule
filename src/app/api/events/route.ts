import { addEvent, getEvents } from "@/lib/models/event.models";

export const GET = async (req: Request) => {
    const events = getEvents();
    return new Response(JSON.stringify(events), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
};

export const POST = async (req: Request) => {
    try {
        const newEvent = await req.json();
        const createdEvent = addEvent(newEvent);
        return new Response(JSON.stringify(createdEvent), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error processing POST request:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
};