import EventForm from "@/components/organisms/EventForm";
import EventList from "@/components/organisms/EventList";

export default function Home() {
  return (
    <div className="mt-10 flex flex-row justify-center gap-10">
     <EventList />
     <EventForm />
    </div>
  );
}
