const TOKEN = process.env.BOT_TOKEN || process.env.TELEGRAM_BOT_TOKEN;
const SECRET = process.env.WEBHOOK_SECRET;
const WEB_APP_URL = process.env.WEB_APP_URL || 'https://lingorra17.vercel.app'; // https://ТВОЙ-ПРОЕКТ.vercel.app/
const WELCOME_IMAGE = ''; // HTTPS-ссылка на картинку 640×360, можно пусто

const tg = (method, data) =>
  fetch(`https://api.telegram.org/bot${TOKEN}/${method}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const keyboard = {
  inline_keyboard: [[
    { text: 'Открыть Lingurra', web_app: { url: WEB_APP_URL } },
  ]],
};

async function sendWelcome(chatId, firstName) {
  const name = escapeHtml(firstName || 'друг');
  const text =
    `Привет, ${name}! 🌱\n\n` +
    `Я <b>Lingurra</b> — твой спокойный помощник в английском.\n\n` +
    `Что внутри:\n` +
    `• короткий тест на 10 вопросов — определим твой уровень\n` +
    `• уроки по 10 минут в день\n` +
    `• повторение ошибок в нужное время\n\n` +
    `Без спешки и стресса. Нажми кнопку ниже, чтобы начать 👇`;

  if (WELCOME_IMAGE) {
    await tg('sendPhoto', {
      chat_id: chatId, photo: WELCOME_IMAGE, caption: text,
      parse_mode: 'HTML', reply_markup: keyboard,
    });
  } else {
    await tg('sendMessage', {
      chat_id: chatId, text, parse_mode: 'HTML', reply_markup: keyboard,
    });
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(200).send('ok');

  // проверка секрета вебхука
  if (req.headers['x-telegram-bot-api-secret-token'] !== SECRET) {
    return res.status(403).send('forbidden');
  }

  const message = req.body?.message;
  const chatId = message?.chat?.id;
  const text = (message?.text || '').trim();

  if (chatId) {
    if (text.startsWith('/start')) {
      await sendWelcome(chatId, message.from?.first_name);
    } else if (text === '/help') {
      await tg('sendMessage', {
        chat_id: chatId,
        text: 'Нажми «Открыть Lingurra» — пройди тест на уровень и занимайся по 10 минут в день.',
        reply_markup: keyboard,
      });
    }
  }

  return res.status(200).send('ok');
}