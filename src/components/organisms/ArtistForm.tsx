"use client";
import { useState } from "react";

import Card from "../atoms/Card";
import Form from "../molecules/Form";
import { addArtist } from "@/lib/services/artist.services";

// Define a custom type for event data
interface Artist {
  name: string;
  location: string;
  role: string;
  description: string;
  [key: string]: string; // Add this line to include an index signature
}

export default function ArtistForm() {
  const fields = [
    { name: "name", type: "text", placeholder: "Artist Name" },
    { name: "location", type: "text", placeholder: "Artist Location" },
    { name: "role", type: "text", placeholder: "Artist Role" },
    { name: "description", type: "text", placeholder: "Artist Description" },
  ];

  const [formData, setFormData] = useState<Artist>({
    name: "",
    location: "",
    role: "",
    description: "",
  });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addArtist(formData);
      console.log("Artist created:", formData);
    } catch (error) {
      console.error("Error creating artist:", error);
    }
  };

  return (
    <Card title="Create Artist" className="w-1/5 text-center">
      <Form
        className="flex flex-col gap-4"
        fields={fields}
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </Card>
  );
}
