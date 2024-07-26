"use client"
import { useState } from 'react';
import Card from "../atoms/Card";
import Form from "../molecules/Form";

export default function EventForm() {
    const fields = [
        { name: 'name', type: 'text', placeholder: 'Event Name' },
        { name: 'date', type: 'date', placeholder: 'Event Date' },
        { name: 'location', type: 'text', placeholder: 'Event Location' },
        { name: 'description', type: 'text', placeholder: 'Event Description' },
    ];

    const [formData, setFormData] = useState(
        fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <Card title="Create Event" className="w-1/5 text-center">
            <Form className="flex flex-col gap-4" fields={fields} formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
        </Card>
    );
}