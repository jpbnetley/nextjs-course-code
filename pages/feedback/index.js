import { buildFeedbackPath, extractFeedback } from '../api/feedback'

const FeedbackPage = props => {
  const { feedbackItems } = props
  return <ul>
    {feedbackItems.map(item => <li key={item.id}>{item.feedback}</li>)}
  </ul>

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