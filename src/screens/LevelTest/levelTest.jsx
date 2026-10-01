import { useState } from 'react'

import './levelTest.css'

import { testQuestions, calcLevel } from '../../data/testQuestions'
import { saveMistake, markCorrect } from '../../data/mistake'


function LevelTest({ onBack, onContinue }) {
  const [index, setIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [results, setResults] = useState([])

  const question = testQuestions[index]
  const isLast = index === testQuestions.length - 1


  const handleContinue = () => {
    if (selectedAnswer === null) return

    const isCorrect = selectedAnswer === question.answer

    // Save result of the current question
    const result = {
      questionId: question.id,
      level: question.level,
      selectedAnswer,
      correctAnswer: question.answer,
      isCorrect,
    }

    const nextResults = [...results, result]

    // ------------------------------------------
    // MISTAKES
    // ------------------------------------------

    if (isCorrect) {
      // If this question was previously a mistake,
      // mark it as learned.
      markCorrect(question.id)
    } else {
      // Save the mistake for future review.
      saveMistake({
  id: question.id,
  prompt: question.text,
  correct: question.options[question.answer],
  level: question.level,
  translation: question.translation,
})
    }

    // ------------------------------------------
    // FINISH TEST
    // ------------------------------------------

    if (isLast) {
      const level = calcLevel(nextResults)

      onContinue(level, {
        results: nextResults,
        mistakes: nextResults.filter(
          (item) => !item.isCorrect
        ),
      })

      return
    }

    // ------------------------------------------
    // NEXT QUESTION
    // ------------------------------------------

    setResults(nextResults)
    setIndex((current) => current + 1)
    setSelectedAnswer(null)
  }


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

        {question.text.split('___').map((part, i, arr) => (
          <span key={i}>
            {part}

            {i < arr.length - 1 && (
              <span className="question-blank">
                ???
              </span>
            )}
          </span>
        ))}

      </div>


      {/* RUSSIAN TRANSLATION */}

      <div className="level-test-translation">
        {question.translation}
      </div>


      {/* ANSWERS */}

      <div className="level-test-answers">

        {question.options.map((option, i) => (

          <button
            key={question.id + i}
            type="button"
            className={`level-test-answer ${
              selectedAnswer === i ? 'selected' : ''
            }`}
            onClick={() => setSelectedAnswer(i)}
          >

            <span className="answer-number">
              {i + 1}
            </span>

            <span className="answer-text">
              {option}
            </span>

          </button>

        ))}

      </div>


      {/* QUESTION NUMBER */}

      <div className="level-test-counter">
        Question {index + 1} of {testQuestions.length}
      </div>


      {/* CONTINUE */}

      <button
        type="button"
        className={`level-test-continue ${
          selectedAnswer === null ? 'disabled' : ''
        }`}
        disabled={selectedAnswer === null}
        onClick={handleContinue}
      >

        <span>
          {isLast ? 'See my level' : 'Continue'}
        </span>

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