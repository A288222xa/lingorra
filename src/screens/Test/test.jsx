import './test.css'
import { Flower } from '../../components/illustrations'

function Test({ onBack, onStart }) {
  return (
    <main className="test-screen">

      <header className="test-header">
        <div className="test-logo">Lingurra.</div>

        <button
          type="button"
          className="test-back"
          onClick={onBack}
          aria-label="Go back"
        >
          ←
        </button>
      </header>

      <div className="test-title-box">
        <h1>
          Let's find your
          <br />
          <span>level</span>
        </h1>
      </div>

      <p className="test-description">
        Answer 10 short questions
        <br />
        to find the right starting
        <br />
        point.
      </p>

      <div className="test-flower">
        <Flower />
      </div>

      <button type="button" className="test-start-button" onClick={onStart}>
        <span>Start test</span>
        <span className="test-start-arrow">→</span>
      </button>

      <div className="test-home-indicator" />

    </main>
  )
}

export default Test
