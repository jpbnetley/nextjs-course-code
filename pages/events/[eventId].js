import { Fragment } from 'react'
import { getEventById, getFeaturedEvents } from '../../util/api-util'
import EventSummary from '../../components/event-detail/event-summary'
import Logistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'

const EventDetail = (props) => {

  const { selectedEvent } = props

  if (!selectedEvent) {
    return <div className='center'>
      <p>Loading...</p>
    </div>
  }

  const { description, title, date, location, image } = selectedEvent

  return (
    <Fragment>
      <EventSummary title={title} />
      <Logistics date={date} address={location} image={image} imageAlt={title} />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </Fragment>
  )
}

export const getStaticProps = async context => {
  const { params } = context
  const { eventId } = params

  const event = await getEventById(eventId)
  return {
    props: {
      selectedEvent: event
    },
    revalidate: 30
  }

}

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents()
  const paths = events.map(({ id }) => ({ params: { eventId: id } }))
  return {
    paths,
    fallback: true
  }
}

export default EventDetail