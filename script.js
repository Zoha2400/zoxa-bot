const TelegramBot = require('node-telegram-bot-api');

const token = '1927797930:AAEYW98LcBDUhFSRg_5KqbSPjTZnNVu6IHUn';
const bot = new TelegramBot(token, { polling: true });

bot.setMyCommands([
    { command: '/start', description: 'Запустить бота' },
    { command: '/info', description: 'Информация о боте' },
    { command: '/hello', description: 'Сказать Привет' }
]);

bot.on('message', async msg => {
    const chatId = msg.chat.id;
    const chatTitle = msg.chat.title;
    const text = msg.text;
    const nameOfUser = msg.from.first_name;

    console.log(msg);

    // bot.sendMessage(chatId, 'Your message is ' + text);
    switch (text) {
        case '/start':
            await bot.sendMessage(chatId, `Привет ` + nameOfUser + '!');
            break;
        case '/start@zmFirstBotonJs_bot':
            await bot.sendMessage(chatId, `Привет ` + chatTitle + '!');
            break;
        case '/hello':
            await bot.sendMessage(chatId, 'Ты пидорас, ' + nameOfUser + '!');
            break;

        case '/hello@zmFirstBotonJs_bot':
            await bot.sendMessage(chatId, 'Админ пидорас! ' + '"' + chatTitle + '"' + ' Чат для пидорасов!');
            break;
        case '/info':
            await bot.sendMessage(chatId, 'Я - бот пользователя @andWheal. Мои задачи: Кидать статистку чата и много других плюшек');
            break;
        case '/info@zmFirstBotonJs_bot':
            await bot.sendMessage(chatId, 'Я - бот пользователя @andWheal. Мои задачи: Кидать статистку чата и много других плюшек');
            break;
        default:
            await bot.sendMessage(chatId, 'Я тебя не понимаю..');
    }
    // if (text == '/start') {
    //     await bot.sendMessage(chatId, `Привет ` + nameOfUser + '!');
    // } else if (text == '/hello') {
    //     if (chatTitle == undefined) {
    //         await bot.sendMessage(chatId, 'Ты пидорас, ' + nameOfUser + '!');
    //     } else {
    //         await bot.sendMessage(chatId, 'Админ пидорас! ' + chatTitle + ' Чат для пидорасов!');
    //     }
    // } else {
    //     await bot.sendMessage(chatId, 'Hi! What do you want?');
    // }
});