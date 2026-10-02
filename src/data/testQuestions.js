// Lingurra Level Test
// Три набора по 10 вопросов — по тому, что человек выбрал на экране "Where are you starting from?":
//   1 = "I'm just starting"       → в основном A1–A2 + 2 вопроса B1 «на вырост»
//   2 = "I can understand some"   → A2 + B1 + B2
//   3 = "I know English well"     → A2 разминка, B1, B2 и C1
//
// translation — русский смысл предложения. Слово/форма, которую проверяем,
// заменена на «…», поэтому перевод помогает понять предложение, но не подсказывает ответ.

const BEGINNER = [
  { id: 'b1', level: 'A1', text: 'My name ___ Anna.', translation: 'Моё имя … Анна.', options: ['am', 'is', 'are', 'be'], answer: 1 },
  { id: 'b2', level: 'A1', text: 'I ___ two brothers.', translation: 'У меня … два брата.', options: ['have', 'has', 'am', 'is'], answer: 0 },
  { id: 'b3', level: 'A1', text: '___ you like pizza?', translation: '… ты любишь пиццу?', options: ['Does', 'Do', 'Are', 'Is'], answer: 1 },
  { id: 'b4', level: 'A1', text: 'They ___ at home now.', translation: 'Сейчас они … дома.', options: ['is', 'am', 'be', 'are'], answer: 3 },

  { id: 'b5', level: 'A2', text: 'I ___ to the cinema yesterday.', translation: 'Вчера я … в кино.', options: ['go', 'goed', 'went', 'am going'], answer: 2 },
  { id: 'b6', level: 'A2', text: 'She is ___ than her sister.', translation: 'Она … , чем её сестра.', options: ['tall', 'more tall', 'tallest', 'taller'], answer: 3 },
  { id: 'b7', level: 'A2', text: "I'm going to ___ my grandmother tomorrow.", translation: 'Завтра я собираюсь … бабушку.', options: ['visit', 'visited', 'visiting', 'visits'], answer: 0 },
  { id: 'b8', level: 'A2', text: "There isn't ___ milk in the fridge.", translation: 'В холодильнике нет … молока.', options: ['some', 'a', 'any', 'many'], answer: 2 },

  { id: 'b9', level: 'B1', text: "I haven't seen him ___ last week.", translation: 'Я не видел его … прошлой недели.', options: ['for', 'since', 'from', 'during'], answer: 1 },
  { id: 'b10', level: 'B1', text: 'If I ___ more money, I would buy a bigger flat.', translation: 'Если бы у меня … больше денег, я бы купил квартиру побольше.', options: ['have', 'will have', 'had', 'would have'], answer: 2 },
]

const INTERMEDIATE = [
  { id: 'm1', level: 'A2', text: 'I ___ breakfast when the phone rang.', translation: 'Я … завтрак, когда зазвонил телефон.', options: ['have', 'was having', 'am having', 'has'], answer: 1 },
  { id: 'm2', level: 'A2', text: 'How ___ water do you drink every day?', translation: 'Сколько … воды ты пьёшь каждый день?', options: ['many', 'few', 'much', 'a lot'], answer: 2 },

  { id: 'm3', level: 'B1', text: 'She has worked here ___ five years.', translation: 'Она работает здесь … пять лет.', options: ['since', 'for', 'from', 'during'], answer: 1 },
  { id: 'm4', level: 'B1', text: "If it ___ tomorrow, we'll stay at home.", translation: 'Если завтра … дождь, мы останемся дома.', options: ['rain', 'will rain', 'rains', 'rained'], answer: 2 },
  { id: 'm5', level: 'B1', text: 'He suggested ___ a taxi instead of walking.', translation: 'Он предложил … такси вместо того, чтобы идти пешком.', options: ['take', 'to take', 'taking', 'took'], answer: 2 },
  { id: 'm6', level: 'B1', text: 'The bridge ___ in 1998.', translation: 'Мост … в 1998 году.', options: ['built', 'is built', 'has built', 'was built'], answer: 3 },

  { id: 'm7', level: 'B2', text: 'If I ___ known, I would have told you.', translation: 'Если бы я … , я бы тебе сказал.', options: ['have', 'had', 'would have', 'has'], answer: 1 },
  { id: 'm8', level: 'B2', text: 'Not only ___ late, but he also forgot the documents.', translation: 'Он не только … опоздал, но и забыл документы.', options: ['he was', 'is he', 'was he', 'he is'], answer: 2 },
  { id: 'm9', level: 'B2', text: "I'd rather you ___ smoke here.", translation: 'Я бы предпочёл, чтобы ты здесь … курить.', options: ["don't", "didn't", "won't", 'not'], answer: 1 },
  { id: 'm10', level: 'B2', text: 'She denied ___ the money.', translation: 'Она отрицала … деньги.', options: ['to take', 'take', 'taking', 'having took'], answer: 2 },
]

