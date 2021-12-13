import { Fragment } from 'react';
import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../util/api-util';

const HomePage = ({ events }) => (
  <Fragment>
    <div>
      <EventList items={events} />
    </div>
  </Fragment>
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
