import './PrimaryButton.css'

export default function PrimaryButton({ children, onClick, disabled = false, className = '' }) {
  return (
    <button
      type="button"
      className={`btn-primary ${disabled ? 'btn-primary--disabled' : ''} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      <span>{children}</span>
      <span className="btn-primary__arrow">→</span>
    </button>
  )
}