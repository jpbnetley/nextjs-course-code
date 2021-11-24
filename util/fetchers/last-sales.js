const fetcher = async url => {
  const data = await fetch(url)
  const salesDataJson = await data.json()

  const transformedSalesData = Object.keys(salesDataJson).map(dataKey => {
    const { username, volume } = salesDataJson[dataKey]

    return ({
      id: dataKey,
      username,
      volume
    })
  })

  return transformedSalesData
}

export default fetcher