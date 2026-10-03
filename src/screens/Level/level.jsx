import { useState } from 'react'
import './level.css'

// ВАШИ иконки карточек, экспортированные из Figma (круг + росток внутри, 61×61)
import sproutImage from '../../assets/level-sprout.svg'
import bigSproutImage from '../../assets/level-sprout-big.svg'
import treeImage from '../../assets/level-tree.svg'

const OPTIONS = [
  { id: 1, image: sproutImage, title: "I'm just starting", description: 'I know a few words and simple phrases.' },
  { id: 2, image: bigSproutImage, title: 'I can understand some', description: 'I can hold simple talks about everyday topics.' },
  { id: 3, image: treeImage, title: 'I know English well', description: 'I want to become fluent and reach my goals.' },
]

function Level({ onBack, onContinue }) {
  const [selectedLevel, setSelectedLevel] = useState(null)

  return (
    <main className="level-screen">

      <header className="level-header">
        <div className="level-logo">Lingurra.</div>

        <button type="button" className="level-back" onClick={onBack} aria-label="Go back">
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
          {OPTIONS.map(({ id, image, title, description }) => (
            <button
              key={id}
              type="button"
              className={`level-card ${selectedLevel === id ? 'selected' : ''}`}
              onClick={() => setSelectedLevel(id)}
            >
              <img className="level-plant" src={image} alt="" />

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
