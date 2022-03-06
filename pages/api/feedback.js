import fs from 'fs'
import path from 'path'

const handler = (req, res) => {
  try {
    //server side code
    if (req.method === 'POST') {
      postFeedback(req, res)
    } else {
      getFeedback(req, res)
    }
  } catch (error) {
    console.error('api error: ', error)
  }
}

export default handler

export const buildFeedbackPath = () => path.join(process.cwd(), 'data', 'feedback.json')

export const extractFeedback = filePath => {
  const fileData = fs.readFileSync(filePath)
  const data = JSON.parse(fileData || [])
  return data
}

const postFeedback = (req, res) => {
  const { email, text } = req.body

  const newFeedback = {
    id: new Date().toISOString(),
    email,
    feedback: text
  }

  //store in db / file
  const filePath = buildFeedbackPath()
  const data = extractFeedback(filePath) || []
  data.push(newFeedback)
  fs.writeFileSync(filePath, JSON.stringify(data))
  res.status(201).json({ message: 'Success!', feedback: newFeedback })
}

const getFeedback = (req, res) => {
  const filePath = buildFeedbackPath()
  const data = extractFeedback(filePath)
  const response = res.status(200).json({ feedback: data })
  return response
}