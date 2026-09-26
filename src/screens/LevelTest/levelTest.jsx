import { useState } from 'react'

import './levelTest.css'

function LevelTest({ onBack, onContinue }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const answers = [
    'drink',
    'drinks',
    'drinking',
    'is drink',
  ]

  return (
    <main className="level-test-screen">

      {/* HEADER */}
      <header className="level-test-header">
        <div className="level-test-logo">
          Lingorra.
        </div>

        <button
          type="button"
          className="level-test-back"
          onClick={onBack}
          aria-label="Go back"
        >
          ←
        </button>
      </header>

      {/* TITLE */}
      <div className="level-test-title">
        <h1>
          Let's check your
          <br />
          <span>English</span>
        </h1>

        <p>
          Choose the correct answer.
        </p>
      </div>

      {/* QUESTION */}
      <div className="level-test-question">
  She <span className="question-blank">???</span> coffee every morning.
</div>

      {/* ANSWERS */}
      <div className="level-test-answers">
        {answers.map((answer, index) => (
          <button
            key={answer}
            type="button"
            className={`level-test-answer ${
              selectedAnswer === index ? 'selected' : ''
            }`}
            onClick={() => setSelectedAnswer(index)}
          >
            <span className="answer-number">
              {index + 1}
            </span>

            <span className="answer-text">
              {answer}
            </span>
          </button>
        ))}
      </div>

      {/* QUESTION NUMBER */}
      <div className="level-test-counter">
        Question 1 of 10
      </div>

      {/* CONTINUE */}
      <button
        type="button"
        className={`level-test-continue ${
          selectedAnswer === null ? 'disabled' : ''
        }`}
        disabled={selectedAnswer === null}
          onClick={onContinue}
      >
        <span>Continue</span>
        <span className="level-test-arrow">
          →
        </span>
      </button>

      {/* HOME INDICATOR */}
      <div className="level-test-home-indicator">
        <div />
      </div>

    </main>
  )
}

export default LevelTest