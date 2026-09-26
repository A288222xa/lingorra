import ScreenShell from '../../components/ScreenShell'
import PrimaryButton from '../../components/PrimaryButton'
import { Sprout, ClockIcon } from '../../components/icons'
import './startLesson.css'

export default function StartLesson({ onBack, onStart }) {
  return (
    <ScreenShell onBack={onBack} className="start-lesson">
      <h1 className="start-lesson__title">
        Your English journey<br />starts here
      </h1>

      <div className="start-lesson__card">
        <Sprout className="start-lesson__sprout" />
        <p className="start-lesson__lesson">Lesson 01</p>
        <h2 className="start-lesson__name">Everyday English</h2>
        <p className="start-lesson__desc">Learn useful<br />words and phrases.</p>
        <div className="start-lesson__duration">
          <ClockIcon className="start-lesson__clock" />
          <span>10 min</span>
        </div>
      </div>

      <p className="start-lesson__ready">Ready?</p>

      <PrimaryButton onClick={onStart}>Start lesson</PrimaryButton>
    </ScreenShell>
  )
}