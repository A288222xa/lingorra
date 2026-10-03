import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Frame from './components/Frame.jsx'

const tg = window.Telegram?.WebApp
if (tg) {
  tg.ready()
  tg.expand()
  tg.setHeaderColor?.('#F5F0E7')
  tg.setBackgroundColor?.('#F5F0E7')
  tg.disableVerticalSwipes?.()
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Frame>
      <App />
    </Frame>
  </StrictMode>,
)
