import { useRouter } from 'next/router'
import Head from 'next/head'
import useSWR from 'swr'
import { useEffect, useState } from 'react'

import { firebaseEventsUrl } from '../../util/api-util'
import EventList from '../../components/events/event-list'
import ResultsTitle from '../../components/events/results-title'
import Button from '../../components/ui/button'
import ErrorAlert from '../../components/ui/error-alert'
import filterEvents from '../../util/events/filter-events'
import eventFetcher from '../../util/events/event-fetcher'


const FilterEventsPage = ({ firebaseEventsUrl }) => {
  const router = useRouter()
  const filterData = router.query.slug

  const { data, error } = useSWR(firebaseEventsUrl, eventFetcher)
  const [loadedEvents, setLoadedEvents] = useState()

  useEffect(() => {
    if (data) {
      setLoadedEvents(data)
    }
  }, [data])

  const [year, month] = filterData
  //+numYear: the + converts it to a number
  const numYear = +year
  const numMonth = +month

  const date = `${numYear}/${numMonth}`



  if (!loadedEvents) return (<p className='center'>Loading...</p>)

  const PageHeadData = () =>
    <Head>
      <title>Filter events</title>
      <meta name='description' content={`All events for ${month}/${year}.`} />
    </Head>



  const isValidMonthRange = numMonth < 1 || numMonth > 12
  const isValidYearRange = numYear > 2030 || numYear < 2021


  if (isNaN(numYear) || isNaN(numMonth) || isValidYearRange || isValidMonthRange || error) return (
    <>
      <PageHeadData />
      <ErrorAlert><p>Invalid filter, please adjust your values</p></ErrorAlert>
      <div className='center'>
        <Button link='/events'>Show All events</Button>
      </div>
    </>
  )

  const filteredEvents = filterEvents(loadedEvents, numYear, numMonth)

  const filteredEventsLength = filteredEvents?.length || 0

  if (filteredEventsLength === 0) return (
    <>
      <PageHeadData />
      <ErrorAlert><p>No events found for the chosen filter!</p></ErrorAlert>
      <div className='center'>
        <Button link='/events'>Show All events</Button>
      </div>
    </>
  )

  return (
    <>
      <PageHeadData />
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  )
}

export const getServerSideProps = () => ({
  props: {
    firebaseEventsUrl
  }
})


export default FilterEventsPage

