import { useState } from 'react'

import { buildFeedbackPath, extractFeedback } from '../api/feedback'

const FeedbackPage = props => {
  const { feedbackItems } = props

  const [feedbackData, setFeedbackData] = useState()

  const loadFeedbackHandler = async id => {
    const response = await fetch(`/api/${id}`)
    const { feedback } = await response.json()
    setFeedbackData(feedback)
  }

  return (
    <>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {feedbackItems.map(item =>
          <li key={item.id}>
            {item.feedback}
            <button onClick={() => loadFeedbackHandler(item.id)}>Show Details</button>
          </li>)
        }
      </ul>
    </>)

}

export default FeedbackPage

export const getStaticProps = async () => {
  const filePath = buildFeedbackPath()
  const data = extractFeedback(filePath)
  return {
    props: {
      feedbackItems: data
    }
  }
}