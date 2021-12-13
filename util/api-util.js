import transformEvents from "./events/transform-events"
import filterEvents from './events/filter-events'

export const firebaseDbUrl = process.env.databasePath
export const firebaseEventsUrl = `${firebaseDbUrl}/Events.json`

export const getAllEvents = async () => {
  const query = firebaseEventsUrl

  const response = await fetch(query)
  const data = await response.json()

  const events = transformEvents(data)
  return events
}

export const getFeaturedEvents = async () => {
  //for tutorial purposes, loading in all of the events.
  const allEvents = await getAllEvents()
  return allEvents.filter((event) => event.isFeatured);
}

export const getEventById = async id => {
  const allEvents = await getAllEvents()
  return allEvents.find((event) => event.id === id);
}

export const getFilteredEvents = async dateFilter => {
  const { year, month } = dateFilter;

  const allEvents = await getAllEvents()

  const filteredEvents = filterEvents(allEvents, year, month)

  return filteredEvents;
}
