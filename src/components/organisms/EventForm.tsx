"use client"
import { useState } from 'react';

import Card from "../atoms/Card";
import Form from "../molecules/Form";
import { addEvent } from '@/lib/services/event.services';
import { getAddress } from '@/lib/services/address.services';

// Define a custom type for event data
interface CustomEvent {
    name: string;
    date: string;
    location: string;
    description: string;
    [key: string]: string; // Add this line to include an index signature
}

export default function EventForm() {
    const fields = [
        { name: 'name', type: 'text', placeholder: 'Event Name' },
        { name: 'date', type: 'date', placeholder: 'Event Date' },
        { name: 'location', type: 'text', placeholder: 'Event Location' },
        { name: 'description', type: 'text', placeholder: 'Event Description' },
    ];

    const [formData, setFormData] = useState<CustomEvent>({
        name: '',
        date: '',
        location: '',
        description: ''
    });

    const [suggestions, setSuggestions] = useState<string[]>([]);

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    
        if (name === "location" && value.length > 6) {
            try {
                const response = await getAddress(value);
                const formattedSuggestions = response.features.map((feature: any) => feature.properties.label);
                setSuggestions(formattedSuggestions);
            } catch (error) {
                console.error("Error fetching address suggestions:", error);
            }
        } else {
            setSuggestions([]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await addEvent(formData);
            console.log('Event created:', formData);
        } catch (error) {
            console.error('Error creating event:', error);
        }
    };

    return (
        <Card title="Create Event" className="w-1/5 text-center">
            <Form
                className="flex flex-col gap-4"
                fields={fields}
                formData={formData}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index} onClick={() => setFormData({ ...formData, location: suggestion })}>
                        {suggestion}
                    </li>
                ))}
            </ul>
        </Card>
    );
}