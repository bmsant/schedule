import EventForm from "@/components/organisms/EventForm";

export default function Home() {
  return (
    <div className="mt-10 flex flex-row justify-center gap-10">
     <EventForm />
     <EventForm />
    </div>
  );
}
