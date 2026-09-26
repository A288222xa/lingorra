import './yourLevel.css'
import { levels } from '../../data/testQuestions'

function YourLevel({ level, onBack, onStart }) {
  const shownLevel = level || levels[1]

  return (
    <main className="your-level-screen">

      <div className="start-lesson__logo">
        Lingorra.
      </div>

      <button
        type="button"
        className="your-level-back"
        onClick={onBack}
        aria-label="Go back"
      >
        ←
      </button>

      <h1 className="your-level-title">
        Your level
      </h1>

      <div className="your-level-a2">
        {shownLevel.cefr}
      </div>

      <h2 className="your-level-name">
        {shownLevel.name}
      </h2>

      <p className="your-level-description">
        {shownLevel.description}
      </p>

      <div className="your-level-plant">
        <svg
          width="130"
          height="140"
          viewBox="100 440 170 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            stroke="#70775A"
            strokeWidth="4"
          >
            <path d="M155.987 492.874C180.993 506.14 194.153 525.132 201.242 542.911C210.574 566.317 209.382 587.619 210.839 590.977M201.242 542.911C200.625 520.803 206.601 475.985 235.445 473.568" />

            <path d="M132.594 474.897C141.26 473.058 150.198 477.941 153.182 486.489L155.982 494.507C147.317 496.345 138.379 491.462 135.394 482.915L132.594 474.897Z" />

            <path d="M257.158 456.236C257.242 464.849 250.849 472.31 242.084 473.361L232.614 474.497C232.53 465.884 238.923 458.423 247.688 457.372L257.158 456.236Z" />
          </g>
        </svg>
      </div>

      <p className="your-level-journey">
        Your journey starts here.
      </p>

      <button
        type="button"
        className="your-level-start"
        onClick={onStart}
      >
        <span>Start test</span>

        <svg
          className="your-level-arrow"
          width="21"
          height="18"
          viewBox="0 0 21 18"
          fill="none"
        >
          <path
            d="M1 9H20M12.5 1L20 9L12.5 17"
            stroke="#F5F0E7"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="your-level-home-indicator">
        <div />
      </div>

    </main>
  )
}

export default YourLevel
