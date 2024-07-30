// src/components/EventList.tsx
"use client";
import { useEffect, useState } from "react";
import { getAllEvents } from "@/lib/services/event.services";
import Card from "../atoms/Card";
// import EventButtons from "../molecules/EventButtons";
import IconButton from "../atoms/IconButton";

interface Event {
  id: number;
  name: string;
  date: string;
  location: string;
  description: string;
}

// interface EventListProps {
//   eventId: any;
//   eventData: any;
//   onUpdate: (updatedEvent: any) => void;
//   onDelete: () => void;
// }

export default function EventList() {
  // const [isEditing, setIsEditing] = useState(false);
  // const [formData, setFormData] = useState(eventData);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getAllEvents();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  // const handleUpdate = (updatedEvent: any) => {
  //   setEvents(
  //     events.map((event) =>
  //       event.id === updatedEvent.id ? updatedEvent : event
  //     )
  //   );
  // };

  // const handleDelete = (id: number) => {
  //   setEvents(events.filter((event) => event.id !== id));
  // };

  const [visibleDescriptionId, setVisibleDescriptionId] = useState<
    number | null
  >(null);

  const toggleDescription = (id: number) => {
    setVisibleDescriptionId(visibleDescriptionId === id ? null : id);
  };

  return (
    <Card title="Schedule" className="w-[900px] h-full">
      <ul className="w-full flex flex-col gap-4">
        {events.map((event) => (
          <li className="bg-gray-700 p-2" key={event.id}>
            <div className="flex flex-row items-center justify-between">
              <h2 className="w-[220px] text-start pl-8">{event.name}</h2>
              <p className="w-[220px] text-center">{event.date}</p>
              <p className="w-[445px]" >{event.location}</p>
              <IconButton
                iconSrc={
                  visibleDescriptionId === event.id
                    ? "/icons/hide.svg"
                    : "/icons/show.svg"
                }
                onClick={() => toggleDescription(event.id)}
                className="flex justify-end"
              />
            </div>
            {visibleDescriptionId === event.id && (
              <p className="w-full p-4 bg-gray-600">{event.description}</p>
            )}
          </li>
        ))}
      </ul>
    </Card>
  );
}
