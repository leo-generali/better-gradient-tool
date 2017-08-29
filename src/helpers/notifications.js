export function getRandomEmoji() {
    const emojis = ["👍", "❤", "😍", "😊", "🔥", "⚡", "👌", "😂"]
    const num = Math.floor((Math.random() * emojis.length));
    const emoji = emojis[num];
    return emoji;
}

export function createCopyNotification(name) {
    return `You've succesfully copied ${name}! ${getRandomEmoji()}`;
}

export function createFaveNotification(name, status) {
    return status ?  `You've unfavorited ${name}!` : `You've favorited ${name}! ${getRandomEmoji()}`;
}