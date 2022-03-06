import { useRef } from 'react'

function HomePage() {
  const emailInputRef = useRef()
  const feedbackInputRef = useRef()

  const submitFormHandler = event => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value
    const enteredFeedback = feedbackInputRef.current.value

   

    fetch()
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form>
        <div>
          <label htmlFor='email'>Your Email Address</label>
          <input type='mail' id='email' ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor='feedback'>Your feedback</label>
          <textarea id='feedback' rows='5' ref={feedbackInputRef}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
