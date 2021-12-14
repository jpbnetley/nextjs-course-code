import { useRouter } from 'next/router'
import Head from 'next/head';

import EventList from '../../components/events/event-list'
import EventsSearch from '../../components/events/events-search'
import { getAllEvents } from '../../util/api-util';

const Events = ({ events = [] }) => {
  // const events = getAllEvents();
  const router = useRouter()

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }

  return (
    <>
      <Head>
        <title>All Events</title>
        <meta name='description' content='Find a lot of great events that allow you to evolve' />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  )
}

export const getStaticProps = async () => {
  const events = await getAllEvents()
  return {
    props: {
      events
    },
    revalidate: 60
  }
}

export default Events