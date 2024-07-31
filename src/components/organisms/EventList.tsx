// src/components/EventList.tsx
"use client";
import { useEffect, useState } from "react";
import { getAllEvents } from "@/lib/services/event.services";
import Card from "../atoms/Card";
import EventButtons from "../molecules/EventButtons";

interface Event {
  id: number;
  name: string;
  date: string;
  location: string;
  description: string;
}

interface EventListProps {
  showButtons?: boolean;
  isAdmin: boolean;
}

export default function EventList({ showButtons = false, isAdmin }: EventListProps) {
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

  const handleUpdate = (updatedEvent: any) => {
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
  };

  const handleDelete = (id: number) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <Card title="Schedule" className="w-[900px] h-full">
      <ul className="w-full flex flex-col gap-4">
        {events.map((event) => (
          <li className="bg-gray-700 p-2" key={event.id}>
            <div className="flex flex-row items-center justify-between">
              <h2 className="w-[220px] text-start pl-8">{event.name}</h2>
              <p className="w-[220px] text-center">{event.date}</p>
              <p className="w-[445px]">{event.location}</p>
              <EventButtons
                eventId={event.id}
                eventData={event}
                onUpdate={handleUpdate}
                onDelete={() => handleDelete(event.id)}
                isAdmin={isAdmin}
              />
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}