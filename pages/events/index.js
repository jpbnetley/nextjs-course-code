import { useRouter } from 'next/router'

import EventList from '../../components/events/event-list'
import EventsSearch from '../../components/events/events-search'
import { getFeaturedEvents } from '../../util/api-util';

const Events = ({ events = [] }) => {
  // const events = getAllEvents();
  const router = useRouter()

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  )
}

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents()
  return {
    props: {
      events: featuredEvents
    }
  }
}

export default Events