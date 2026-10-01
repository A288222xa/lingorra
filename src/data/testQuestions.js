// Lingorra Level Test
// 10 questions: A1 → A2 → B1 → B2
//
// level:
// 1 = A1
// 2 = A2
// 3 = B1
// 4 = B2

export const testQuestions = [
  // ---------------- A1 ----------------

  {
    id: 'q1',
    level: 'A1',
    text: 'She ___ coffee every morning.',
    translation: 'Она пьёт кофе каждое утро.',
    options: ['drink', 'drinks', 'drinking', 'is drink'],
    answer: 1,
  },

  {
    id: 'q2',
    level: 'A1',
    text: 'There ___ a cat under the table.',
    translation: 'Под столом находится кошка.',
    options: ['is', 'are', 'am', 'be'],
    answer: 0,
  },

  // ---------------- A2 ----------------

  {
    id: 'q3',
    level: 'A2',
    text: 'I ___ TV yesterday evening.',
    translation: 'Я смотрел телевизор вчера вечером.',
    options: ['watch', 'watched', 'am watching', 'have watch'],
    answer: 1,
  },

  {
    id: 'q4',
    level: 'A2',
    text: 'We ___ dinner when the phone rang.',
    translation: 'Мы ужинали, когда зазвонил телефон.',
    options: ['have', 'were having', 'has', 'are having'],
    answer: 1,
  },

  // ---------------- B1 ----------------

  {
    id: 'q5',
    level: 'B1',
    text: 'She has lived here ___ 2015.',
    translation: 'Она живёт здесь с 2015 года.',
    options: ['for', 'since', 'from', 'at'],
    answer: 1,
  },

  {
    id: 'q6',
    level: 'B1',
    text: 'If it ___ tomorrow, we will stay home.',
    translation: 'Если завтра будет дождь, мы останемся дома.',
    options: ['rain', 'rains', 'will rain', 'rained'],
    answer: 1,
  },

  {
    id: 'q7',
    level: 'B1',
    text: 'He suggested ___ a taxi instead of walking.',
    translation: 'Он предложил взять такси вместо того, чтобы идти пешком.',
    options: ['take', 'to take', 'taking', 'took'],
    answer: 2,
  },

  // ---------------- B2 ----------------

  {
    id: 'q8',
    level: 'B2',
    text: 'If I ___ known, I would have told you.',
    translation: 'Если бы я знал, я бы тебе сказал.',
    options: ['have', 'had', 'would have', 'has'],
    answer: 1,
  },

  {
    id: 'q9',
    level: 'B2',
    text: 'Not only ___ late, but he also forgot the documents.',
    translation: 'Он не только опоздал, но и забыл документы.',
    options: ['he was', 'was he', 'he is', 'is he'],
    answer: 1,
  },

  {
    id: 'q10',
    level: 'B2',
    text: "It's high time you ___ more seriously about your studies.",
    translation: 'Давно пора тебе серьёзнее относиться к учёбе.',
    options: ['take', 'took', 'taken', 'taking'],
    answer: 1,
  },
]


// --------------------------------------------------
// LEVELS
// --------------------------------------------------

export const levels = [
  {
    cefr: 'A1',
    name: 'Beginner English',
    description: 'You can use simple words and everyday expressions.',
  },

  {
    cefr: 'A2',
    name: 'Elementary English',
    description: 'You can understand simple sentences and everyday phrases.',
  },

  {
    cefr: 'B1',
    name: 'Intermediate English',
    description: 'You can handle most situations while traveling.',
  },

  {
    cefr: 'B2',
    name: 'Upper-Intermediate English',
    description: 'You can communicate confidently in many everyday situations.',
  },
]


// --------------------------------------------------
// CALCULATE LEVEL
// --------------------------------------------------
//
// We don't simply add difficulty weights.
//
// Instead, we look at how well the user performed
// at each level.
//
// A level is considered passed when the user gets
// at least half of the questions at that level correct.
//
// To reach a higher level, the previous levels should
// also be reasonably strong.
//

export function calcLevel(results) {
  const levelStats = {
    A1: { correct: 0, total: 0 },
    A2: { correct: 0, total: 0 },
    B1: { correct: 0, total: 0 },
    B2: { correct: 0, total: 0 },
  }

  results.forEach((result) => {
    const level = result.level

    if (!levelStats[level]) return

    levelStats[level].total += 1

    if (result.isCorrect) {
      levelStats[level].correct += 1
    }
  })

  const passed = (level) => {
    const stats = levelStats[level]

    if (!stats || stats.total === 0) return false

    return stats.correct / stats.total >= 0.5
  }

  // B2
  if (
    passed('A1') &&
    passed('A2') &&
    passed('B1') &&
    passed('B2')
  ) {
    return levels[3]
  }

  // B1
  if (
    passed('A1') &&
    passed('A2') &&
    passed('B1')
  ) {
    return levels[2]
  }

  // A2
  if (
    passed('A1') &&
    passed('A2')
  ) {
    return levels[1]
  }

  // A1
  return levels[0]
}