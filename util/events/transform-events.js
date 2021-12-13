const transformEvents = data => {
  const events = Object.keys(data)?.map(event => ({
    id: event,
    ...data[event]
  })
  ) || []

  return events
}

export default transformEvents
