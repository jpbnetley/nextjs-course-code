import { useRouter } from 'next/router'

import { getFilteredEvents } from '../../dummy-data'
import EventList from '../../components/events/event-list'
import ResultsTitle from '../../components/events/results-title'
import Button from '../../components/ui/button'
import ErrorAlert from '../../components/ui/error-alert'

const FilterEventsPage = () => {
  const router = useRouter()
  const filterData = router.query.slug

  if (!filterData) return (<p className='center'>Loading...</p>)

  const [year, month] = filterData
  //+numYear: the + converts it to a number
  const numYear = +year
  const numMonth = +month

  const isValidMonthRange = numMonth < 1 || numMonth > 12
  const isValidYearRange = numYear > 2030 || numYear < 2021

  if (isNaN(numYear) || isNaN(numMonth) || isValidYearRange || isValidMonthRange) return (
    <>
      <ErrorAlert><p>Invalid filter, please adjust your values</p></ErrorAlert>
      <div className='center'>
        <Button link='/events'>Show All events</Button>
      </div>
    </>
  )

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth })

  const filteredEventsLength = filteredEvents?.length || 0

  if (filteredEventsLength === 0) return (
    <>
      <ErrorAlert><p>No events found for the chosen filter!</p></ErrorAlert>
      <div className='center'>
        <Button link='/events'>Show All events</Button>
      </div>
    </>
  )

  const date = new Date(numYear, numMonth - 1)

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  )
}

export default FilterEventsPage