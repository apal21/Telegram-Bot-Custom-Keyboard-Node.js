## Setting Up

  1. Create a Bot in Telegram app and save the Token.
  2. Install node.js in your machine  
  3. Open a Terminal/CMD and Type  
     3.1 `git clone https://github.com/apal21/Telegram-Bot-Custom-Keyboard-Node.js`  
     3.2 `cd Telegram-Bot-Custom-Keyboard-Node.js`  
     3.3 Enter your token in the first line of `index.js` file.  
     3.4 `npm install`  
     3.5 `node index.js`  

----

## How to make your custom keyboard?

```javascript
const KEYBOARD = {
    reply_markup: JSON.stringify({
        keyboard: [
            ['/example', '/keyboard'],
            ['by', 'Apal', 'Shah'],
            ['github.com/apal21']
        ]
    })
}
```

**Note:** You can send your custom keyboard inside the 3rd argument of onText() method which is *optional*.

----

### There are 2 ways to differentiate messages.

1. Write different message text inside the first argument of onText(). Which is something like this:  


```javascript
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'You sent the /start command', KEYBOARD)
})

bot.onText(/\/help/, (msg) => {
    bot.sendMessage(msg.chat.id, 'You sent the /help command', KEYBOARD)
})
```

2. And another one is to define using Regular Expressions
   - Here the "match" is an array and its first element is the message you've sent to your bot.
   - You can fetch that message by just typing "match[0]"
   - Detailed Documentation: https://github.com/yagop/node-telegram-bot-api/

```javascript
bot.onText(/(.+)/, (msg, match) => {

    if (match[0] == "/command") {
        bot.sendMessage(msg.chat.id, 'Received /command')
    } else {
        bot.sendMessage(msg.chat.id, match[0])
    }
    
})
```
