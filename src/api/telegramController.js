export function sendMessage(botToken, chatId, message){
    return `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`
}