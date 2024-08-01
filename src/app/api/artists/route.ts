import { addArtist, getArtists } from "@/lib/models/artist.models";

export const GET = async (req: Request) => {
    const artists = getArtists();
    return new Response(JSON.stringify(artists), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
};

export const POST = async (req: Request) => {
    try {
        const newArtist = await req.json();
        const createdArtist = addArtist(newArtist);
        return new Response(JSON.stringify(createdArtist), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error processing POST request:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
};