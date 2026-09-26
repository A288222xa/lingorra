import ScreenShell from '../../components/ScreenShell'
import PrimaryButton from '../../components/PrimaryButton'
import { Sprout, ClockIcon } from '../../components/icons'
import { getLessonForLevel } from '../../data/lessons'
import './startLesson.css'

export default function StartLesson({ level, onBack, onStart }) {
  const lesson = getLessonForLevel(level)

  return (
    <ScreenShell onBack={onBack} className="start-lesson">
      <h1 className="start-lesson__title">
        Your English journey<br />starts here
      </h1>

      <div className="start-lesson__card">
        <Sprout className="start-lesson__sprout" />
        <p className="start-lesson__lesson">Lesson 01</p>
        <h2 className="start-lesson__name">{lesson.name}</h2>
        <p className="start-lesson__desc">{lesson.description}</p>
        <div className="start-lesson__duration">
          <ClockIcon className="start-lesson__clock" />
          <span>{lesson.duration}</span>
        </div>
      </div>

      <p className="start-lesson__ready">Ready?</p>

      <PrimaryButton onClick={onStart}>Start lesson</PrimaryButton>
    </ScreenShell>
  )
}
