export const getAllEvents = async () => {
  const url = process.env.databasePath
  const query = `${url}/Events.json`

  const response = await fetch(query)
  const data = await response.json()

  const events = Object.keys(data)?.map(event => ({
    id: event,
    ...data[event]
  })
  ) || []

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
