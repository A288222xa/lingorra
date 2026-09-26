import { useState } from 'react'

import './App.css'

import Level from './screens/Level/level'
import Test from './screens/Test/test'
import LevelTest from './screens/LevelTest/levelTest'
import YourLevel from './screens/YourLevel/yourLevel'
import StartLesson from './screens/StartLesson/startLesson'
import LessonTask from './screens/LessonTask/LessonTask'
import Goodbye from './screens/Goodbye/Goodbye'
import { getLessonForLevel } from './data/lessons'

const assetPathPrefix =
  'https://www.figma.com/api/mcp/asset/a4c3ae12-9379-4020-bb91-c63454009f31'

const plantImage = `${assetPathPrefix}/29ba9.svg`
const arrowImage = `${assetPathPrefix}/af9b2.svg`

function Welcome({ onStart }) {
  return (
    <main className="welcome">
      <p className="logo">Lingorra.</p>

      <div className="title">
        <p className="title-main">Learn English.</p>
        <p className="title-accent">Build yourself.</p>
      </div>

      <div className="plant">
        <img src={plantImage} alt="" />
      </div>

      <p className="description">
        Your journey starts here
      </p>

      <button
        className="start-button"
        onClick={onStart}
      >
        <p className="start-button-text">
          Start your journey
        </p>

        <img
          className="arrow"
          src={arrowImage}
          alt=""
        />
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
  const [level, setLevel] = useState(null)

  // 1 — Welcome
  if (screen === 1) {
    return (
      <Welcome
        onStart={() => setScreen(2)}
      />
    )
  }

  // 2 — Choose your starting point
  if (screen === 2) {
    return (
      <Level
        onBack={() => setScreen(1)}
        onContinue={() => setScreen(3)}
      />
    )
  }

  // 3 — Test intro
  if (screen === 3) {
    return (
      <Test
        onBack={() => setScreen(2)}
        onStart={() => setScreen(4)}
      />
    )
  }

  // 4 — Level Test (30 questions, computes the level)
  if (screen === 4) {
    return (
      <LevelTest
        onBack={() => setScreen(3)}
        onContinue={(computedLevel) => {
          setLevel(computedLevel)
          setScreen(5)
        }}
      />
    )
  }

  // 5 — Your level result
  if (screen === 5) {
    return (
      <YourLevel
        level={level}
        onBack={() => setScreen(4)}
        onStart={() => setScreen(6)}
      />
    )
  }

  // 6 — Start lesson (lesson picked automatically based on level)
  if (screen === 6) {
    return (
      <StartLesson
        level={level}
        onBack={() => setScreen(5)}
        onStart={() => setScreen(7)}
      />
    )
  }

  // 7 — Lesson task
  if (screen === 7) {
    return (
      <LessonTask
        lesson={getLessonForLevel(level)}
        onBack={() => setScreen(6)}
        onFinish={() => setScreen(8)}
      />
    )
  }

  // 8 — Goodbye
  return (
    <Goodbye
      onBack={() => setScreen(7)}
      onRestart={() => setScreen(1)}
    />
  )
}

export default App
