const KEY = 'lingorra_mistakes'

// Интервалы повторения по "коробкам" Лейтнера: 1 день, 3, 7, 14
const INTERVALS = [0, 86400000, 259200000, 604800000, 1209600000]

export function loadMistakes() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || []
  } catch {
    return []
  }
}

// Пользователь ошибся → сохраняем/сбрасываем коробку на 1
export function saveMistake({ id, prompt, correct }) {
  const list = loadMistakes()
  const existing = list.find((m) => m.id === id)
  if (existing) {
    existing.box = 1
    existing.ts = Date.now()
  } else {
    list.push({ id, prompt, correct, box: 1, ts: Date.now() })
  }
  localStorage.setItem(KEY, JSON.stringify(list))
}

// Ответил верно → повышаем коробку; выше 4 — ошибка "выучена", удаляем
export function markCorrect(id) {
  const list = loadMistakes()
  const m = list.find((x) => x.id === id)
  if (!m) return
  m.box += 1
  m.ts = Date.now()
  const next = m.box > 4 ? list.filter((x) => x.id !== id) : list
  localStorage.setItem(KEY, JSON.stringify(next))
}

// Ошибки, которые пора показать снова
export function dueMistakes(now = Date.now()) {
  return loadMistakes().filter((m) => now - m.ts >= INTERVALS[m.box])
}