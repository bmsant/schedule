import fs from "fs";
import path from "path";

const dbFilePath = path.resolve(process.cwd(), "src/db/events.json");

export const getEvents = () => {
    try {
    if (!fs.existsSync(dbFilePath)) {
      fs.writeFileSync(
        dbFilePath,
        JSON.stringify({ events: [] }, null, 2),
        "utf-8"
      );
    }

    const jsonData = fs.readFileSync(dbFilePath, "utf8");
    if (!jsonData) {
      return [];
    }

    return JSON.parse(jsonData).events;
  } catch (error) {
    console.error("Error reading or parsing events.json:", error);
    return [];
  }
};

export const saveEvents = (events: any) => {
  try {
    const jsonData = JSON.stringify({ events }, null, 2);
    fs.writeFileSync(dbFilePath, jsonData, "utf-8");
  } catch (error) {
    console.error("Error writing to events.json:", error);
  }
};

export const addEvent = (newEvent: any) => {
  const events = getEvents();
  const maxId =
    events.length > 0
      ? Math.max(...events.map((event: any) => event.id || 0))
      : 0;
  newEvent.id = maxId + 1;
  events.push(newEvent);
  saveEvents(events);
  return newEvent;
};

export const updateEvent = (id: number, updatedEvent: any) => {
  const events = getEvents();
  const eventIndex = events.findIndex((event: any) => event.id === id);
  if (eventIndex !== -1) {
    events[eventIndex] = { ...events[eventIndex], ...updatedEvent };
    saveEvents(events);
    return events[eventIndex];
  } else {
    throw new Error(`Event with id ${id} not found`);
  }
};

export const deleteEvent = (id: number) => {
  const events = getEvents();
  const updatedEvents = events.filter((event: any) => event.id !== id);
  if (events.length === updatedEvents.length) {
    throw new Error(`Event with id ${id} not found`);
  }
  saveEvents(updatedEvents);
};
