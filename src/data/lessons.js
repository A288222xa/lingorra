export const lessons = [
  {
    id: 'everyday-english',
    name: 'Everyday English',
    description: 'Learn useful words and phrases.',
    duration: '10 min',
    forLevels: ['A1', 'A2'],
    tasks: [
      { id: 'ee1', text: 'She ___ coffee every morning.', options: ['drink', 'drinks', 'drinking', 'is drink'], answer: 1 },
      { id: 'ee2', text: 'I ___ a new phone last week.', options: ['buy', 'bought', 'buying', 'have buy'], answer: 1 },
      { id: 'ee3', text: 'Can you help ___, please?', options: ['I', 'me', 'my', 'mine'], answer: 1 },
      { id: 'ee4', text: 'What time ___ the shop open?', options: ['does', 'do', 'is', 'are'], answer: 0 },
      { id: 'ee5', text: 'There ___ two apples in the bag.', options: ['is', 'are', 'be', 'am'], answer: 1 },
    ],
  },
  {
    id: 'small-talk-basics',
    name: 'Small Talk Basics',
    description: 'Chat naturally about everyday life.',
    duration: '10 min',
    forLevels: ['B1'],
    tasks: [
      { id: 'stb1', text: 'What ___ you do at the weekend?', options: ['do', 'does', 'doing', 'did'], answer: 0 },
      { id: 'stb2', text: 'I usually ___ coffee with my friends on Sundays.', options: ['have', 'has', 'having', 'had'], answer: 0 },
      { id: 'stb3', text: 'How long ___ you lived in this city?', options: ['do', 'have', 'did', 'are'], answer: 1 },
      { id: 'stb4', text: "She's really good ___ speaking in public.", options: ['at', 'in', 'for', 'on'], answer: 0 },
      { id: 'stb5', text: "We're planning ___ to the coast next month.", options: ['go', 'to go', 'going', 'went'], answer: 1 },
    ],
  },
  {
    id: 'confident-conversations',
    name: 'Confident Conversations',
    description: 'Speak naturally like a native speaker.',
    duration: '10 min',
    forLevels: ['B2'],
    tasks: [
      { id: 'cc1', text: 'I wish I ___ more time to travel.', options: ['have', 'had', 'has', 'having'], answer: 1 },
      { id: 'cc2', text: 'He talks as if he ___ everything about the topic.', options: ['know', 'knows', 'knew', 'known'], answer: 2 },
      { id: 'cc3', text: 'Had I known about the meeting, I ___ attended.', options: ['would', 'will', 'would have', 'had'], answer: 2 },
      { id: 'cc4', text: 'The more you practice, ___ you become.', options: ['confident', 'the more confident', 'more confident', 'most confident'], answer: 1 },
      { id: 'cc5', text: "She's not only talented ___ also incredibly hardworking.", options: ['and', 'but', 'so', 'or'], answer: 1 },
    ],
  },
]

// Подбирает урок под уровень, определённый тестом. По умолчанию — самый простой урок.
export function getLessonForLevel(level) {
  const cefr = level?.cefr
  const match = lessons.find((lesson) => lesson.forLevels.includes(cefr))
  return match || lessons[0]
}
