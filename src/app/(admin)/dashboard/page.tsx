import EventForm from "@/components/organisms/EventForm";
import EventList from "@/components/organisms/EventList";
export default function DashboardPage() {
    return (
        <section className="flex gap-4 justify-center">
            <EventList isAdmin={true} showButtons={true} />
            <EventForm />
        </section>
    );
}