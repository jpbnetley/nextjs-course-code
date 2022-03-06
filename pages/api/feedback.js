const handler = (req, res) => {
  //server side code
  res.status(200).json({ message: 'This works!' })
}

export default handler