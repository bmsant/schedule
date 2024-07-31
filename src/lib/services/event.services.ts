import api from './api.instance'

interface CustomEvent {
    name: string;
    date: string;
    location: string;
    description: string;
}

//fetch events
export async function getAllEvents() {
  try {
    const response = await api.get('/events')
    return response.data
  } catch (error) {
    console.error('Error fetching events:', error)
    throw error
  }
}

//add event
export async function addEvent(event: CustomEvent) {
  try {
    await api.post('/events', event)
  } catch (error) {
    console.error('Error adding event:', error)
    throw error
  }
}

//get event by id
export async function getEventById(id: string) {
  try {
    const response = await api.get(`/events/${id}`)
    return response.data
  } catch (error) {
    console.error('Error fetching event by id:', error)
    throw error
  }
}

//update event
export async function updateEvent(id: string, updatedEvent: Event) {
  try {
    await api.put(`/events/${id}`, updatedEvent)
  } catch (error) {
    console.error('Error updating event:', error)
    throw error
  }
}

//delete event
export async function deleteEvent(id: string) {
  try {
    await api.delete(`/events/${id}`)
  } catch (error) {
    console.error('Error deleting event:', error)
    throw error
  }
}