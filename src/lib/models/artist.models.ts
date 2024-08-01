import fs from "fs";
import path from "path";

const dbFilePath = path.resolve(process.cwd(), "src/db/artists.json");

export const getArtists = () => {
  try {
    if (!fs.existsSync(dbFilePath)) {
      fs.writeFileSync(
        dbFilePath,
        JSON.stringify({ artists: [] }, null, 2),
        "utf-8"
      );
    }

    const jsonData = fs.readFileSync(dbFilePath, "utf8");
    if (!jsonData) {
      return [];
    }

    return JSON.parse(jsonData).artists;
  } catch (error) {
    console.error("Error reading or parsing artists.json:", error);
    return [];
  }
};

export const saveArtist = (artists: any) => {
  try {
    const jsonData = JSON.stringify({ artists }, null, 2);
    fs.writeFileSync(dbFilePath, jsonData, "utf-8");
  } catch (error) {
    console.error("Error writing to artists.json:", error);
  }
};

export const addArtist = (newArtist: any) => {
  const artists = getArtists();
  const maxId =
    artists.length > 0
      ? Math.max(...artists.map((artist: any) => artist.id || 0))
      : 0;
  newArtist.id = maxId + 1;
  artists.push(newArtist);
  saveArtist(artists);
  return newArtist;
};
