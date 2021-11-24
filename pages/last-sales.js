import { useEffect, useState } from "react"
import useSwr from 'swr'
import getDatabasePath from '../data/firebase'
import salesFetcher from '../util/fetchers/last-sales'


const LastSales = ({ databasePath, sales: preFetchedSales }) => {
  const [sales, setSales] = useState(preFetchedSales)
  const { data: salesData, error } = useSwr(databasePath, salesFetcher)

  useEffect(() => {

    if (!salesData) return

    setSales(salesData)
  }, [salesData])

  if (error) return <p>Failed to load.</p>

  if (!salesData && !sales) return <p>Loading...</p>

  return <ul>
    {sales.map(({ id, username, volume }) =>
      <li key={id}>{username} - {volume}</li>
    )}
  </ul>
}

export const getStaticProps = async () => {

  const databasePath = getDatabasePath()
  const salesData = await salesFetcher(databasePath)

  return {
    props: {
      databasePath,//for tutorial purposes only
      sales: salesData
    },
    revalidate: 10
  }
}

export default LastSales

