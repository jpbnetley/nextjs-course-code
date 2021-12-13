import transformEvents from "./transform-events"

const eventFetcher = async url => {
  const data = await fetch(url)
  const jsonData = await data.json()
  const events = transformEvents(jsonData)

  return events
}

export default eventFetcher