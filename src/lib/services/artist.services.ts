import api from './api.instance'

interface Artist {
    name: string;
    location: string;
    role: string;
    description: string;
}

export async function getAllArtists() {
    try {
      const response = await api.get('/artists')
      return response.data
    } catch (error) {
      console.error('Error fetching events:', error)
      throw error
    }
  }

  export async function addArtist(artist: Artist) {
    try {
      await api.post('/artists', artist)
    } catch (error) {
      console.error('Error adding artits:', error)
      throw error
    }
  }