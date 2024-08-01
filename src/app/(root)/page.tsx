import Artists from "@/components/organisms/Artists";
import EventList from "@/components/organisms/EventList";

export default function Home() {
  return (
    <>
      <section className="min-h-svh w-full flex flex-col gap-4 justify-around items-center">
        <h1 className="text-5xl font-bold text-center">Welcome to Paris021</h1>
        <EventList isAdmin={false} showButtons={false} />
      </section>
      <section className="flex flex-col w-10/12 gap-8 p-4 min-h-72a">
        <p className="text-xl text-center text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </section>
      <section className="w-10/12 min-h-svh">
        <Artists />
      </section>
    </>
  );
}
