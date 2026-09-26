// weight = сложность вопроса: 1 (A1) ... 4 (B2)
export const testQuestions = [
  { id: 'q1', text: 'She ___ coffee every morning.', options: ['drink', 'drinks', 'drinking', 'is drink'], answer: 1, weight: 1 },
  { id: 'q2', text: 'They ___ to school every day.', options: ['goes', 'go', 'going', 'gone'], answer: 1, weight: 1 },
  { id: 'q3', text: 'I ___ TV yesterday evening.', options: ['watch', 'watched', 'am watch', 'have watch'], answer: 1, weight: 2 },
  { id: 'q4', text: 'There ___ a lot of people at the party.', options: ['was', 'is', 'were', 'are'], answer: 2, weight: 2 },
  { id: 'q5', text: '___ you ever ___ to London?', options: ['Did / been', 'Have / been', 'Have / be', 'Are / be'], answer: 1, weight: 2 },
  { id: 'q6', text: 'She has lived here ___ 2015.', options: ['for', 'since', 'from', 'at'], answer: 1, weight: 3 },
  { id: 'q7', text: 'If it ___ tomorrow, we’ll stay home.', options: ['rain', 'rains', 'will rain', 'rained'], answer: 1, weight: 3 },
  { id: 'q8', text: 'The report ___ by the manager yesterday.', options: ['signed', 'is signed', 'was signed', 'has signed'], answer: 2, weight: 3 },
  { id: 'q9', text: 'I look forward to ___ from you.', options: ['hear', 'hearing', 'heard', 'hears'], answer: 1, weight: 4 },
  { id: 'q10', text: 'He ___ his homework before dinner.', options: ['finished', 'has finished', 'had finished', 'finishes'], answer: 2, weight: 4 },
]

export const levels = [
  { cefr: 'A1', name: 'Beginner English', description: 'You can use simple words and everyday expressions.' },
  { cefr: 'A2', name: 'Elementary English', description: 'You can understand simple sentences and everyday phrases.' },
  { cefr: 'B1', name: 'Intermediate English', description: 'You can handle most situations while traveling.' },
  { cefr: 'B2', name: 'Upper-Intermediate English', description: 'You can speak with native speakers quite easily.' },
]

// score = доля набранных "сложностей" от максимума
export function calcLevel(correctWeight, totalWeight) {
  const ratio = totalWeight === 0 ? 0 : correctWeight / totalWeight
  if (ratio < 0.35) return levels[0]
  if (ratio < 0.55) return levels[1]
  if (ratio < 0.75) return levels[2]
  return levels[3]
}