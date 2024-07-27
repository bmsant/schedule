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
  eventId: any;
  eventData: any;
  onUpdate: (updatedEvent: any) => void;
  onDelete: () => void;
}


export default function EventList({
  eventId,
  eventData,
  onUpdate,
  onDelete,
}: EventListProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(eventData);
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
    <Card title="Event List" className="w-1/2 text-center">
      <ul className="flex flex-col gap-4">
        {events.map((event) => (
          <li className="bg-gray-700 flex flex-row gap-4" key={event.id}>
            <h2>{event.name}</h2>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <p>{event.description}</p>
            <EventButtons
              eventId={event.id}
              eventData={event}
              onUpdate={handleUpdate}
              onDelete={() => handleDelete(event.id)}
            />
          </li>
        ))}
      </ul>
    </Card>
  );
}
