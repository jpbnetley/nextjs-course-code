import { Fragment } from 'react'
import { getEventById, getAllEvents } from '../../util/api-util'
import EventSummary from '../../components/event-detail/event-summary'
import Logistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import ErrorAlert from '../../components/ui/error-alert'

const EventDetail = (props) => {

  const { selectedEvent } = props

  if (!selectedEvent) {
    return <ErrorAlert><p>No event found!</p></ErrorAlert>
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
    }
  }

}

export const getStaticPaths = async () => {
  const events = await getAllEvents()
  const paths = events.map(({ id }) => ({ params: { eventId: id } }))
  return {
    paths,
    fallback: false
  }
}

export default EventDetail