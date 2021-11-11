import { Fragment } from 'react';
import { getFeaturedEvents } from '../dummy-data'
import EventList from '../components/events/event-list';

const HomePage = () => {

  const featuredEvents = getFeaturedEvents()

  return (
    <Fragment>
      <div>
        <EventList items={featuredEvents} />
      </div>
    </Fragment>
  );
}

export const getStaticProps = () => {

  return {
    props: {
      posts: [],
    },
  };
}

export default HomePage;
