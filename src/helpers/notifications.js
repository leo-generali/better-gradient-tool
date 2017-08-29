export function getRandomEmoji(happy) {
	const emojis = happy ? 
		["👍", "❤", "😍", "😊", "🔥", "⚡", "👌","💪", "✅", "💥"] : 
		["😭", "😩", "😢", "👎", "😐"];

    const num = Math.floor((Math.random() * emojis.length));
    const emoji = emojis[num];
    return emoji;
}

export function createCopyNotification(name) {
    return `You've succesfully copied ${name}! ${getRandomEmoji(true)}`;
}

export function createFaveNotification(name, status) {
    return status ?  
    	`You've  unfavorited ${name}! ${getRandomEmoji(!status)}` : 
    	`You've favorited ${name}! ${getRandomEmoji(!status)}`;
}

export function createNoFaveNotification() {
	return `You haven't favorited any gradients yet! ${getRandomEmoji(false)}`;
}