import { useState } from 'react'
import './level.css'
import { Sprout, BigSprout, Tree } from '../../components/illustrations'

const OPTIONS = [
  { id: 1, Icon: Sprout, title: "I'm just starting", description: 'I know a few words and simple phrases.' },
  { id: 2, Icon: BigSprout, title: 'I can understand some', description: 'I can hold simple talks about everyday topics.' },
  { id: 3, Icon: Tree, title: 'I know English well', description: 'I want to become fluent and reach my goals.' },
]

function Level({ onBack, onContinue }) {
  const [selectedLevel, setSelectedLevel] = useState(null)

  return (
    <main className="level-screen">

      <header className="level-header">
        <div className="level-logo">Lingurra.</div>

        <button
          type="button"
          className="level-back"
          onClick={onBack}
          aria-label="Go back"
        >
          ←
        </button>
      </header>

      <section className="level-content">

        <div className="level-title">
          <h1>
            Where are you
            <br />
            <span>starting</span> from?
          </h1>

          <p>Let's find the right place to begin,</p>
        </div>

        <div className="level-options">
          {OPTIONS.map(({ id, Icon, title, description }) => (
            <button
              key={id}
              type="button"
              className={`level-card ${selectedLevel === id ? 'selected' : ''}`}
              onClick={() => setSelectedLevel(id)}
            >
              <Icon className="level-plant" />

              <div className="level-card-text">
                <div className="level-card-title">{title}</div>
                <div className="level-card-description">{description}</div>
              </div>

              <span className="level-card-arrow">→</span>
            </button>
          ))}
        </div>
      </section>

      <button
        type="button"
        className={`level-continue ${selectedLevel === null ? 'disabled' : ''}`}
        disabled={selectedLevel === null}
        onClick={() => onContinue(selectedLevel)}
      >
        <span>Continue</span>
        <span className="level-arrow">→</span>
      </button>

      <div className="level-home-indicator" />

    </main>
  )
}

export default Level
