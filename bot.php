<?php
// Lingurra bot — webhook

// ---------- НАСТРОЙКИ ----------
// Токен НЕ хранить в этом файле: создайте рядом файл config.php (его не выкладывать в git) с содержимым:
//   <?php return ['token' => 'НОВЫЙ_ТОКЕН_ОТ_BOTFATHER'];
$config = require __DIR__ . '/config.php';
$token  = $config['token'];

// HTTPS-адрес, где лежит собранное приложение (папка dist после `npm run build`)
const WEB_APP_URL = 'https://ВАШ-ДОМЕН/app/';

// Необязательно: HTTPS-ссылка на картинку-шапку (640×360). Пусто — отправляем просто текст.
const WELCOME_IMAGE = '';
// --------------------------------


function tg($method, array $data)
{
    global $token;

    $ch = curl_init("https://api.telegram.org/bot{$token}/{$method}");
    curl_setopt_array($ch, [
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => $data,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT        => 10,
    ]);
    $response = curl_exec($ch);
    curl_close($ch);

    return $response;
}

function sendWelcome($chat_id, $first_name)
{
    $name = htmlspecialchars($first_name ?: 'друг', ENT_QUOTES);

    $text =
        "Привет, {$name}! 🌱\n\n" .
        "Я <b>Lingurra</b> — твой спокойный помощник в английском.\n\n" .
        "Что внутри:\n" .
        "• короткий тест на 10 вопросов — определим твой уровень\n" .
        "• уроки по 10 минут в день\n" .
        "• повторение ошибок в нужное время\n\n" .
        "Без спешки и стресса. Нажми кнопку ниже, чтобы начать 👇";

    // Кнопка именно web_app — она открывает мини-приложение внутри Telegram.
    // (раньше стоял "url" на t.me/Lingurra_bot — это просто ссылка на самого бота)
    $keyboard = [
        'inline_keyboard' => [[
            ['text' => 'Открыть Lingurra', 'web_app' => ['url' => WEB_APP_URL]],
        ]],
    ];

    $common = [
        'chat_id'      => $chat_id,
        'parse_mode'   => 'HTML',
        'reply_markup' => json_encode($keyboard),
    ];

    if (WELCOME_IMAGE !== '') {
        tg('sendPhoto', $common + ['photo' => WELCOME_IMAGE, 'caption' => $text]);
    } else {
        tg('sendMessage', $common + ['text' => $text]);
    }
}


$update = json_decode(file_get_contents('php://input'), true);

$message    = $update['message'] ?? null;
$chat_id    = $message['chat']['id'] ?? null;
$text       = trim($message['text'] ?? '');
$first_name = $message['from']['first_name'] ?? '';

if (!$chat_id) {
    exit; // обновление без сообщения (правка, callback и т.п.)
}

// "/start" и "/start что-то" (deep link)
if (strpos($text, '/start') === 0) {
    sendWelcome($chat_id, $first_name);
} elseif ($text === '/help') {
    tg('sendMessage', [
        'chat_id'      => $chat_id,
        'text'         => 'Нажми «Открыть Lingurra» — пройди тест на уровень и занимайся по 10 минут в день.',
        'reply_markup' => json_encode(['inline_keyboard' => [[
            ['text' => 'Открыть Lingurra', 'web_app' => ['url' => WEB_APP_URL]],
        ]]]),
    ]);
}
