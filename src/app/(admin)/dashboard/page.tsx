import ArtistForm from "@/components/organisms/ArtistForm";
import Artists from "@/components/organisms/Artists";
import EventForm from "@/components/organisms/EventForm";
import EventList from "@/components/organisms/EventList";
export default function DashboardPage() {
    return (
        <div className="flex flex-col gap-4 ">
        <section className="flex gap-4 justify-center">
            <EventList isAdmin={true} showButtons={true} />
            <EventForm />
            <ArtistForm />
        </section>
        </div>
    );
}