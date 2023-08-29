
const {Schema, model} = require('mongoose')


const gamesSchema = new Schema({
    player1: String,
    player2: String,
    drawStatus: Boolean,
})

module.exports = model('games', gamesSchema)

// [
// 	{
// 	player1: string,
// 	player2: string,
// 	drawStatus?: string
// 	}
// ]