const TOKEN = process.env.TELEGRAM_TOKEN || 'Paste your Token Here...'
const TelegramBot = require('node-telegram-bot-api')

const options = {
    polling: true
}

const KEYBOARD = {
    reply_markup: JSON.stringify({
        keyboard: [
            ['/example', '/keyboard'],
            ['by', 'Apal', 'Shah'],
            ['github.com/apal21']
        ]
    })
}

const bot = new TelegramBot(TOKEN, options)

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'You sent the /start command', KEYBOARD)
})

bot.onText(/(.+)/, (msg, match) => {
    bot.sendMessage(msg.chat.id, match[0], KEYBOARD)
})