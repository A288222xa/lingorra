import { useState } from 'react'
import './level.css'

const assetPathPrefix =
  'https://www.figma.com/api/mcp/asset/391ca872-ed66-4de7-870e-c8197715babd'

const treeImage = `${assetPathPrefix}/44001.svg`
const bigSproutImage = `${assetPathPrefix}/ee246.svg`
const sproutImage = `${assetPathPrefix}/4499f.svg`

function Level({ onBack, onContinue }) {
  const [selectedLevel, setSelectedLevel] = useState(null)

  return (
    <main className="level-screen">

      <header className="level-header">
        <div className="level-logo">
          Lingorra.
        </div>

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

          <p>
            Let's find the right place to begin,
          </p>
        </div>

        <div className="level-options">

          <button
            type="button"
            className={`level-card ${
              selectedLevel === 1 ? 'selected' : ''
            }`}
            onClick={() => setSelectedLevel(1)}
          >
            <img
              className="level-plant"
              src={sproutImage}
              alt=""
            />

            <div className="level-card-text">
              <div className="level-card-title">
                I'm just starting
              </div>

              <div className="level-card-description">
                I know a few words and simple phrases.
              </div>
            </div>

            <span className="level-card-arrow">
              →
            </span>
          </button>

          <button
            type="button"
            className={`level-card ${
              selectedLevel === 2 ? 'selected' : ''
            }`}
            onClick={() => setSelectedLevel(2)}
          >
            <img
              className="level-plant"
              src={bigSproutImage}
              alt=""
            />

            <div className="level-card-text">
              <div className="level-card-title">
                I can understand some
              </div>

              <div className="level-card-description">
                I can hold simple talks about everyday topics.
              </div>
            </div>

            <span className="level-card-arrow">
              →
            </span>
          </button>

          <button
            type="button"
            className={`level-card ${
              selectedLevel === 3 ? 'selected' : ''
            }`}
            onClick={() => setSelectedLevel(3)}
          >
            <img
              className="level-plant"
              src={treeImage}
              alt=""
            />

            <div className="level-card-text">
              <div className="level-card-title">
                I know English well
              </div>

              <div className="level-card-description">
                I want to become fluent and reach my goals.
              </div>
            </div>

            <span className="level-card-arrow">
              →
            </span>
          </button>

        </div>
      </section>

      <button
        type="button"
        className={`level-continue ${
          selectedLevel === null ? 'disabled' : ''
        }`}
        disabled={selectedLevel === null}
        onClick={onContinue}
      >
        <span>Continue</span>

        <span className="level-arrow">
          →
        </span>
      </button>

      <div className="level-home-indicator" />

    </main>
  )
}

export default Level
