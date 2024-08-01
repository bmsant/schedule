"use client";

import { getAllArtists } from "@/lib/services/artist.services";
import { useEffect, useState } from "react";
import Card from "../atoms/Card";
import List from "../atoms/List";

interface Artist {
  id: number;
  name: string;
  location: string;
  role: string;
  description: string;
}

export default function Artists() {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const data = await getAllArtists();
        setArtists(data);
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
    };

    fetchArtists();
  }, []);

  return (
    <>
    <h1 className="text-3xl font-bold text-center mb-12">Artists</h1>
    <List
      className="gap-32 my-36"
      items={artists}
      renderItem={(artist, index) => (
        <div
          className="flex flex-col sm:flex-row items-center justify-between p-4 gap-4 bg-gray-700 rounded-lg mb-4"
          role="listitem"
        >
          <div
            className={`w-full h-96 border-gray-400 border-2 text-center content-center sm:w-1/3 ${
              index % 2 === 0
                ? "order-1 rounded-bl-full sm:order-2"
                : "order-1 rounded-br-full"
            }`}
          >
            {/* <img src={`/path/to/photo/${artist.id}.jpg`} alt={`${artist.name}'s photo`} className="w-full h-auto rounded-lg" /> */}
            Photo Here
          </div>
          <div
            className={`w-full flex flex-col min-h-80 justify-start sm:w-2/3 p-4 ${
              index % 2 === 0 ? "order-2 items-end sm:order-1" : "order-2"
            }`}
          >
            <div className="flex flex-col sm:flex-row items-baseline justify-start gap-6 mb-4">
              <h2 className="text-xl font-bold">{artist.name}</h2>
              <p className="text-sm text-gray-400">{artist.location}</p>
              <p className="text-sm text-gray-400">{artist.role}</p>
            </div>
            <p className="text-gray-300">{artist.description}</p>
          </div>
        </div>
      )}
    />
    </>
  );
}
