import { useMemo, useState } from 'react'

import './levelTest.css'

import { getQuestions, calcLevel } from '../../data/testQuestions'
import { saveMistake, markCorrect } from '../../data/mistakes'


function LevelTest({ startLevel, onBack, onContinue }) {
  // набор вопросов зависит от того, что человек выбрал на экране "Where are you starting from?"
  const questions = useMemo(() => getQuestions(startLevel), [startLevel])

  const [index, setIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [results, setResults] = useState([])

  const question = questions[index]
  const isLast = index === questions.length - 1


  const handleContinue = () => {
    if (selectedAnswer === null) return

    const isCorrect = selectedAnswer === question.answer

    // Всё нужное для экрана результата хранится прямо в ответе,
    // чтобы YourLevel не зависел от набора вопросов.
    const result = {
      questionId: question.id,
      level: question.level,
      prompt: question.text,
      translation: question.translation,
      selectedText: question.options[selectedAnswer],
      correctText: question.options[question.answer],
      isCorrect,
    }

    const nextResults = [...results, result]

    if (isCorrect) {
      markCorrect(question.id)
    } else {
      saveMistake({
        id: question.id,
        prompt: question.text,
        correct: question.options[question.answer],
        level: question.level,
        translation: question.translation,
      })
    }

    if (isLast) {
      onContinue(calcLevel(nextResults), { results: nextResults })
      return
    }

    setResults(nextResults)
    setIndex((current) => current + 1)
    setSelectedAnswer(null)
  }


  return (
    <main className="level-test-screen">

      <header className="level-test-header">
        <div className="level-test-logo">Lingurra.</div>

        <button
          type="button"
          className="level-test-back"
          onClick={onBack}
          aria-label="Go back"
        >
          ←
        </button>
      </header>


      <div className="level-test-title">
        <h1>
          Let's check your
          <br />
          <span>English</span>
        </h1>

        <p>Choose the correct answer.</p>
      </div>


      <div className="level-test-question">
        {question.text.split('___').map((part, i, arr) => (
          <span key={i}>
            {part}
            {i < arr.length - 1 && (
              <span className="question-blank">_____</span>
            )}
          </span>
        ))}
      </div>

      {/* Русский смысл предложения; проверяемое слово скрыто как «…» */}
      <div className="level-test-translation">
        {question.translation}
      </div>


      <div className="level-test-answers">
        {question.options.map((option, i) => (
          <button
            key={question.id + i}
            type="button"
            className={`level-test-answer ${selectedAnswer === i ? 'selected' : ''}`}
            onClick={() => setSelectedAnswer(i)}
          >
            <span className="answer-number">{i + 1}</span>
            <span className="answer-text">{option}</span>
          </button>
        ))}
      </div>


      <div className="level-test-counter">
        Question {index + 1} of {questions.length}
      </div>


      <button
        type="button"
        className={`level-test-continue ${selectedAnswer === null ? 'disabled' : ''}`}
        disabled={selectedAnswer === null}
        onClick={handleContinue}
      >
        <span>{isLast ? 'See my level' : 'Continue'}</span>
        <span className="level-test-arrow">→</span>
      </button>

      <div className="level-test-home-indicator" />

    </main>
  )
}


export default LevelTest
