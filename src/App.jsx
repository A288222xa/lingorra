import { useState } from 'react'

import './App.css'

   import Level from "./screens/Level/level";
   import Test from "./screens/Test/test";
   import LevelTest from "./screens/LevelTest/levelTest";
   import YourLevel from "./screens/YourLevel/yourLevel";
   import StartLesson from "./screens/StartLesson/startLesson";
   import LessonTask from "./screens/LessonTask/LessonTask";
   import Goodbye from "./screens/Goodbye/Goodbye";
import { getLessonForLevel } from './data/lessons'

// ВАШ росток с главного экрана, экспортированный из Figma → src/assets/welcome-plant.svg
import plantImage from './assets/welcome-plant.svg'

function Welcome({ onStart }) {
  return (
    <main className="welcome">
      <p className="logo">Lingurra.</p>

      <div className="title">
        <p className="title-main">Learn English.</p>
        <p className="title-accent">Build yourself.</p>
      </div>

      <div className="plant">
        <img src={plantImage} alt="" />
      </div>

      <p className="description">Your journey starts here</p>

      <button className="start-button" onClick={onStart}>
        <p className="start-button-text">Start your journey</p>

        <svg className="arrow" width="21" height="18" viewBox="0 0 21 18" fill="none">
          <path
            d="M1 9H20M12.5 1L20 9L12.5 17"
            stroke="#F5F0E7"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="bottom-info">
        <span className="bottom-text">Free to start</span>
        <span className="bottom-dot">•</span>
        <span className="bottom-text">10 min a day</span>
      </div>
    </main>
  )
}

function App() {
  const [screen, setScreen] = useState(1)
  const [startLevel, setStartLevel] = useState(null) // 1 / 2 / 3 с экрана выбора
  const [level, setLevel] = useState(null)           // результат теста (A1…C1)
  const [results, setResults] = useState([])         // ответы теста

  if (screen === 1) {
    return <Welcome onStart={() => setScreen(2)} />
  }

  if (screen === 2) {
    return (
      <Level
        onBack={() => setScreen(1)}
        onContinue={(chosen) => {
          setStartLevel(chosen)
          setScreen(3)
        }}
      />
    )
  }

  if (screen === 3) {
    return <Test onBack={() => setScreen(2)} onStart={() => setScreen(4)} />
  }

  if (screen === 4) {
    return (
      <LevelTest
        startLevel={startLevel}
        onBack={() => setScreen(3)}
        onContinue={(computedLevel, extra) => {
          setLevel(computedLevel)
          setResults(extra.results)
          setScreen(5)
        }}
      />
    )
  }

  if (screen === 5) {
    return (
      <YourLevel
        level={level}
        results={results}
        onBack={() => setScreen(4)}
        onStart={() => setScreen(6)}
      />
    )
  }

  if (screen === 6) {
    return (
      <StartLesson
        level={level}
        onBack={() => setScreen(5)}
        onStart={() => setScreen(7)}
      />
    )
  }

  if (screen === 7) {
    return (
      <LessonTask
        lesson={getLessonForLevel(level)}
        onBack={() => setScreen(6)}
        onFinish={() => setScreen(8)}
      />
    )
  }

  return <Goodbye onBack={() => setScreen(7)} onRestart={() => setScreen(1)} />
}

export default App
