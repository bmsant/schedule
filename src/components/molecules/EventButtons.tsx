"use client";
import { useState } from "react";
import IconButton from "../atoms/IconButton";
import { updateEvent, deleteEvent } from "@/lib/services/event.services";
import Input from "../atoms/Input";

interface EventButtonsProps {
  eventId: any;
  eventData: any;
  onUpdate: (updatedEvent: any) => void;
  onDelete: () => void;
  isAdmin: boolean;
}

export default function EventButtons({
  eventId,
  eventData,
  onUpdate,
  onDelete,
  isAdmin,
}: EventButtonsProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(eventData);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      await updateEvent(eventId, formData);
      onUpdate(formData);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteEvent(eventId);
      onDelete();
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData(eventData); // Optionally reset form data to original event data
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="flex flex-row gap-4">
      {isEditing ? (
        <>
          <IconButton
            iconSrc="/icons/save.svg"
            onClick={handleSave}
            className="flex justify-end"
          />
          <IconButton
            iconSrc="/icons/hide.svg"
            onClick={handleCancel}
            className="flex justify-end"
          />
        </>
      ) : (
        <>
          <IconButton
            iconSrc="/icons/edit.svg"
            onClick={handleEdit}
            className="flex justify-end size-14"
          />
          <IconButton
            iconSrc="/icons/delete.svg"
            onClick={handleDelete}
            className="flex justify-end size-14"
          />
        </>
      )}
      {isEditing && (
        <div className="flex flex-row flex-wrap gap-4 mt-2">
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
}