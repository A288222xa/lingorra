import { useEffect, useState } from 'react'

const W = 393
const H = 852

function calcScale() {
  return Math.min(1, window.innerWidth / W, window.innerHeight / H)
}

// Экраны сверстаны под 393×852. Frame уменьшает их целиком, если окно Telegram меньше,
// чтобы кнопки внизу не обрезались.
export default function Frame({ children }) {
  const [scale, setScale] = useState(calcScale)

  useEffect(() => {
    const update = () => setScale(calcScale())
    window.addEventListener('resize', update)
    window.Telegram?.WebApp?.onEvent?.('viewportChanged', update)
    return () => {
      window.removeEventListener('resize', update)
      window.Telegram?.WebApp?.offEvent?.('viewportChanged', update)
    }
  }, [])

  return (
    <div style={{ position: 'relative', width: '100%', height: H * scale, overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          width: W,
          height: H,
          marginLeft: -W / 2,
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
        }}
      >
        {children}
      </div>
    </div>
  )
}
