const KEY = 'lingorra_mistakes'

// 1 день → 3 дня → 7 дней → 14 дней
const INTERVALS = [
  0,
  86400000,
  259200000,
  604800000,
  1209600000,
]


export function loadMistakes() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || []
  } catch {
    return []
  }
}


// ------------------------------------------
// SAVE MISTAKE
// ------------------------------------------

export function saveMistake({
  id,
  prompt,
  correct,
  level,
  translation,
}) {
  const list = loadMistakes()

  const existing = list.find((mistake) => mistake.id === id)

  if (existing) {
    existing.box = 1
    existing.ts = Date.now()
  } else {
    list.push({
      id,
      prompt,
      correct,
      level,
      translation,
      box: 1,
      ts: Date.now(),
    })
  }

  localStorage.setItem(KEY, JSON.stringify(list))
}


// ------------------------------------------
// ANSWERED CORRECTLY
// ------------------------------------------

export function markCorrect(id) {
  const list = loadMistakes()

  const mistake = list.find(
    (item) => item.id === id
  )

  if (!mistake) return

  mistake.box += 1
  mistake.ts = Date.now()

  const next =
    mistake.box > 4
      ? list.filter((item) => item.id !== id)
      : list

  localStorage.setItem(
    KEY,
    JSON.stringify(next)
  )
}


// ------------------------------------------
// MISTAKES THAT ARE DUE
// ------------------------------------------

export function dueMistakes(
  now = Date.now()
) {
  return loadMistakes().filter(
    (mistake) =>
      now - mistake.ts >=
      INTERVALS[mistake.box]
  )
}