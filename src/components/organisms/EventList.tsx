"use client";
import { useEffect, useState } from "react";
import { getAllEvents } from "@/lib/services/event.services";
import Card from "../atoms/Card";
import EventButtons from "../molecules/EventButtons";
import List from "../atoms/List";
import IconButton from "../atoms/IconButton";

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
  const [showDescription, setShowDescription] = useState<{ [key: number]: boolean }>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const itemsPerPage = 3; // Number of items per page

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

  const toggleDescription = (id: number) => {
    setShowDescription({ [id]: !showDescription[id] });
  };

  const handleSort = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const sortedEvents = [...events].sort((a, b) => {
    if (sortOrder === "asc") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  const filteredEvents = sortedEvents.filter((event) => {
    return event.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Calculate the paginated events
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedEvents = filteredEvents.slice(startIndex, startIndex + itemsPerPage);

  // Calculate total pages
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);

  return (
    <Card title="Schedule" className="w-full sm:w-[900px] h-full">
      <div className="flex flex-col sm:flex-row justify-between mb-4">
        <label htmlFor="search" className="sr-only">Search events</label>
        <input
          id="search"
          type="text"
          placeholder="Search events"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full sm:w-auto mb-2 sm:mb-0"
          aria-label="Search events"
        />
        <button
          onClick={handleSort}
          className="p-2 border border-gray-300 rounded"
          aria-label="Sort events"
        >
          Sort by Date ({sortOrder === "asc" ? "Ascending" : "Descending"})
        </button>
      </div>
      <List
        items={paginatedEvents}
        renderItem={(event) => (
          <div className="flex flex-col" role="listitem">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <h2 className="w-full sm:w-[220px] text-start pl-8">{event.name}</h2>
              <p className="w-full sm:w-[180px] text-center border-l-2 border-r-2 mx-4">{event.date}</p>
              <p className="w-full sm:w-[485px]">{event.location}</p>
              <IconButton
                iconSrc={showDescription[event.id] ? "/icons/hide.svg" : "/icons/show.svg"}
                onClick={() => toggleDescription(event.id)}
                className="flex justify-end size-14"
                aria-label={showDescription[event.id] ? "Hide description" : "Show description"}
              />
              <EventButtons
                eventId={event.id}
                eventData={event}
                onUpdate={handleUpdate}
                onDelete={() => handleDelete(event.id)}
                isAdmin={isAdmin}
              />
            </div>
            {showDescription[event.id] && (
              <p className="w-full p-4 bg-gray-600">{event.description}</p>
            )}
          </div>
        )}
      />
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="p-2 border border-gray-300 rounded"
          aria-label="Previous page"
        >
          Previous
        </button>
        <span className="p-2">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="p-2 border border-gray-300 rounded"
          aria-label="Next page"
        >
          Next
        </button>
      </div>
    </Card>
  );
}