import fs from 'fs'
import path from 'path'

const handler = (req, res) => {
  //server side code
  if (req.method === 'POST') {
    const { email, text } = req.body

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      feedback: text
    }

    //store in db / file
    const filePath = path.join(process.cwd(), 'data', 'feedback.json')
    const fileData = fs.readFileSync(filePath)
    const data = JSON.parse(fileData)
    data.push(newFeedback)
    fs.writeFileSync(filePath, JSON.stringify(data))
    res.status(201).json({ message: 'Success!', feedback: newFeedback })
  } else {
    res.status(200).json({ message: 'This works!' })
  }
}

export default handler