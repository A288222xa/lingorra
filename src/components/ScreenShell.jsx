import './screenShell.css'

export default function ScreenShell({ onBack, children, className = '' }) {
  return (
    <main className={`screen ${className}`}>
      <header className="screen__header">
        <div className="screen__logo">Lingorra.</div>
        {onBack && (
          <button type="button" className="screen__back" onClick={onBack} aria-label="Go back">
            ←
          </button>
        )}
      </header>
      {children}
      <div className="screen__home-indicator"><div /></div>
    </main>
  )
}