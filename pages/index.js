import { useRef, useState } from 'react'

function HomePage() {

  const [feedbackItems, setFeedbackItems] = useState([])
  const emailInputRef = useRef()
  const feedbackInputRef = useRef()

  const submitFormHandler = async event => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value
    const enteredFeedback = feedbackInputRef.current.value
    const requestBody = { email: enteredEmail, text: enteredFeedback }

    try {
      const response = await fetch('/api/feedback',
        {
          method: 'POST',
          body: JSON.stringify(requestBody),
          headers: {
            'content-type': 'application/json'
          }
        })

      const json = await response.json()
      console.log(json)
    } catch (error) {
      console.error(error)
    }

  }

  const loadFeedbackHandler = async () => {
    try {
      const response = await fetch('/api/feedback')
      const { feedback } = await response.json()
      setFeedbackItems(feedback)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor='email'>Your Email Address</label>
          <input type='mail' id='email' ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor='feedback'>Your feedback</label>
          <textarea id='feedback' rows='5' ref={feedbackInputRef}></textarea>
        </div>
        <button>Send Feedback</button>
        <hr />
        <button type='button' onClick={loadFeedbackHandler}>Load Feedback</button>
        {
          <ul>
            {feedbackItems?.map(item => <li key={item.id}>{item.feedback}</li>)}
          </ul>
        }
      </form>
    </div>
  );
}

export default HomePage;
