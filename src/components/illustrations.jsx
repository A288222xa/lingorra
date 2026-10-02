// Локальные иллюстрации вместо ссылок figma.com/api/mcp/asset/... (они живут ~7 дней и потом перестают открываться).
// Все рисунки — inline SVG, ничего не грузится из сети.

const stroke = {
  stroke: '#70775A',
  strokeWidth: 4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  fill: 'none',
}

// Росток для главного экрана
export function Plant({ className }) {
  return (
    <svg className={className} viewBox="100 440 170 160" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g {...stroke}>
        <path d="M155.987 492.874C180.993 506.14 194.153 525.132 201.242 542.911C210.574 566.317 209.382 587.619 210.839 590.977M201.242 542.911C200.625 520.803 206.601 475.985 235.445 473.568" />
        <path d="M132.594 474.897C141.26 473.058 150.198 477.941 153.182 486.489L155.982 494.507C147.317 496.345 138.379 491.462 135.394 482.915L132.594 474.897Z" />
        <path d="M257.158 456.236C257.242 464.849 250.849 472.31 242.084 473.361L232.614 474.497C232.53 465.884 238.923 458.423 247.688 457.372L257.158 456.236Z" />
      </g>
    </svg>
  )
}

// Маленький росток — "I'm just starting"
export function Sprout({ className }) {
  return (
    <svg className={className} viewBox="0 0 61 61" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g {...stroke} strokeWidth="2.5">
        <path d="M30 54V30" />
        <path d="M30 32C18 32 12 25 12 15C24 15 30 22 30 32Z" />
        <path d="M30 27C30 17 36 10 48 10C48 20 42 27 30 27Z" />
      </g>
    </svg>
  )
}

// Росток побольше — "I can understand some"
export function BigSprout({ className }) {
  return (
    <svg className={className} viewBox="0 0 61 61" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g {...stroke} strokeWidth="2.5">
        <path d="M30 56V22" />
        <path d="M30 44C19 44 13 38 13 29C24 29 30 35 30 44Z" />
        <path d="M30 36C30 27 35 20 46 20C46 29 41 36 30 36Z" />
        <path d="M30 22C30 15 33 9 40 6C40 13 37 20 30 22Z" />
      </g>
    </svg>
  )
}

// Дерево — "I know English well"
export function Tree({ className }) {
  return (
    <svg className={className} viewBox="0 0 61 61" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g {...stroke} strokeWidth="2.5">
        <path d="M30 56V34" />
        <path d="M30 44L21 37" />
        <path d="M30 40L39 33" />
        <circle cx="30" cy="20" r="13" />
      </g>
    </svg>
  )
}

// Цветок для экрана "Let's find your level"
export function Flower({ className }) {
  const petals = [0, 60, 120, 180, 240, 300]
  return (
    <svg className={className} viewBox="0 0 210 377" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g {...stroke}>
        <path d="M105 370C105 300 105 230 105 150" />
        <path d="M105 290C70 290 45 265 40 230C75 230 100 255 105 290Z" />
        <path d="M105 240C140 240 165 215 170 180C135 180 110 205 105 240Z" />
        {petals.map((deg) => (
          <ellipse key={deg} cx="105" cy="92" rx="16" ry="38" transform={`rotate(${deg} 105 130)`} />
        ))}
        <circle cx="105" cy="130" r="14" />
      </g>
    </svg>
  )
}

export function Arrow({ className }) {
  return (
    <svg className={className} viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M1 9H20M12.5 1L20 9L12.5 17" stroke="#F5F0E7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
