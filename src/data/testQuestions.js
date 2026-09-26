// weight = сложность вопроса: 1 (A1) ... 4 (B2)
export const testQuestions = [
  // --- A1 (weight 1) ---
  { id: 'q1', text: 'She ___ coffee every morning.', options: ['drink', 'drinks', 'drinking', 'is drink'], answer: 1, weight: 1 },
  { id: 'q2', text: 'They ___ to school every day.', options: ['goes', 'go', 'going', 'gone'], answer: 1, weight: 1 },
  { id: 'q3', text: 'I ___ a student.', options: ['am', 'is', 'are', 'be'], answer: 0, weight: 1 },
  { id: 'q4', text: 'This is ___ book.', options: ['a', 'an', 'some', 'any'], answer: 0, weight: 1 },
  { id: 'q5', text: 'We ___ from Spain.', options: ['is', 'am', 'are', 'be'], answer: 2, weight: 1 },
  { id: 'q6', text: 'He ___ two brothers.', options: ['have', 'has', 'having', 'had'], answer: 1, weight: 1 },
  { id: 'q7', text: 'There ___ a cat under the table.', options: ['is', 'are', 'be', 'am'], answer: 0, weight: 1 },
  { id: 'q8', text: 'My favourite colour ___ blue.', options: ['am', 'is', 'are', 'be'], answer: 1, weight: 1 },

  // --- A2 (weight 2) ---
  { id: 'q9', text: 'I ___ TV yesterday evening.', options: ['watch', 'watched', 'am watch', 'have watch'], answer: 1, weight: 2 },
  { id: 'q10', text: 'There ___ a lot of people at the party.', options: ['was', 'is', 'were', 'are'], answer: 2, weight: 2 },
  { id: 'q11', text: 'She ___ to the gym twice a week.', options: ['go', 'goes', 'going', 'gone'], answer: 1, weight: 2 },
  { id: 'q12', text: 'We ___ dinner when the phone rang.', options: ['have', 'having', 'were having', 'has'], answer: 2, weight: 2 },
  { id: 'q13', text: "He didn't ___ his homework.", options: ['do', 'does', 'did', 'doing'], answer: 0, weight: 2 },
  { id: 'q14', text: 'Can you ___ me the salt, please?', options: ['pass', 'passed', 'passing', 'to pass'], answer: 0, weight: 2 },
  { id: 'q15', text: 'I ___ never been to Japan.', options: ['have', 'has', 'am', 'was'], answer: 0, weight: 2 },
  { id: 'q16', text: 'They ___ playing football when it started to rain.', options: ['was', 'were', 'are', 'is'], answer: 1, weight: 2 },

  // --- B1 (weight 3) ---
  { id: 'q17', text: '___ you ever ___ to London?', options: ['Did / been', 'Have / been', 'Have / be', 'Are / be'], answer: 1, weight: 3 },
  { id: 'q18', text: 'She has lived here ___ 2015.', options: ['for', 'since', 'from', 'at'], answer: 1, weight: 3 },
  { id: 'q19', text: "If it ___ tomorrow, we'll stay home.", options: ['rain', 'rains', 'will rain', 'rained'], answer: 1, weight: 3 },
  { id: 'q20', text: 'By the time we arrived, the film ___ already started.', options: ['has', 'had', 'have', 'was'], answer: 1, weight: 3 },
  { id: 'q21', text: "I'm not used to ___ up so early.", options: ['get', 'getting', 'got', 'gets'], answer: 1, weight: 3 },
  { id: 'q22', text: 'He suggested ___ a taxi instead of walking.', options: ['take', 'to take', 'taking', 'took'], answer: 2, weight: 3 },
  { id: 'q23', text: 'You ___ have called me — I was so worried!', options: ['should', 'must', 'might', 'would'], answer: 0, weight: 3 },

  // --- B2 (weight 4) ---
  { id: 'q24', text: 'The report ___ by the manager yesterday.', options: ['signed', 'is signed', 'was signed', 'has signed'], answer: 2, weight: 4 },
  { id: 'q25', text: 'I look forward to ___ from you.', options: ['hear', 'hearing', 'heard', 'hears'], answer: 1, weight: 4 },
  { id: 'q26', text: 'He ___ his homework before dinner.', options: ['finished', 'has finished', 'had finished', 'finishes'], answer: 2, weight: 4 },
  { id: 'q27', text: 'If I ___ known, I would have told you.', options: ['have', 'had', 'would have', 'has'], answer: 1, weight: 4 },
  { id: 'q28', text: 'She speaks English as ___ she were a native speaker.', options: ['if', 'though', 'unless', 'while'], answer: 0, weight: 4 },
  { id: 'q29', text: 'Not only ___ late, but he also forgot the documents.', options: ['he was', 'was he', 'he is', 'is he'], answer: 1, weight: 4 },
  { id: 'q30', text: "It's high time you ___ more seriously about your studies.", options: ['take', 'took', 'taken', 'taking'], answer: 1, weight: 4 },
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
