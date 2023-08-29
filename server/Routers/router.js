
const express = require('express') 
const router = express.Router() 
const games = require('../models/games')
const AppError = require('../utils/appError')

router.get('/all', async (req, res) => {

        const all = await games.find({})

        if(!all) return res.status(404).json({status: false, message: "cannot find todo"})

        res.status(200).json({
                status: true,
                data: {
                    all
                }
        })
})

router.post('/newGame', async (req, res, next ) => {
        const {player1, player2, drawStatus} = req.body;

        // if(!player1 || !player2 || !drawStatus) next(new AppError('please fill all fields', 400))


        // const newGame = new games({
        //         player1,
        //         player2,
        //         drawStatus
        // })

        // await newGame.save()

        const newGame = await games.create({
                player1,
                player2,
                drawStatus
        })

        res.status(201).json({
                status: true,
                message: "data has been created successfulyy",
                data: {
                        newGame
                }
        })

})

module.exports = router