const ADVANCED = [
  { id: 'a1', level: 'A2', text: "I ___ never been to Japan.", translation: 'Я никогда не … в Японии.', options: ['have', 'has', 'am', 'did'], answer: 0 },
  { id: 'a2', level: 'A2', text: 'We ___ to the beach last summer.', translation: 'Прошлым летом мы … на пляж.', options: ['go', 'gone', 'going', 'went'], answer: 3 },

  { id: 'a3', level: 'B1', text: 'By the time we arrived, the film ___ already started.', translation: 'К тому времени, как мы приехали, фильм уже ….', options: ['has', 'was', 'had', 'have'], answer: 2 },
  { id: 'a4', level: 'B1', text: "You ___ wear a seatbelt. It's the law.", translation: 'Ты … пристёгиваться ремнём. Это закон.', options: ['might', 'must', 'can', 'would'], answer: 1 },

  { id: 'a5', level: 'B2', text: 'I wish I ___ more time to travel.', translation: 'Я бы хотел, чтобы у меня … больше времени на путешествия.', options: ['have', 'would have', 'had', 'having'], answer: 2 },
  { id: 'a6', level: 'B2', text: 'He talks as if he ___ everything about the topic.', translation: 'Он говорит так, будто … всё об этой теме.', options: ['know', 'knows', 'known', 'knew'], answer: 3 },
  { id: 'a7', level: 'B2', text: 'The meeting has been put ___ until next week.', translation: 'Встречу … до следующей недели.', options: ['away', 'down', 'off', 'out'], answer: 2 },

  { id: 'a8', level: 'C1', text: 'Hardly ___ I sat down when the phone rang.', translation: 'Едва я сел, как зазвонил телефон.', options: ['have', 'did', 'was', 'had'], answer: 3 },
  { id: 'a9', level: 'C1', text: 'Were it not for your help, I ___ failed.', translation: 'Если бы не твоя помощь, я бы … провалился.', options: ['would', 'would have', 'will have', 'had'], answer: 1 },
  { id: 'a10', level: 'C1', text: 'She is said ___ the best surgeon in the country.', translation: 'Говорят, что она … лучший хирург в стране.', options: ['being', 'be', 'to be', 'to being'], answer: 2 },
]

const POOLS = { 1: BEGINNER, 2: INTERMEDIATE, 3: ADVANCED }

// startLevel — число 1/2/3 с экрана выбора. По умолчанию — средний набор.
export function getQuestions(startLevel) {
  return POOLS[startLevel] || INTERMEDIATE
}


// --------------------------------------------------
// LEVELS
// --------------------------------------------------

export const levels = [
  { cefr: 'A1', name: 'Beginner English', description: 'You can use simple words and everyday expressions.' },
  { cefr: 'A2', name: 'Elementary English', description: 'You can understand simple sentences and everyday phrases.' },
  { cefr: 'B1', name: 'Intermediate English', description: 'You can handle most situations while traveling.' },
  { cefr: 'B2', name: 'Upper-Intermediate English', description: 'You can communicate confidently in many everyday situations.' },
  { cefr: 'C1', name: 'Advanced English', description: 'You can express yourself fluently and precisely.' },
]

const ORDER = ['A1', 'A2', 'B1', 'B2', 'C1']


// --------------------------------------------------
// CALCULATE LEVEL
// --------------------------------------------------
//
// Уровень засчитывается, если на нём верно ≥ 50% вопросов.
// Уровни ниже самого первого заданного считаются пройденными
// (человек сам выбрал, что начинает выше), уровни выше последнего
// пройденного — не засчитываются.

export function calcLevel(results) {
  const stats = {}
  ORDER.forEach((l) => (stats[l] = { correct: 0, total: 0 }))

  results.forEach((r) => {
    if (!stats[r.level]) return
    stats[r.level].total += 1
    if (r.isCorrect) stats[r.level].correct += 1
  })

  const firstAsked = ORDER.findIndex((l) => stats[l].total > 0)
  let current = 0

  for (let i = 0; i < ORDER.length; i++) {
    const { correct, total } = stats[ORDER[i]]

    if (total === 0) {
      if (i < firstAsked) current = i
      continue
    }

    if (correct / total >= 0.5) current = i
    else break
  }

  return levels[current]
}