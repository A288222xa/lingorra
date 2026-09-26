import './test.css'

const assetPathPrefix =
  'https://www.figma.com/api/mcp/asset/3bb2e892-e47b-4999-ac5b-43fe8b5cadd2'

const flowerImage = `${assetPathPrefix}/4683b.svg`
const nameImage = `${assetPathPrefix}/5bc02.svg`

function Test({ onBack, onStart }) {
  return (
    <main className="test-screen">

      {/* HEADER */}
      <header className="test-header">
        <div className="test-logo">
          Lingorra.
        </div>

        <button
          type="button"
          className="test-back"
          onClick={onBack}
          aria-label="Go back"
        >
          ←
        </button>
      </header>

      {/* TITLE */}
      <div className="test-title-box">
        <h1>
          Let's find your
          <br />
          <span>level</span>
        </h1>
      </div>

      {/* DESCRIPTION */}
      <p className="test-description">
        Answer 10 short questions
        <br />
        to find the right starting
        <br />
        point.
      </p>

      {/* FLOWER */}
      <div className="test-flower">
        <img
          src={flowerImage}
          alt=""
        />
      </div>

      {/* START BUTTON */}
      <button
        type="button"
        className="test-start-button"
        onClick={onStart}
      >
        <span>Start test</span>

        <span className="test-start-arrow">
          →
        </span>
      </button>

      {/* HOME INDICATOR */}
      <div className="test-home-indicator">
        <div />
      </div>

    </main>
  )
}

export default Test