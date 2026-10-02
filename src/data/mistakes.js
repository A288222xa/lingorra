const KEY = 'lingurra_mistakes'

// Через сколько повторять ошибку, в зависимости от "коробки" (box):
// box 1 → 1 день, box 2 → 3 дня, box 3 → 7 дней, box 4 → 14 дней
const DAY = 86400000
const INTERVALS = [0, DAY, 3 * DAY, 7 * DAY, 14 * DAY]


function save(list) {
  try {
    localStorage.setItem(KEY, JSON.stringify(list))
  } catch {
    // localStorage может быть недоступен — не роняем приложение
  }
}


export function loadMistakes() {
  try {
    const list = JSON.parse(localStorage.getItem(KEY))
    return Array.isArray(list) ? list : []
  } catch {
    return []
  }
}


// Ошибка в тесте/уроке
export function saveMistake({ id, prompt, correct, level = null, translation = '' }) {
  const list = loadMistakes()
  const existing = list.find((m) => m.id === id)

  if (existing) {
    existing.box = 1
    existing.ts = Date.now()
  } else {
    list.push({ id, prompt, correct, level, translation, box: 1, ts: Date.now() })
  }

  save(list)
}


// Правильный ответ на вопрос, который раньше был ошибкой
export function markCorrect(id) {
  const list = loadMistakes()
  const mistake = list.find((m) => m.id === id)
  if (!mistake) return

  mistake.box += 1
  mistake.ts = Date.now()

  // после 4 успешных повторов ошибка считается выученной
  save(mistake.box > 4 ? list.filter((m) => m.id !== id) : list)
}


// Ошибки, которые пора повторить
export function dueMistakes(now = Date.now()) {
  return loadMistakes().filter((m) => now - m.ts >= (INTERVALS[m.box] ?? 0))
}