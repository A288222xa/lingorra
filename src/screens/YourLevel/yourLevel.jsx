import { useState } from 'react'
import './yourLevel.css'
import { levels } from '../../data/testQuestions'
import { Plant, Arrow } from '../../components/illustrations'

function YourLevel({ level, results = [], onBack, onStart }) {
  const [showMistakes, setShowMistakes] = useState(false)

  const shownLevel = level || levels[1]
  const mistakes = results.filter((r) => !r.isCorrect)

  return (
    <main className="your-level-screen">

      <div className="start-lesson__logo">Lingurra.</div>

      <button
        type="button"
        className="your-level-back"
        onClick={onBack}
        aria-label="Go back"
      >
        ←
      </button>

      <h1 className="your-level-title">Your level</h1>

      <div className="your-level-a2">{shownLevel.cefr}</div>

      <h2 className="your-level-name">{shownLevel.name}</h2>

      <p className="your-level-description">{shownLevel.description}</p>

      {/* Только количество ошибок — без указания, где именно */}
      {results.length > 0 && (
        mistakes.length > 0 ? (
          <button
            type="button"
            className="your-level-mistakes"
            onClick={() => setShowMistakes(true)}
          >
            {mistakes.length} of {results.length} incorrect
            <span aria-hidden="true"> ›</span>
          </button>
        ) : (
          <div className="your-level-mistakes your-level-mistakes--clean">
            All {results.length} correct
          </div>
        )
      )}

      <Plant className="your-level-plant" />

      <p className="your-level-journey">Your journey starts here.</p>

      <button type="button" className="your-level-start" onClick={onStart}>
        <span>Start lesson</span>
        <Arrow className="your-level-arrow" />
      </button>

      <div className="your-level-home-indicator"><div /></div>


      {/* СПИСОК ОШИБОК — открывается по нажатию */}
      {showMistakes && (
        <div className="mistakes-overlay" onClick={() => setShowMistakes(false)}>
          <div className="mistakes-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="mistakes-sheet__head">
              <h3>Your mistakes</h3>
              <button
                type="button"
                className="mistakes-sheet__close"
                onClick={() => setShowMistakes(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="mistakes-sheet__list">
              {mistakes.map((m) => (
                <div className="mistake-item" key={m.questionId}>
                  <p className="mistake-item__text">{m.prompt.replace('___', '_____')}</p>
                  <p className="mistake-item__tr">{m.translation}</p>
                  <p className="mistake-item__row mistake-item__row--wrong">You chose: {m.selectedText}</p>
                  <p className="mistake-item__row mistake-item__row--right">Correct: {m.correctText}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </main>
  )
}

export default YourLevel
