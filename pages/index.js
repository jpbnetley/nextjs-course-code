import Head from 'next/head';
import { Fragment } from 'react';
import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../util/api-util';

const HomePage = ({ events }) => (
  <div>
    <Head>
      <title>NextJS Events</title>
      <meta name='description' content='Find a lot of great events that allow you to evolve' />
    </Head>
    <EventList items={events} />
  </div>
);


export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents()
  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}

export default HomePage;
