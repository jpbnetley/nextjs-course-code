import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { getEventById } from '../../dummy-data'
import EventSummary from '../../components/event-detail/event-summary'
import Logistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import ErrorAlert from '../../components/ui/error-alert'

const EventDetail = () => {
  const router = useRouter()

  const eventId = router.query.eventId
  const event = getEventById(eventId)

  if (!event) {
    return <ErrorAlert><p>No event found!</p></ErrorAlert>
  }

  const { description, title, date, location, image } = event

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

export default EventDetail