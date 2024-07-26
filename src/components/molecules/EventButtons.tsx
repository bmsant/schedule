"use client"
import { useState } from 'react';
import Button from '../atoms/Button';
import { updateEvent, deleteEvent } from '@/lib/services/event.services';
import Input from '../atoms/Input';

interface EventButtonsProps {
    eventId: any;
    eventData: any;
    onUpdate: (updatedEvent: any) => void;
    onDelete: () => void;
}

export default function EventButtons({ eventId, eventData, onUpdate, onDelete }: EventButtonsProps) {
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
            console.error('Error updating event:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await deleteEvent(eventId);
            onDelete();
        } catch (error) {
            console.error('Error deleting event:', error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            {isEditing ? (
                <div className='flex flex-row flex-wrap gap-4 mt-2'>
                    <Button onClick={handleSave} variant='secondary'>Save</Button>
                    <Input type="text" name="name" value={formData.name} onChange={handleChange} />
                    <Input type="date" name="date" value={formData.date} onChange={handleChange} />
                    <Input type="text" name="location" value={formData.location} onChange={handleChange} />
                    <Input type="text" name="description" value={formData.description} onChange={handleChange} />
                </div>
            ) : (
                <div className='flex flex-rox gap-4'>
                    <Button onClick={handleEdit} variant='secondary'>Edit</Button>
                    <Button onClick={handleDelete} variant='tertiary'>Delete</Button>
                </div>
            )}
        </div>
    );
}