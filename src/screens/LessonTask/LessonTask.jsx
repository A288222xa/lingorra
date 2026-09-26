import { useState } from 'react'
import ScreenShell from '../../components/ScreenShell'
import PrimaryButton from '../../components/PrimaryButton'
import { saveMistake, markCorrect } from '../../lib/mistakes'
import './LessonTask.css'

export default function LessonTask({ lesson, onBack, onFinish }) {
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [checked, setChecked] = useState(false)

  const tasks = lesson.tasks
  const task = tasks[index]
  const isLast = index === tasks.length - 1

  const check = () => {
    setChecked(true)
    if (selected === task.answer) {
      markCorrect(task.id)
    } else {
      saveMistake({ id: task.id, prompt: task.text, correct: task.options[task.answer] })
    }
  }

  const next = () => {
    if (isLast) return onFinish()
    setIndex((i) => i + 1)
    setSelected(null)
    setChecked(false)
  }

  return (
    <ScreenShell onBack={onBack} className="lesson">
      <h1 className="lesson__title">{lesson.name}</h1>
      <p className="lesson__subtitle">Choose the correct answer.</p>

      <p className="lesson__question">
        {task.text.split('___').map((part, i, arr) => (
          <span key={i}>
            {part}
            {i < arr.length - 1 && <span className="lesson__blank">???</span>}
          </span>
        ))}
      </p>

      <div className="lesson__options">
        {task.options.map((option, i) => {
          let cls = 'lesson__option'
          if (checked) {
            if (i === task.answer) cls += ' lesson__option--correct'
            else if (i === selected) cls += ' lesson__option--wrong'
          } else if (i === selected) {
            cls += ' lesson__option--selected'
          }
          return (
            <button
              key={i}
              type="button"
              className={cls}
              disabled={checked}
              onClick={() => setSelected(i)}
            >
              {option}
            </button>
          )
        })}
      </div>

      <p className="lesson__counter">
        Question {index + 1} of {tasks.length}
      </p>

      <PrimaryButton
        onClick={checked ? next : check}
        disabled={!checked && selected === null}
      >
        {checked ? (isLast ? 'Finish' : 'Continue') : 'Check answer'}
      </PrimaryButton>
    </ScreenShell>
  )
}
