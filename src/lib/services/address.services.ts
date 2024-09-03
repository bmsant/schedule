import axios from "axios";

export async function getAddress(query: string) {
  try {
    const response = await axios.get(
      `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(
        query
      )}&autocomplete=1`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching address suggestions:", error);
    throw error;
  }
}
